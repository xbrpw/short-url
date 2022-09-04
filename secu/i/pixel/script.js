// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    $("tr").remove(); //clear old and make new grid

    let height = $("#input_height").val();
    let width = $("#input_width").val();

    for (let r = 1; r <= height; r++) {
        let rows = "<tr>";
        let cells = "";
        for (let c = 1; c <= width; c++) {
            cells += "<td></td>";
        }
        rows += cells;

        $("#pixel_canvas").append(rows);
    }
}

$("#sizePicker").submit("td", function(event) {
    event.preventDefault();
    makeGrid();
});

let color;

$("#pixel_canvas").click("td", function(event) {
    $(event.target);

    if ($(event.target).css("backgroundColor") != color) {
        color = $("#colorPicker").val();
        $(event.target).css("backgroundColor", color);
        color = $(event.target).css("backgroundColor");
    } else {
        $(event.target).css("backgroundColor", "inherit");
    }
});

// reset grid
$("#reset").click(function() {
    $("td").css("backgroundColor", "inherit");
});