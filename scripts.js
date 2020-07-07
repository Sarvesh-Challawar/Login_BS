$(document).ready(function(){
    $('#signUp').click(function(){
    	$('#SignUp').modal('show');
	});
	$('#eye_btn1').click(function(){
		$(this).toggleClass("fa-eye fa-eye-slash");
		var input=$('#pwd');
		input.attr('type')==='password'?input.attr('type','text'):input.attr('type','password');
	});
	$('#eye_btn2').click(function(){
		$(this).toggleClass("fa-eye fa-eye-slash");
		var input=$('#cpwd');
		input.attr('type')==='password'?input.attr('type','text'):input.attr('type','password');
	});
	$('#eye_btn3').click(function(){
		$(this).toggleClass("fa-eye fa-eye-slash");
		var input=$('#pass');
		input.attr('type')==='password'?input.attr('type','text'):input.attr('type','password');
	});
});