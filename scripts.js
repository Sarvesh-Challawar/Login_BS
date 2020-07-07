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
	
	// new Darkmode().showWidget();

	//Code from official site of Darkmode.js
	var options = {
		  bottom: '64px', // default: '32px'
		  right: 'unset', // default: '32px'
		  left: '32px', // default: 'unset'
		  time: '0.5s', // default: '0.3s'
		  mixColor: '#fff', // default: '#fff'
		  backgroundColor: '#ffffff',  // default: '#fff'
		  buttonColorDark: '#100f2c',  // default: '#100f2c'
		  buttonColorLight: '#fff', // default: '#fff'
		  saveInCookies: false, // default: true,
		  label: '🌓', // default: ''
		  autoMatchOsTheme: true // default: true
		}

	const darkmode = new Darkmode(options);
	darkmode.showWidget();
});