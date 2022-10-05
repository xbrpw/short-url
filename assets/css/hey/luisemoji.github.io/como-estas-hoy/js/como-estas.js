$(function()
{
    var sToggle = 1,si, i = 0, count = 0, mood, moods = ['great','okay','bad'];

    function startAnimation()
    {
        si = setInterval(function()
        { 
            mood = moods[i];
            $('#mood-'+mood).toggleClass('active');

            if( (count % 2) != 0 )
            {
                ++i;
                if( count == 5 )
                {
                    count = -1;
                    i = 0;
                }
            }
            ++count;
        },1500);
    }

    startAnimation();

    $('#play-pause').on('click',function()
    {
        if( sToggle )
        {
            sToggle = 0;
            clearInterval(si);
        }
        else
        {
            sToggle = 1;
            startAnimation();
        }
    });

    $('#clear').on('click',function()
    {
        clearInterval(si);
        $('#play-pause, #clear').addClass('disabled');
        $('.active').removeClass('active');
        $('#play-pause').off('click');
        $('#clear').off('click');
    });

});