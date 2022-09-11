var doc = new jsPDF(); 
var specialElementHandlers = { 
    '#editor': function (element, renderer) { 
        return true; 
    } 
};
$('#submit').click(function () { 
    doc.fromHTML($('#content').html(), 15, 15, { 
        'width': 600, 
            'elementHandlers': specialElementHandlers 
    }); 
    doc.save('opening-drabonBall.pdf'); 
});