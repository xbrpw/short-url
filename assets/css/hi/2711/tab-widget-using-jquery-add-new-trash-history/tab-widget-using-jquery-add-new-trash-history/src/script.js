/* 
Author:- Hariom Srivastava,
Version:- 1.0,
Author url :- http://stackoverflow.com/users/4345342/hari-om-srivastava
*/


// JavaScript Document

$( document ).ready(function() {
	
	
	
var d = new Date();
var month = d.getMonth()+1;
var day = d.getDate();
var currentDate = day + '-' +
    ((''+month).length<2 ? '0' : '') + month + '-' +
    ((''+day).length<2 ? '0' : '') +  d.getFullYear();
	
var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();	
	
	
/// Add New tab 
$('.add-new-menu').click(function(){
	
	    $('.add-new-tab-pop').addClass('active-div');
		$('.overrelay').addClass('active-div');
	
	
	});
	
/// Create the tab 
$('.new-tab-save').click(function(){
	 
	    
	   var getTabHeading = $('.new-tab-heading').val();
	   
	     var getTabHeadingClass = $('.new-tab-heading').val().replace(/\s+/g, '-').toLowerCase();
	  // alert(getTabHeading);
	   var getTabContent = $('.new-tab-content').val();
	   //alert(getTabContent);
	   
	   
	   // CREATE THE  TAB 
	   
	   // TAB HEADING 
	  
	   $('.tab-heading div').before('<li class="'+getTabHeadingClass+'"><span>'+ getTabHeading +'</span></li>');
	   $('.tab-content-div').append('<div class="'+getTabHeadingClass+'-content tab-content-default"><ul class="tab-edit-section"><li class="edit-the-tab-content">Edit</li><li class="delete-the-tab-content">Delete</li></ul><div class="clearfix"></div><div class="tab-inner-content">'+ getTabContent +'</div></div>');
	  
	   /// TAB CONTNET 
	   
	   
	   /// CREATE THE TAB END
	   
	   
	   // ONLY FOR HISTORY 
	 
	 /// ONLY FOR DATE 
	 

	


//alert(output);
	 
	 /// ONLY FOR DATE END 
	 
	 
	 

	   
	   
	   
	   /// ONLY HISTORY START 
	   
	   $('.history-table').append('<tr class="history-info-row"><td class="tab-heading-table">'+ getTabHeading +'</td><td class="tab-content-table"><span class="history-inner-content">'+ getTabContent +'<a href="#">Read More ..</a></td><td class="tab-date-time-table">'+ currentDate + '/' + time +'</td><td class="tab-delete-table">New Tab</td> <td class="tab-delete-table"><a href="#" class="delete-this-history">Delet</a></td></tr>');

	   
	   // ONLY FOR HISTORY END 
	   
	   	/// ONLY FOR TRASH 
	
	//$('.trash-table').append('<tr class="history-info-row"><td class="tab-heading-table">'+ getTabHeading +'</td><td class="tab-content-table"><span class="history-inner-content">'+ getTabContent +'<a href="#">Read More ..</a></td><td class="tab-date-time-table">'+ currentDate +'</td><td class="tab-delete-table">Delet</td> <td class="tab-delete-table"><a href="#" class="delete-this-history restore-btn">Restore </a></td></tr>');
	
  /// ONLY FOR TRASH END 
	 
	    $('.new-tab-heading').val('');
	    $('.new-tab-content').val('');
	    $('.add-new-tab-pop').removeClass('active-div');
		$('.overrelay').removeClass('active-div');
	
	});




///// Add New tab  END 

/// Add new tab cancel 
$('.new-tab-cancel').click(function(){
	
	    $('.add-new-tab-pop').removeClass('active-div');
		$('.overrelay').removeClass('active-div');
	
	});	
	
	
$(document).on('click','.edit-the-tab-content',function(){
	
	    var getEditHeading = $('.tab-heading-active span').html();
	    var getEditContent = $('.tab-content-active').html();
	    $('.edit-tab-heading').val(getEditHeading);
		$('.edit-tab-content').val(getEditContent);
	    $('.edit-new-tab-pop').addClass('active-div');
		$('.overrelay').addClass('active-div');

	});	

$(document).on('click','.edit-tab-cancel',function(){
	
	         
	
	    $('.edit-new-tab-pop').removeClass('active-div');
		$('.overrelay').removeClass('active-div');

	});	

$('.edit-tab-save').click(function(){
	//alert('Hi');
	  $('.tab-heading li').removeClass('tab-heading-active');
	  $('.tab-content-default').removeClass('tab-content-active');
	   //$('.tab-heading-active').remove();
	   // $('.tab-content-active').remove();
	     var getEditTabHeading = $('.edit-tab-heading').val();
	   
	  // alert(getEditTabHeading);
	     var getEditTabHeadingClass = $('.edit-tab-heading').val().replace(/\s+/g, '-').toLowerCase();
		 
//alert(getEditTabHeadingClass);
		 
		 
	  // alert(getTabHeading);
	   var getEditTabContent = $('.edit-tab-content').val();
	   //alert(getEditTabContent);
	   
	 //  $('.tab-heading-active span').html(getEditTabHeading);
	  // $('.tab-content-active .tab-inner-content').html(getEditTabContent);
	
	   $('.tab-heading div').before('<li class="'+getEditTabHeadingClass+' tab-heading-active"><span>'+ getEditTabHeading +'</span></li>');
	   $('.tab-content-div').append('<div class="'+getEditTabHeadingClass+'-content tab-content-default tab-content-active"><div class="clearfix"></div><div class="tab-inner-content">'+ getEditTabContent +'</div></div>');
	   
	   
	  
	


//alert(output);
	 
	 /// ONLY FOR DATE END 
	 
	   
	   /// ONLY HISTORY END 
	   
	   $('.history-table').append('<tr class="history-info-row"><td class="tab-heading-table">'+ getEditTabHeading +'</td><td class="tab-content-table"><span class="history-inner-content">'+ getEditTabContent +'<a href="#">Read More ..</a></td><td class="tab-date-time-table">'+ currentDate + '/' + time +'</td><td>Edit Tab</td> <td class="tab-delete-table"><a href="#" class="delete-this-history">Delet</a></td></tr>');

	   
	   // ONLY FOR HISTORY END 
	   
	      	/// ONLY FOR TRASH 
	
	//$('.trash-table').append('<tr class="history-info-row"><td class="tab-heading-table">'+ getEditTabHeading +'</td><td class="tab-content-table"><span class="history-inner-content">'+ getEditTabContent +'<a href="#">Read More ..</a></td><td class="tab-date-time-table">'+ currentDate +'</td><td class="tab-delete-table">Delet</td> <td class="tab-delete-table"><a href="#" class="delete-this-history restore-btn">Restore</a></td></tr>');
	
  /// ONLY FOR TRASH END 
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	 
	    $('.edit-tab-heading').val('');
	    $('.edit-tab-content').val('');
		//$('.tab-heading-active').remove();
	   // $('.tab-content-active').remove();
	    $('.edit-new-tab-pop').removeClass('active-div');
		$('.overrelay').removeClass('active-div');
	   
	   
	   
	   
	
	     
	
	});

$(document).on('click','.delete-the-tab-content',function(){
	
	
	
	
	   var getDeletTabHeading = $('.tab-heading-active').html();
	   var getEditTabContent = $('.tab-content-active').text();
	  // alert(getEditTabContent);
	  //alert(getDeletTabHeading);
	 // alert(getEditTabContent);
	// ONLY FOR HISTORY 
	
	$('.history-table').append('<tr class="history-info-row"><td class="tab-heading-table">'+ getDeletTabHeading +'</td><td class="tab-content-table"><span class="history-inner-content">'+ getEditTabContent +'<a href="#">Read More ..</a></td><td class="tab-date-time-table">'+ currentDate + '/' + time +'</td><td class="tab-delete-table">Delet</td> <td class="tab-delete-table"><a href="#" class="delete-this-history">Delet</a></td></tr>');
	
	// ONLY FOR HISTORY END
	
	
	/// ONLY FOR Trash 
	
	$('.trash-table').append('<tr class="history-info-row"><td class="tab-heading-table">'+ getDeletTabHeading +'</td><td class="tab-content-table"><span class="history-inner-content">'+ getEditTabContent +'<a href="#">Read More ..</a></td><td class="tab-date-time-table">'+ currentDate + '/' + time +'</td><td class="tab-delete-table delete-this-delete">Delet</td> <td class="tab-delete-table"><a href="#" class="delete-this-tash restore-btn">Restore</a></td></tr>');
	
  /// ONLY FOR trash END 	
	
	//alert('Hi');
	$('.tab-heading-active').remove();
	$('.tab-content-active').remove();
	//tab-content-default tab-content-active
	$( ".tab-heading li" ).first().addClass('tab-heading-active');
	$( ".tab-content-default" ).first().addClass('tab-content-active');
	
	
	
	
	
	});	
	
	
/// Add new tab cancel END

/// GET TAB 

$(document).on('click','.tab-heading li',function(){
	

//$('.tab-heading li').click(function(){
	//alert('Hi');
	$('li').removeClass('tab-heading-active');
	$(this).addClass('tab-heading-active');
	var getClassName = $(this).attr('class').split(' ')[0];
	//alert(getClassName);
	 $('div').removeClass('tab-content-active');
	$('.'+getClassName+'-content').addClass('tab-content-active');
	
	});


/// GET TB END 



/// FUNCTION ONLY FOR HISTORY SECTION 

$('.history').click(function(){
	
	
	 $('.history-section').addClass('active-div');
     $('.overrelay').addClass('active-div');
	
	
	});

$('.cancel-history-popup').click(function(){
	//alert('Hi');
	 $('.history-section').removeClass('active-div');
     $('.overrelay').removeClass('active-div');
	
	
	});
	

$(document).on('click','.delete-this-history',function(){
	
	   $(this).parent().parent('.history-info-row').remove();
	
	
	});


$('.clearTheHistory').click(function(){
	
	   $('.history-info-row').remove();
	
	});	
	
	
/// FUNCTION ONLY FOR HISTORY SECTION END 


// FUNCTION ONLY FOR DELET SECTION 

$('.trash').click(function(){
	
	    $('.trash-section').addClass('active-div');
		$('.overrelay').addClass('active-div');
	
	});
	

$('.cancel-trash-popup').click(function(){
	
	    $('.trash-section').removeClass('active-div');
		$('.overrelay').removeClass('active-div');
		
	});
	
	
$(document).on('click','.restore-btn',function(){
	
	//alert('Hi');
	var RestoreHeading = $(this).parent().parent('.history-info-row').children('.tab-heading-table').children('span').text();
	var RestoreContent = $(this).parent().parent('.history-info-row').children('.tab-content-table').children('.history-inner-content').text();
	var RestoreHeadingClass = $(this).parent().parent('.history-info-row').children('.tab-heading-table').children('span').text().replace(/\s+/g, '-').toLowerCase();
	
	// Create the new tab 
	
	 $('.tab-heading div').before('<li class="'+RestoreHeadingClass+'"><span>'+ RestoreHeading +'</span></li>');
	   $('.tab-content-div').append('<div class="'+RestoreHeadingClass+'-content tab-content-default"><ul class="tab-edit-section"><li class="edit-the-tab-content">Edit</li><li class="delete-the-tab-content">Delete</li></ul><div class="clearfix"></div><div class="tab-inner-content">'+ RestoreContent +'</div></div>');
	   
	// Create the new tab End 
	// Create the history 
	/// ONLY HISTORY END 
	   
	   $('.history-table').append('<tr class="history-info-row"><td class="tab-heading-table">'+ RestoreHeading +'</td><td class="tab-content-table"><span class="history-inner-content">'+ RestoreContent +'<a href="#">Read More ..</a></td><td class="tab-date-time-table">'+ currentDate + '/' + time +'</td><td>Restore Tab</td> <td class="tab-delete-table"><a href="#" class="delete-this-history">Delet</a></td></tr>');
	
	/// Create the history end 
	
	
	//alert('End');
	
	$(this).parent().parent().remove();
	 $('.trash-section').removeClass('active-div');
		$('.overrelay').removeClass('active-div');
	
	});

/// FUNCTION ONLY FOR DELET SECTION 









});