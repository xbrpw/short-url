const $el = {
  input: document.querySelector('#input'),
  output: document.querySelector('#output'),
  toggle: document.querySelector('#fromJSON'),
  sample: document.querySelector('.button-sample'),
  upload: document.querySelector('#upload'),
  arrays: document.querySelector('#simple-arrays'),
  download: document.querySelector('.button-download') };


const props = {
  sample: [
  {
    name: 'Soursop',
    url: 'https://en.wikipedia.org/wiki/Soursop',
    aka: ['Custard Apple', 'Graviola'],
    price: 1.45,
    unit: 'kg',
    meta: {
      notes: 'heir apparent to the "fruit" throne',
      tastes: ['sour', 'sweet', 'acidic, yes'] },

    'description, etc.': 'an enchanting tropical fruit',
    awesome: true },

  {
    name: 'Mangosteen',
    url: 'https://en.wikipedia.org/wiki/Purple_mangosteen',
    aka: ['Purple Mangosteen'],
    price: 5.45,
    unit: 'kg',
    meta: {
      notes: 'the god of fruit',
      'other prices': [6.20, 10.65] },

    grown: ['Southeast Asia', 'Australia'],
    awesome: true }] };




const fn = {
  init: () => {
    $el.input.addEventListener('input', fn.convert);
    $el.toggle.addEventListener('change', () => {
      $el.input.value = $el.output.value;
      fn.convert();
    });
    $el.sample.addEventListener('click', fn.sample);
    $el.upload.addEventListener('change', fn.upload);
    $el.download.addEventListener('click', fn.download);
    $el.arrays.addEventListener('click', fn.convert);

    try {
      const saved = localStorage.input;
      if (saved) {
        $el.toggle.checked = localStorage.type == 'json';
        $el.input.value = saved;
        fn.convert();
      } else fn.sample();
    } catch (e) {/**/}
  },

  upload: e => {
    const reader = new FileReader();
    const type = (e.target.files[0].name || 'csv').replace(/.*\./, '');
    reader.readAsText(e.target.files[0], "UTF-8");
    reader.onload = () => {
      $el.toggle.checked = type === 'json';
      $el.input.value = reader.result || '';
      fn.convert();
    };
  },

  download: () => {
    const a = document.createElement('a');
    a.style = 'display:none';
    document.body.appendChild(a);
    const blob = new Blob([$el.output.value], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = `converted-${Math.round(Date.now() / 1000)}.${$el.toggle.checked ? 'csv' : 'json'}`;
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  },

  sample: () => {
    $el.input.value = $el.toggle.checked ? JSON.stringify(props.sample, null, 2) : fn.fromJSON.csv(props.sample);
    fn.convert();
  },

  convert: () => {
    try {
      const output = ($el.toggle.checked ? fn.fromJSON.csv : fn.fromCSV.json)($el.input.value);
      $el.output.value = output;
      try {
        localStorage.type = $el.toggle.checked ? 'json' : 'csv';
        localStorage.input = $el.input.value;
      } catch (e) {/**/}
      delete $el.input.dataset.invalid;
    } catch (e) {
      $el.input.dataset.invalid = '';
      console.warn(e);
    }
  },

  fromCSV: {
    json: csv => {
      csv = csv.replace(/\r/g, '');

      // encode all comma-enclosed cells      
      const cells = csv.replace(/(^|,)("[\s\S]*?(?:""[\s\S]*?)*?")(?=,|$)/gm, (s, a, b) => a + encodeURIComponent(b));

      // split by newline to create rows
      const rows = cells.split('\n');
      props.json = fn.fromCSV.rows(rows);

      console.log('Decoded JSON: %cprops.json', 'font-weight:bold');
      console.log(props.json);
      return JSON.stringify(props.json, null, 2);
    },
    rows: rows => {
      const keys = fn.fromCSV.str(decodeURIComponent(rows[0]));

      return rows.slice(1).map(row => {
        const columns = fn.fromCSV.str(decodeURIComponent(row));

        return keys.reduce((r, k, i) =>
        Object.assign(r, { [fn.fromCSV.val(k)]: fn.fromCSV.val(columns[i]) }), {});
      });
    },
    str: str => {

      // encode all double-quoted commas (base level)
      str = str.replace(/""[\s\S]*?""/g, s => encodeURIComponent(s));
      let length;

      // recursively encode all lists, out from the middle
      while (length !== str.length) {
        length = str.length;
        str = str.replace(/\(([^()]*)\)/g, (s, v) => `%28${encodeURIComponent(v)}%29`);
      }

      // encode all single-quoted commas
      str = str.replace(/"[\s\S]*?"/g, s => encodeURIComponent(s));

      return str.split(/, ?/);
    },
    val: val => {
      console.log(val);
      let decoded = decodeURIComponent(val);
      console.log(decoded);

      if (decoded.charAt(0) === '"') {
        decoded = decoded.replace(/^"+|"+$/g, '');
        try {
          decoded = decodeURIComponent(decoded);
        } catch (e) {}
      } else if (fn.isNumeric(decoded)) return Number(decoded);
      if (/^(true|false)$/i.test(decoded)) return decoded.toLowerCase() === 'true';

      if ($el.arrays.checked && decoded.charAt(0) !== '(' && decoded.indexOf('\n') >= 0) {
        decoded = `(${decoded.split(/\n/).map(v => encodeURIComponent(v)).join(',')})`;
      }
      if (decoded.charAt(0) === '(') {
        return (decoded.match(/\([^()]*\)/g) || []).reduce((r, m, a) => {
          const inner = m.slice(1, -1);
          const split = inner.split(':');
          if (split.length > 1 && !((split[0].match(/"/g) || []).length % 2)) {
            if (!r) r = {};
            return Object.assign(r, { [fn.fromCSV.val(split[0])]: fn.fromCSV.val(split.slice(1).join(':')) });
          } else if (!r) {
            return inner.split(/, ?/g).map(val => fn.fromCSV.val(val));
          } else {
            return r;
          }
        }, false);
      }
      return decoded.replace(/""/g, '"');
    } },


  fromJSON: {
    csv: json => {
      const rows = typeof json === 'string' ? JSON.parse(json) : json;
      const columns = fn.fromJSON.columns(rows, 0);

      const output = [];
      for (let row = 0; row < rows.length + 1; row++) {
        const list = [];
        for (let col = 0; col < columns.length; col++) {
          list.push(columns[col][row] || '');
        }
        output.push(list.join(','));
      }

      props.csv = output.join('\n');
      console.log('Decoded CSV: %cprops.csv', 'font-weight:bold');
      return props.csv;
    },
    columns: (rows, depth) => {
      const columns = [];
      rows.forEach((row, i) => {
        fn.fromJSON.row(row, i, columns, depth);
      });
      return columns;
    },
    row: (row, i, columns, depth) => {
      let prev = -1;
      Object.keys(row).forEach((key, ii) => {
        const val = fn.fromJSON.str(key, depth);
        let n = columns.findIndex(col => {
          return col[0] === val;
        });
        if (n < 0) {
          n = Math.max(prev + 1, ii + (columns.length <= ii ? 0 : 1));
          columns.splice(n, 0, [val]);
        }
        prev = n;
        columns[n][i + 1] = fn.fromJSON.val(row[key], depth);
      });
    },
    str: (str, depth) => {
      str = str.indexOf(',') < 0 && str !== 'true' && str !== 'false' ? str : `"${str}"`;
      return str.replace(depth ? /(^|[^"])"($|[^"])/g : /(.)"(.)/g, '$1""$2');
    },
    val: (val, depth) => {
      if (typeof val === 'number') return val;
      if (typeof val === 'boolean') return val.toString();
      if (typeof val === 'string') return fn.fromJSON.str(val, depth);
      const enclose = depth ? '' : '"';
      if (val instanceof Array) {
        console.log(depth);
        if ($el.arrays.checked && !depth && !val.reduce((r, v) => r || typeof v === 'object', false)) return `"${val.map(v => v.toString()).join('\n')}"`;else
        return `${enclose}(${val.map(v => fn.fromJSON.val(v, ++depth)).join(',')})${enclose}`;
      }
      if (typeof val === 'object') return `${enclose}(${fn.fromJSON.columns([val], ++depth).map(c => c.join(':')).join(')(')})${enclose}`;
      return '';
    } },


  isNumeric: val => {
    // https://stackoverflow.com/a/1830844/720204    
    return !isNaN(val - parseFloat(val));
  } };


console.clear();
fn.init();