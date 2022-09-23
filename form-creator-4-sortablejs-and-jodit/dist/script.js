// --- Data demo
let data =
'[{"id":"gfydi7","key":"Form title","type":"title"},{"id":"cf1lif","key":"Form description","type":"description"},{"id":"1mf5uo","key":"Subscribed","type":"checkbox"},{"id":"f1kyfc","key":"More Info","type":"textarea"},{"id":"4axpz0","key":"Next page","type":"pagebreak"},{"id":"e0u3sr","key":"About us","type":"textarea"}]';

// --- Short id
const _id = el => document.getElementById(el);
const _ = el => document.querySelector(el);

// --- Btn generate form
_id("store").onclick = () => generateForm();

// --- Add new dragable element
_id("new").onclick = () => createList(_id("creator"), "name", "text");

let editor = null;
let sortable = null;

// --- Import data and init Sortable
importList(_id("creator"), JSON.parse(data)).then(() => {
  sortable = Sortable.create(_id("creator"), {
    handle: ".drag" });

  editor = new Jodit("#html", {
    buttons: "source,bold,italic,underline,strikethrough,ul,ol,left,font,fontsize,paragraph,brush,image,hr,table",
    toolbarButtonSize: "small",
    height: 500 });

});

// --- Generate form
generateForm();

/** ==========================
 *  =  Functions
 *  ========================== */

// --- Generate form
function generateForm() {
  // empty form
  _id("form").innerHTML = "";

  // get array data
  let arr = exportList();

  // map elements and render with formTemplate
  arr.map(item => formTemplate(item));

  // create button for preview
  let addNew = createElement("button", _id("form"), {
    innerHTML: '<i class="bi-grid me-1"></i> Render',
    className: "btn btn-sm btn-primary me-3",
    onclick: function () {
      // clean html preview
      _id("html").value = "";

      // get all data-uid
      let outputHtml = "",
      root = this.parentNode,
      elements = root.querySelectorAll("[data-uid]"),
      arr = Array.prototype.slice.call(elements);

      // map elements and render with previewHtml
      arr.map(item => outputHtml += previewHtml(item));

      // show preview
      editor.value = outputHtml;
    } });


  // create print button
  let printBtn = createElement("button", _id("form"), {
    innerHTML: '<i class="bi-printer me-1"></i> Print',
    className: "btn btn-sm btn-warning",
    onclick: () => printDiv() });

}

// --- Template form
function formTemplate(attr) {
  // id form
  const form = _id("form");
  // clear spaces and convert to lowercase
  const name = attr.key.toLowerCase().replace(/\s/g, "-");
  // init values for switch
  let div = null,
  label = null,
  input = null,
  textarea = null;

  // Switch type of element
  switch (attr.type) {
    case "checkbox":
      // create div>label+input
      div = createElement("div", form, {
        className: "form-check mb-3" });

      label = createElement("label", div, {
        for: uid(6),
        className: "form-check-label",
        textContent: attr.key });

      input = createElement("input", div, {
        id: uid(6),
        name: name,
        className: "form-check-input",
        type: "checkbox" });

      // add data-uid data-title & data-type for preview
      input.setAttribute("data-uid", uid(6));
      input.setAttribute("data-title", attr.key);
      input.setAttribute("data-type", attr.type);
      break;

    case "textarea":
      // div > label+textarea
      div = createElement("div", form, {
        className: "mb-3" });

      label = createElement("label", div, {
        for: uid(6),
        textContent: attr.key,
        className: "form-label" });

      textarea = createElement("textarea", div, {
        id: uid(6),
        name: name,
        rows: 3,
        className: "form-control" });


      // extra attributes for preview
      textarea.setAttribute("data-uid", uid(6));
      textarea.setAttribute("data-title", attr.key);
      textarea.setAttribute("data-type", "textarea");
      break;

    case "pagebreak":
      // preview span for pagebreak
      let line = createElement("span", form, {
        className: "text-black-50 my-3 d-block",
        textContent: `<----- ${attr.key} ----->` });


      // extra attributes for preview
      line.setAttribute("data-uid", uid(6));
      line.setAttribute("data-title", attr.key);
      line.setAttribute("data-type", "pagebreak");
      break;

    default:
      //create div > label + input
      div = createElement("div", form, {
        className: "mb-3" });

      label = createElement("label", div, {
        for: uid(6),
        textContent: attr.key,
        className: "form-label" });

      input = createElement("input", div, {
        id: uid(6),
        dataId: name,
        name: name,
        type:
        attr.type !== "title" || attr.type !== "description" ? attr.type : "text",
        className: "form-control" });

      // extra attributes for preview
      input.setAttribute("data-uid", uid(6)); // random id
      input.setAttribute("data-title", attr.key);
      input.setAttribute("data-type", attr.type);
      break;}

}

// --- Preview form output
function previewHtml(attr) {
  // use data-type to check type
  if (attr.dataset.type === "title") {
    return `<h2 class="border-bottom border-dark">${attr.value}</h2>`;
  } else if (attr.dataset.type === "description") {
    return `<p class="lead">${attr.value}</p>`;
  } else if (attr.dataset.type === "checkbox") {
    return `<p><b>${attr.dataset.title}: </b> ${attr.checked ? "👌" : "⛔"}</p>`;
  } else if (attr.dataset.type === "textarea") {
    return `<p class="text-muted"><b class="border-bottom border-dark">${attr.dataset.title}: </b><br/><span class="text-muted">${attr.value}</span></p>`;
  } else if (attr.dataset.type === "pagebreak") {
    // pagebrak for print
    return `<div class="noprint" style="border-top:1px dashed #ddd;">&nbsp;</div><p style="page-break-after: always;"><iframe style="display:none;"></iframe></p>`;
  } else {
    return `<p><b>${attr.dataset.title}: </b> ${attr.value}</p>`;
  }
}

// https://www.geeksforgeeks.org/print-the-contents-of-a-div-element-using-javascript/
function printDiv() {
  let divContents = editor.value;
  let a = window.open("", "");
  a.document.write("<html>");
  a.document.write(
  '<head><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"/><style>@media print {.noprint{ display: none !important; }}</style></head>');

  a.document.write("<body>");
  a.document.write(
  `<div class="container-fluid"><div class="row"><div class="col-md-12">${divContents}</div></div></div>`);

  a.document.write("</body></html>");
  a.document.close();
  a.print();
}



// --- Import data with async
async function importList(elem, data) {
  let arr = Array.prototype.slice.call(data);
  await arr.map(function (item) {
    createList(elem, item.key, item.type);
  });
}

// --- Create element
function createElement(element, where, args) {
  let d = document.createElement(element);
  if (args) for (const [k, v] of Object.entries(args)) d[k] = v;
  where.appendChild(d);
  return d;
}

// --- Create list
function createList(wherePlaceElement, key, typeOfValue) {
  // contendor para agrupar
  let dragAndDropContainer = createElement("div", wherePlaceElement, {
    className: "key",
    draggable: true });


  // Boton para mover el grupo
  let bDrag = createElement("span", dragAndDropContainer, {
    innerHTML: "☰",
    className: "drag" });


  // creamos el elemento key
  let inputKey = createElement("input", dragAndDropContainer, {
    type: "text",
    className: "input-key",
    value: key // valor del elemento
  });

  // creamos el elemento select para elegir el tipo de elemento
  let selectType = createElement("select", dragAndDropContainer, {
    className: "input-select",
    onchange: function (evt) {
      //console.log(evt.target.value);
    } });


  // generamos la lista de opciones del elemento type
  let array = [
  "title",
  "description",
  "color",
  "date",
  "month",
  "number",
  "text",
  "textarea",
  "checkbox",
  "time",
  "week",
  "pagebreak"];

  for (let i = 0; i < array.length; i++) {
    let options = createElement("option", selectType, {
      selected: array[i] === typeOfValue ? true : false,
      value: array[i],
      text: array[i] });

  }

  // creamos el boton de eleminar el grupo
  let bClose = createElement("button", dragAndDropContainer, {
    className: "btn btn-danger",
    innerHTML: "&times;",
    onclick: function () {
      this.parentElement.remove();
    } });

}

// --- Export list
function exportList() {
  let selectors = document.querySelectorAll(".key"),
  arr = Array.prototype.slice.call(selectors),
  objs = [];
  arr.map(function (item) {
    if (typeof item.children[1] !== "undefined") {
      objs.push({
        id: uid(6),
        key: item.children[1].value,
        type: item.children[2].value });

    }
  });
  console.log(JSON.stringify(objs));
  return objs;
}

// --- Generate random uid
function uid(len) {
  let IDX = 36,
  HEX = "";
  while (IDX--) HEX += IDX.toString(36);
  let str = "",
  num = len || 11;
  while (num--) str += HEX[Math.random() * 36 | 0];
  return str;
}