var btnVisible = true;
        function openCloseButtonsContainer() {
            var btns = document.getElementById("bottom-buttons-container");
           
            if(btnVisible){
                btnVisible = false;
                btns.classList.add('show-bottom-fixed-buttons');
                btns.classList.remove('hidden-buttons');
            }else{
                btnVisible = true;
                btns.classList.remove('show-bottom-fixed-buttons');
                btns.classList.add('hidden-buttons');
            }
        }