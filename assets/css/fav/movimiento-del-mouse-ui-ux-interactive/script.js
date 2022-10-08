$(function () {
        $('.cat__img').mousemove(function (e) {
            var offset = $(this).offset();
            var scroll = {
                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                y: document.documentElement.scrollTop || document.body.scrollTop
            };
            var mouse = {
                x: e.clientX - offset.left + scroll.x,
                y: e.clientY - offset.top + scroll.y
            };
            var mouseX = mouse.x;
            var mouseY = mouse.y;
            var mouseUpLeft = mouseX >= 0 && mouseX <= 162 && mouseY >= 0 && mouseY <= 139;
            var mouseTop = mouseX >= 163 && mouseX <= 241 && mouseY >= 0 && mouseY <= 139;
            var mouseUpRight = mouseX >= 242 && mouseX <= 365 && mouseY >= 0 && mouseY <= 139;
            var mouseRight = mouseX >= 242 && mouseX <= 365 && mouseY >= 140 && mouseY <= 193;
            var mouseRightDown = mouseX >= 242 && mouseX <= 365 && mouseY >= 194 && mouseY <= 333;
            var mouseDown = mouseX >= 163 && mouseX <= 241 && mouseY >= 193 && mouseY <= 333;
            var mouseDownLeft = mouseX >= 0 && mouseX <= 162 && mouseY >= 194 && mouseY <= 333;
            var mouseLeft = mouseX >= 0 && mouseX <= 162 && mouseY >= 140 && mouseY <= 193;
            if (mouseTop) {
                $(this).attr('class', 'cat__img').addClass('up');
            } else if (mouseUpLeft) {
                $(this).attr('class', 'cat__img').addClass('up-left');
            } else if (mouseUpRight) {
                $(this).attr('class', 'cat__img').addClass('up-right');
            } else if (mouseRight) {
                $(this).attr('class', 'cat__img').addClass('right');
            } else if (mouseRightDown) {
                $(this).attr('class', 'cat__img').addClass('right-down');
            } else if (mouseDown) {
                $(this).attr('class', 'cat__img').addClass('down');
            } else if (mouseDownLeft) {
                $(this).attr('class', 'cat__img').addClass('down-left');
            } else if (mouseLeft) {
                $(this).attr('class', 'cat__img').addClass('left');
            }
            console.log(mouseX + ',' + mouse.y);
        });
    });