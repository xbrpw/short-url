$(document).ready(function(){
      var storage = false;
      if (typeof(Storage) !== "undefined") {
        if (localStorage.list!=undefined){
          list = JSON.parse(localStorage.getItem("list"));
          if (Object.keys(list).length>0) {
            $('title').text("Tu tienes ("+Object.keys(list).length+") notas en tu lista");
          }
          for (var i = 0; i < Object.keys(list).length; i++) {
            Object.keys(list)[i]
            $('.todo').append(
              '<div class="list-item" data-postid="'+Object.keys(list)[i]+'">'+list[(Object.keys(list)[i])]+
              '</div><div class="close"><i class="fas fa-times"></i></div>'
            );
          }
        }
        else{
          var list = {};
        }
        storage = true;
      } else {
        // No Local Storage
        var list = {};
      }
      function randChar(s) {
        e="";
        for (var i = 0; i < s; i++) {
          e+=String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }
        return e;
      }
      $('#add').on('click', function(){
        i=$('#item').val();
        if (i!="") {
          uniqid = Date.now();
          id=(uniqid/1231).toString().split(".")[1]+randChar(4);
          list[id]=i;
          $('title').text("Tienes ("+Object.keys(list).length+") actividades en tu lista");
          if (storage) {localStorage.setItem("list",JSON.stringify(list));}
          $('#item').val("");
          $('.todo').append(
            '<div class="list-item" data-postid="'+id+'">'+i+
            '</div><div class="close"><i class="fas fa-times"></i></div>'
          );
        }
        else {
          $('#item').focus();
        }
      });
      $('#item').keypress('',function(event) {
        if (event.keyCode === 13) {
          $('#add').click();
        }
      });

      $(document).on('click','.close',function () {
        //console.log("test");
        delete list[$(this).prev('.list-item').attr('data-postid')];
        if (storage) {localStorage.setItem("list",JSON.stringify(list));}
        $(this).prev(".list-item").remove();
        $(this).remove()
        if (Object.keys(list).length>0) {
          $('title').text("Tienes ("+Object.keys(list).length+") pendientes en tu lista");
        }
        else {
          $('title').text('ToDo List');
        }
      })
    });