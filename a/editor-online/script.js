tinymce.init({
  selector: "#mytextarea",
  height: 400,
  plugins: [
    "advlist autolink advcode lists link image charmap print preview anchor",
    "searchreplace visualblocks code fullscreen",
    "insertdatetime media table paste emoticons"
  ],
  toolbar:
    "styleselect | bold italic underline | alignleft aligncenter alignright alignjustify | code ",
    menubar: "file edit view insert format tools table help",
  setup: function (editor) {
    editor.on("keyup", function (e) {
      updateHTML(editor.getContent());
    });
    editor.on("change", function (e) {
      updateHTML(editor.getContent());
    });
  }
});

function updateHTML(content) {
  cmeditor.getDoc().setValue(content);
}

function updateEditor() {
  if (!tinymce.activeEditor.hasFocus()) {
    tinymce.activeEditor.setContent(cmeditor.getDoc().getValue());
  }
}

var HTMLContainer = document.querySelector(".HTMLContainer");

var cmeditor = CodeMirror(HTMLContainer, {
  lineNumbers: true,
  mode: "htmlmixed"
});

cmeditor.on("change", (editor) => {
  updateEditor();
});