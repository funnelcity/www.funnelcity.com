/* contact form validation */

$(function() {
 // Handler for .ready() called.
 	var error_flag = false;

 	/*** plugins ***/
 	$.fn.addInvalidEntry = function(){
 		
 		$('<small class="error">Invalid '+$(this).attr('placeholder')+' entry</small>').insertAfter($(this));
		error_flag = true;
		
 		return this;
 	}

 	$.fn.removeInvalidEntry = function(){

 		$(this).parent().find('small').remove();
 		
 		return this;
 	}


 	/*** validation ***/
	var validateEmail =  function(email_input){

	 	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;  
	 	var emailInput = $.trim(email_input.val());

	    if(!emailReg.test(emailInput) || !email_input.val().length) {  
	        return false;
	    } 
	    
	    return true;   
	}   

	var validateRequiredTextField = function(name_input){
	 
	 	var nameInput = $.trim(name_input.val());

	 	if(!nameInput.length){
	 		return false;
	 	}

	 	return true;
	 
	}


	/*** display ***/
	var displayRequiredTextField = function(input){

		if(!validateRequiredTextField(input) ){
			input.addClass('error').addInvalidEntry();
		}else{
			input.removeClass('error').removeInvalidEntry();
			
		}

	}

	var displayEmailField = function(input){

		if(!validateEmail(input) ) {
			input.addClass('error').addInvalidEntry();
		}else{
			input.removeClass('error').removeInvalidEntry();
		}
	}



	$('#contact_submit').on('click',function(event){
		
		error_flag = false;
		$('small.error').remove();

		
		displayRequiredTextField($('input[name="firstname"]'));
		displayRequiredTextField($('input[name="lastname"]'));

		displayEmailField($('input[name="email"]'));
		
		  	
		if(error_flag){
			return true;
		}else{
			$(this).parent().submit();
		}  	
		

	});

});