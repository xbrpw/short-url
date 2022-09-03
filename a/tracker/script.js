var script = {
    el: "#app",
    data: function () {
            return {
            amount: '',
            to: '',
            info: '',
            date: '',
            total: 0,
            error: false,
            expenses: []
        }
    },
    methods: {
        addExpense: function () {
            if (this.checkForm()) {
                this.error = true;
            } else {
                const data = {
                    amount: this.amount,
                    to: this.to,
                    info: this.info,
                    date: this.date
                };
                this.amount = '';
                this.to = '';
                this.info = '';
                this.date = '';
                this.expenses.unshift(data);
                localStorage.setItem('q-vue-expenses', JSON.stringify(this.expenses));
                this.getTotal();
            }
        },
        clearExpenses: function () {
            this.expenses = [];
            this.total = 0;
            localStorage.setItem('q-vue-expenses', JSON.stringify(this.expenses));

        },
        getTotal: function () {
            let initialTotal = 0;
            this.expenses.forEach(data => {
                initialTotal += Math.abs(data.amount);
            });
            this.total = initialTotal;
        },
        checkForm: function () {
            return this.amount === '' || this.to === '' || this.info === '' || this.data === '' ? true : false
        },
        getCsv: function () {
            const headers = {
                amount: "Amount",
                to: "For",
                info: "Info",
                date: "Date"
            };

            let itemsNotFormatted = JSON.parse(localStorage.getItem('q-vue-expenses'));

            let itemsFormatted = [];

            // format the data
            itemsNotFormatted.forEach((item) => {
                itemsFormatted.push({
                    amount: item.amount, // remove commas to avoid errors,
                    to: item.to,
                    info: item.info,
                    date: item.date
                });
            });

            const fileTitle = 'Expenses'; // or 'my-unique-title'

            this.exportCSVFile(headers, itemsFormatted, fileTitle);
        },
        convertToCSV: function (objArray) {
            var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ',';

                    line += array[i][index];
                }

                str += line + '\r\n';
            }

            return str;
        },
        exportCSVFile: function (headers, items, fileTitle) {
            if (headers) {
                items.unshift(headers);
            }

            // Convert Object to JSON
            var jsonObject = JSON.stringify(items);

            var csv = this.convertToCSV(jsonObject);

            var exportedFilenmae = fileTitle + '.csv' || 'export.csv';

            var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            if (navigator.msSaveBlob) { // IE 10+
                navigator.msSaveBlob(blob, exportedFilenmae);
            } else {
                var link = document.createElement("a");
                if (link.download !== undefined) { // feature detection
                    // Browsers that support HTML5 download attribute
                    var url = URL.createObjectURL(blob);
                    link.setAttribute("href", url);
                    link.setAttribute("download", exportedFilenmae);
                    link.style.visibility = 'hidden';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
            }
        }
    },
    created: function () {
        if (localStorage.getItem('q-vue-expenses')) {
            this.expenses = JSON.parse(localStorage.getItem('q-vue-expenses'));
        } else {
            localStorage.setItem('q-vue-expenses', JSON.stringify([]));
        }
        this.getTotal();
    }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { attrs: { id: "app" } }, [
    _c("h1", { staticClass: "title" }, [_vm._v("EXPENSE TRACKER")]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "flex" }, [
      _c("div", { staticClass: "flex_content flex_form" }, [
        _c(
          "form",
          {
            staticClass: "form",
            on: {
              submit: function($event) {
                $event.preventDefault();
                return _vm.addExpense($event)
              }
            }
          },
          [
            _c("label", { attrs: { for: "amount" } }, [_vm._v("Amount")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model.number",
                  value: _vm.amount,
                  expression: "amount",
                  modifiers: { number: true }
                }
              ],
              attrs: {
                type: "number",
                id: "amount",
                autocomplete: "off",
                required: ""
              },
              domProps: { value: _vm.amount },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.amount = _vm._n($event.target.value);
                },
                blur: function($event) {
                  return _vm.$forceUpdate()
                }
              }
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "to" } }, [_vm._v("To")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.to,
                  expression: "to"
                }
              ],
              attrs: {
                type: "text",
                id: "to",
                autocomplete: "off",
                required: ""
              },
              domProps: { value: _vm.to },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.to = $event.target.value;
                }
              }
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "note" } }, [_vm._v("Note")]),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.info,
                  expression: "info"
                }
              ],
              attrs: { id: "note", rows: "5" },
              domProps: { value: _vm.info },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.info = $event.target.value;
                }
              }
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "date" } }, [_vm._v("Date")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.date,
                  expression: "date"
                }
              ],
              attrs: { type: "date", id: "date", required: "" },
              domProps: { value: _vm.date },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.date = $event.target.value;
                }
              }
            }),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "btn btn_success", attrs: { type: "submit" } },
              [_vm._v("Add expense")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn_danger",
                on: {
                  click: function($event) {
                    $event.preventDefault();
                    return _vm.clearExpenses($event)
                  }
                }
              },
              [_vm._v("Clear record")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn_primary",
                on: {
                  click: function($event) {
                    $event.preventDefault();
                    return _vm.getCsv($event)
                  }
                }
              },
              [_vm._v("Export as .csv")]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex_content flex_expenses" },
        [
          _c("h2", { staticClass: "head" }, [_vm._v("Expenses")]),
          _vm._v(" "),
          _c("div", { staticClass: "total" }, [
            _c("h3", [_vm._v("TOTAL")]),
            _vm._v(" "),
            _vm.total > 0 && Math.abs(_vm.total) !== Math.floor(_vm.total)
              ? _c("h3", [_vm._v("$" + _vm._s(_vm.total))])
              : _vm._e(),
            _vm._v(" "),
            Math.abs(_vm.total) === Math.floor(_vm.total)
              ? _c("h3", [_vm._v("$" + _vm._s(_vm.total) + ".0")])
              : _c("h3", [_vm._v("$0.0")])
          ]),
          _vm._v(" "),
          _vm._l(_vm.expenses, function(expense) {
            return _c("div", { staticClass: "expense" }, [
              _c("p", { staticClass: "to" }, [
                _c("b", [_vm._v("To:")]),
                _vm._v(" " + _vm._s(expense.to))
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "date" }, [
                _c("b", [_vm._v("Date:")]),
                _vm._v(" " + _vm._s(expense.date))
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "amnt" }, [
                _c("b", [_vm._v("Amount:")]),
                _vm._v(" $" + _vm._s(expense.amount))
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "note" }, [
                _c("b", [_vm._v("Note:")]),
                _vm._v(" " + _vm._s(expense.info))
              ])
            ])
          })
        ],
        2
      )
    ])
  ])
};
var __vue_staticRenderFns__ = [
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("p", { staticClass: "abt" }, [
      _c("q", [
        _vm._v(
          "This expense tracker helps you track your expenses for as long as you wish. Whenever you wish to start\n            tracking afresh (This can be after a week or a month or any period of time), click on the clear records\n            button to clear everything. Click on the 'Export as CSV button to export the records as a .csv\n            file'\n        "
        )
      ]),
      _c("small", [_vm._v(" -- Manaswini")])
    ])
  }
];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-25ed40a9_0", { source: "\nbody {\n    background-color: rgb(38, 76, 126);\n    padding: 0 50px;\n}\n#app {\n    font-family: \"Nunito\", sans-serif;\n    color: aliceblue;\n}\n#app .title,\n#app .abt {\n    text-align: center;\n}\n.flex {\n    display: flex;\n    width: 80%;\n    margin: auto;\n    justify-content: safe;\n}\n.flex_content {\n    flex: 1;\n    border: 1px solid #fff;\n    border-radius: 7px;\n}\n.flex_content:nth-of-type(1) {\n    margin-right: 1%;\n}\n.flex_content:nth-of-type(2){\n    flex: 1.3;\n}\n.flex_content:nth-of-type(1){\n    background-color: rgba(23, 47, 78, 0.918);\n}\n.form input {\n    font-family: \"Nunito\", sans-serif;\n    display: block;\n    margin-bottom: 20px;\n    margin-top: 4px;\n    width: 95%;\n    height: 30px;\n    outline: none;\n    border: 1px solid #ffffff71;\n    border-radius: 4px;\n    padding-left: 5%;\n}\n.form textarea {\n    font-family: \"Nunito\", sans-serif;\n    display: block;\n    margin-bottom: 20px;\n    margin-top: 4px;\n    width: 95%;\n    outline: none;\n    border: 1px solid #ffffff71;\n    border-radius: 4px;\n    padding: 5px 0 5px 5%;\n}\n.flex_form{\n    padding: 40px;\n}\n.form button{\n    display: block;\n    margin-bottom: 10px;\n    width: 100%;\n    height: 30px;\n    text-transform: uppercase;\n    font-weight: 400;\n    outline: none;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    font-family: \"Nunito\", sans-serif;\n}\nform button.btn_success{\n    background-color: rgb(3, 211, 90);\n    color: #ffffff;\n}\nform button.btn_danger{\n    background-color: rgb(228, 29, 29);\n    color: #ffffff;\n}\nform button.btn_primary{\n    background-color: rgb(6, 85, 255);\n    color: #ffffff;\n}\n.flex_expenses{\n    overflow-y: auto;\n    max-height: 120vh;\n}\n.flex_expenses .head{\n    background-color: rgba(23, 47, 78, 0.918);\n    margin: 0;\n    padding-top: 10px;\n    padding-bottom: 4px;\n    text-align: center;\n    border-top-right-radius: 7px;\n    border-top-left-radius: 7px;\n}\n.flex_expenses .total{\n    background-color: rgba(23, 47, 78, 0.562);\n    display: flex;\n    padding: 5px 10px;\n    justify-content: space-between;\n    margin-bottom: 5%;\n}\n.flex_expenses .total h3{\n    margin: 0;\n}\n.flex_expenses .expense{\n    border-left: 10px solid rgba(23, 47, 78, 0.918);\n    color: #000000;\n    padding: 2%;\n    border-radius: 7px;\n    background-color: #fefefe;\n    width: 85%;\n    margin: auto;\n    margin-bottom: 2%;\n}\n.flex_expenses .expense p{\n    margin: 1%;\n}\n@media screen and (max-width: 768px){\n.flex{\n        flex-direction: column;\n        width: 90%;\n}\n.flex_expenses{\n        margin-top: 3%;\n}\n}\n@media screen and (max-width: 500px){\nbody{\n        padding: 0 20px;\n}\n}\n", map: {"version":3,"sources":["/tmp/codepen/vuejs/src/pen.vue"],"names":[],"mappings":";AAwLA;IACA,kCAAA;IACA,eAAA;AACA;AAEA;IACA,iCAAA;IACA,gBAAA;AACA;AAEA;;IAEA,kBAAA;AACA;AAEA;IACA,aAAA;IACA,UAAA;IACA,YAAA;IACA,qBAAA;AACA;AAEA;IACA,OAAA;IACA,sBAAA;IACA,kBAAA;AACA;AAEA;IACA,gBAAA;AACA;AAEA;IACA,SAAA;AACA;AAEA;IACA,yCAAA;AACA;AAEA;IACA,iCAAA;IACA,cAAA;IACA,mBAAA;IACA,eAAA;IACA,UAAA;IACA,YAAA;IACA,aAAA;IACA,2BAAA;IACA,kBAAA;IACA,gBAAA;AACA;AAEA;IACA,iCAAA;IACA,cAAA;IACA,mBAAA;IACA,eAAA;IACA,UAAA;IACA,aAAA;IACA,2BAAA;IACA,kBAAA;IACA,qBAAA;AACA;AAEA;IACA,aAAA;AACA;AAEA;IACA,cAAA;IACA,mBAAA;IACA,WAAA;IACA,YAAA;IACA,yBAAA;IACA,gBAAA;IACA,aAAA;IACA,YAAA;IACA,kBAAA;IACA,eAAA;IACA,iCAAA;AACA;AAEA;IACA,iCAAA;IACA,cAAA;AACA;AAEA;IACA,kCAAA;IACA,cAAA;AACA;AAEA;IACA,iCAAA;IACA,cAAA;AACA;AAEA;IACA,gBAAA;IACA,iBAAA;AACA;AAEA;IACA,yCAAA;IACA,SAAA;IACA,iBAAA;IACA,mBAAA;IACA,kBAAA;IACA,4BAAA;IACA,2BAAA;AACA;AAEA;IACA,yCAAA;IACA,aAAA;IACA,iBAAA;IACA,8BAAA;IACA,iBAAA;AACA;AAEA;IACA,SAAA;AACA;AAEA;IACA,+CAAA;IACA,cAAA;IACA,WAAA;IACA,kBAAA;IACA,yBAAA;IACA,UAAA;IACA,YAAA;IACA,iBAAA;AACA;AAEA;IACA,UAAA;AACA;AAEA;AACA;QACA,sBAAA;QACA,UAAA;AACA;AAEA;QACA,cAAA;AACA;AACA;AAEA;AACA;QACA,eAAA;AACA;AACA","file":"pen.vue","sourcesContent":["<template>\n    <div id=\"app\">\n        <h1 class=\"title\">EXPENSE TRACKER</h1>\n        <p class=\"abt\">\n            <q>This expense tracker helps you track your expenses for as long as you wish. Whenever you wish to start\n                tracking afresh (This can be after a week or a month or any period of time), click on the clear records\n                button to clear everything. Click on the 'Export as CSV button to export the records as a .csv\n                file'\n            </q><small> -- Manaswini</small>\n        </p>\n        <div class=\"flex\">\n            <div class=\"flex_content flex_form\">\n                <form @submit.prevent=\"addExpense\" class=\"form\">\n                    <label for=\"amount\">Amount</label>\n                    <input type=\"number\" id=\"amount\" v-model.number=\"amount\" autocomplete=\"off\" required>\n\n                    <label for=\"to\">To</label>\n                    <input type=\"text\" id=\"to\" v-model=\"to\" autocomplete=\"off\" required>\n\n                    <label for=\"note\">Note</label>\n                    <textarea id=\"note\" rows=\"5\" v-model=\"info\"></textarea>\n\n                    <label for=\"date\">Date</label>\n                    <input type=\"date\" id=\"date\" v-model=\"date\" required>\n\n                    <button class=\"btn btn_success\" type=\"submit\">Add expense</button>\n                    <button class=\"btn btn_danger\" @click.prevent=\"clearExpenses\">Clear record</button>\n                    <button class=\"btn btn_primary\" @click.prevent=\"getCsv\">Export as .csv</button>\n                </form>\n            </div>\n            <div class=\"flex_content flex_expenses\">\n                <h2 class=\"head\">Expenses</h2>\n                <div class=\"total\">\n                    <h3>TOTAL</h3>\n                    <h3 v-if=\"total > 0 && Math.abs(total) !== Math.floor(total)\">${{ total }}</h3>\n                    <h3 v-if=\"Math.abs(total) === Math.floor(total)\">${{ total }}.0</h3>\n                    <h3 v-else>$0.0</h3>\n                </div>\n                <div class=\"expense\" v-for=\"expense in expenses\">\n                    <p class=\"to\"><b>To:</b> {{ expense.to }}</p>\n                    <p class=\"date\"><b>Date:</b> {{ expense.date }}</p>\n                    <p class=\"amnt\"><b>Amount:</b> ${{ expense.amount }}</p>\n                    <p class=\"note\"><b>Note:</b> {{ expense.info }}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\n    export default{\n    el: \"#app\",\n    data: function () {\n            return{\n            amount: '',\n            to: '',\n            info: '',\n            date: '',\n            total: 0,\n            error: false,\n            expenses: []\n        }\n    },\n    methods: {\n        addExpense: function () {\n            if (this.checkForm()) {\n                this.error = true;\n            } else {\n                const data = {\n                    amount: this.amount,\n                    to: this.to,\n                    info: this.info,\n                    date: this.date\n                };\n                this.amount = '';\n                this.to = '';\n                this.info = '';\n                this.date = '';\n                this.expenses.unshift(data);\n                localStorage.setItem('q-vue-expenses', JSON.stringify(this.expenses));\n                this.getTotal()\n            }\n        },\n        clearExpenses: function () {\n            this.expenses = [];\n            this.total = 0;\n            localStorage.setItem('q-vue-expenses', JSON.stringify(this.expenses));\n\n        },\n        getTotal: function () {\n            let initialTotal = 0;\n            this.expenses.forEach(data => {\n                initialTotal += Math.abs(data.amount)\n            });\n            this.total = initialTotal;\n        },\n        checkForm: function () {\n            return this.amount === '' || this.to === '' || this.info === '' || this.data === '' ? true : false\n        },\n        getCsv: function () {\n            const headers = {\n                amount: \"Amount\",\n                to: \"For\",\n                info: \"Info\",\n                date: \"Date\"\n            };\n\n            let itemsNotFormatted = JSON.parse(localStorage.getItem('q-vue-expenses'));\n\n            let itemsFormatted = [];\n\n            // format the data\n            itemsNotFormatted.forEach((item) => {\n                itemsFormatted.push({\n                    amount: item.amount, // remove commas to avoid errors,\n                    to: item.to,\n                    info: item.info,\n                    date: item.date\n                });\n            });\n\n            const fileTitle = 'Expenses'; // or 'my-unique-title'\n\n            this.exportCSVFile(headers, itemsFormatted, fileTitle);\n        },\n        convertToCSV: function (objArray) {\n            var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;\n            var str = '';\n\n            for (var i = 0; i < array.length; i++) {\n                var line = '';\n                for (var index in array[i]) {\n                    if (line != '') line += ','\n\n                    line += array[i][index];\n                }\n\n                str += line + '\\r\\n';\n            }\n\n            return str;\n        },\n        exportCSVFile: function (headers, items, fileTitle) {\n            if (headers) {\n                items.unshift(headers);\n            }\n\n            // Convert Object to JSON\n            var jsonObject = JSON.stringify(items);\n\n            var csv = this.convertToCSV(jsonObject);\n\n            var exportedFilenmae = fileTitle + '.csv' || 'export.csv';\n\n            var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });\n            if (navigator.msSaveBlob) { // IE 10+\n                navigator.msSaveBlob(blob, exportedFilenmae);\n            } else {\n                var link = document.createElement(\"a\");\n                if (link.download !== undefined) { // feature detection\n                    // Browsers that support HTML5 download attribute\n                    var url = URL.createObjectURL(blob);\n                    link.setAttribute(\"href\", url);\n                    link.setAttribute(\"download\", exportedFilenmae);\n                    link.style.visibility = 'hidden';\n                    document.body.appendChild(link);\n                    link.click();\n                    document.body.removeChild(link);\n                }\n            }\n        }\n    },\n    created: function () {\n        if (localStorage.getItem('q-vue-expenses')) {\n            this.expenses = JSON.parse(localStorage.getItem('q-vue-expenses'));\n        } else {\n            localStorage.setItem('q-vue-expenses', JSON.stringify([]));\n        }\n        this.getTotal()\n    }\n}\n</script>\n\n<style>\n    body {\n    background-color: rgb(38, 76, 126);\n    padding: 0 50px;\n}\n\n#app {\n    font-family: \"Nunito\", sans-serif;\n    color: aliceblue;\n}\n\n#app .title,\n#app .abt {\n    text-align: center;\n}\n\n.flex {\n    display: flex;\n    width: 80%;\n    margin: auto;\n    justify-content: safe;\n}\n\n.flex_content {\n    flex: 1;\n    border: 1px solid #fff;\n    border-radius: 7px;\n}\n\n.flex_content:nth-of-type(1) {\n    margin-right: 1%;\n}\n\n.flex_content:nth-of-type(2){\n    flex: 1.3;\n}\n\n.flex_content:nth-of-type(1){\n    background-color: rgba(23, 47, 78, 0.918);\n}\n\n.form input {\n    font-family: \"Nunito\", sans-serif;\n    display: block;\n    margin-bottom: 20px;\n    margin-top: 4px;\n    width: 95%;\n    height: 30px;\n    outline: none;\n    border: 1px solid #ffffff71;\n    border-radius: 4px;\n    padding-left: 5%;\n}\n\n.form textarea {\n    font-family: \"Nunito\", sans-serif;\n    display: block;\n    margin-bottom: 20px;\n    margin-top: 4px;\n    width: 95%;\n    outline: none;\n    border: 1px solid #ffffff71;\n    border-radius: 4px;\n    padding: 5px 0 5px 5%;\n}\n\n.flex_form{\n    padding: 40px;\n}\n\n.form button{\n    display: block;\n    margin-bottom: 10px;\n    width: 100%;\n    height: 30px;\n    text-transform: uppercase;\n    font-weight: 400;\n    outline: none;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    font-family: \"Nunito\", sans-serif;\n}\n\nform button.btn_success{\n    background-color: rgb(3, 211, 90);\n    color: #ffffff;\n}\n\nform button.btn_danger{\n    background-color: rgb(228, 29, 29);\n    color: #ffffff;\n}\n\nform button.btn_primary{\n    background-color: rgb(6, 85, 255);\n    color: #ffffff;\n}\n\n.flex_expenses{\n    overflow-y: auto;\n    max-height: 120vh;\n}\n\n.flex_expenses .head{\n    background-color: rgba(23, 47, 78, 0.918);\n    margin: 0;\n    padding-top: 10px;\n    padding-bottom: 4px;\n    text-align: center;\n    border-top-right-radius: 7px;\n    border-top-left-radius: 7px;\n}\n\n.flex_expenses .total{\n    background-color: rgba(23, 47, 78, 0.562);\n    display: flex;\n    padding: 5px 10px;\n    justify-content: space-between;\n    margin-bottom: 5%;\n}\n\n.flex_expenses .total h3{\n    margin: 0;\n}\n\n.flex_expenses .expense{\n    border-left: 10px solid rgba(23, 47, 78, 0.918);\n    color: #000000;\n    padding: 2%;\n    border-radius: 7px;\n    background-color: #fefefe;\n    width: 85%;\n    margin: auto;\n    margin-bottom: 2%;\n}\n\n.flex_expenses .expense p{\n    margin: 1%;\n}\n\n@media screen and (max-width: 768px){\n    .flex{\n        flex-direction: column;\n        width: 90%;\n    }\n\n    .flex_expenses{\n        margin-top: 3%;\n    }\n}\n\n@media screen and (max-width: 500px){\n    body{\n        padding: 0 20px;\n    }\n}\n</style>"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );

export default __vue_component__;