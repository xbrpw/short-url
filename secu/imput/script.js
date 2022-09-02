// super mega awesome populator

function superMegaAwesomePopulator() {

    console.log('superMegaAwesomePopulator()');

    $('[data-pop]').on('keypress keyup change blur', function (event) {

        //var data = $(this).val().toLowerCase();
         data = $(this).val();
         dataRef = $(this).attr('data-pop');
         if ($(this).is('[contenteditable]')) {
             data = $(this).html();
         }

        //var dataVal = localStorage.getItem(dataRef);

        //set localstorage
        // if checkbox set something different
        if ($(this).is('input[type="checkbox"], input[type="radio"]')) {
            if ($(this).is(':checked')) {
                localStorage.setItem(dataRef, $(this).attr('data-value'));
                data = $(this).attr('data-value');
            }
            else {
                localStorage.setItem(dataRef, '');
                data = '';
            }
        }
        else {
            localStorage.setItem(dataRef, data);
            console.log('else not checkbox: ' + dataRef + ', ' + data);
        }
        //populate on the fly

        $('[data-pop="' + dataRef + '"]').each(function () {
            if ($(this).is('select, input, textarea, [contenteditable]')) {
                //console.log('fly if input: ' + dataRef + ', ' + localStorage.getItem(dataRef));

                if (dataRef === 'fontsize' ||
                    dataRef === 'lineheight' ||
                    dataRef === 'font' ||
                    dataRef === 'texti' ||
                    dataRef === 'textb' ||
                    dataRef === 'textalign' ||
                    dataRef === 'columns') {
                    $('[contenteditable]').attr(dataRef, data);
                    //console.log('hello');
                }

            }
            else if ($(this).is('img')) {
                $(this).attr('src', localStorage.getItem(dataRef));
            }
            else {
                $(this).text(localStorage.getItem(dataRef));
                //console.log('fly else not input: ' + dataRef + ', ' + localStorage.getItem(dataRef));
            }
        });

    });
}
superMegaAwesomePopulator();


function popload() {
            $('[data-pop]').each(function () {

                //console.log('loop number = ' + number);

                var $this = $(this);

                var dataRef = $this.attr('data-pop');
                var data = localStorage.getItem(dataRef);

                //console.log('dataref = ' + dataRef);

                //console.log('data = ' + data);

                if (data != null) {

                    //console.log('not null');

                    if (data != '') {
                        if ($this.is('select, input, textarea')) {
                            if ($this.is('input[type="checkbox"], input[type="radio"]')) {
                                if (data == $this.attr('data-value')) {
                                    $this.prop('checked', true);
                                }
                            }
                            else {
                                $this.val(data);
                            }
                        }
                        else if ($this.is('img')) {
                            $this.attr('src', data);
                        }
                        else {
                            $this.html(data);
                        }

                        if (dataRef === 'fontsize' ||
                            dataRef === 'lineheight' ||
                            dataRef === 'font' ||
                            dataRef === 'texti' ||
                            dataRef === 'textb' ||
                            dataRef === 'textalign' ||
                            dataRef === 'columns') {
                            $('[contenteditable]').attr(dataRef, data);
                        }
                    }
                }
            });
}

popload();

function columns() {
    
}

$('[data-function="logout"]').click(function () {
    localStorage.clear();
    location.reload();
    //console.log('clear');
});