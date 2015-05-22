// JavaScript Document

$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		$('#disp table td').eq(3).text(device.model);
		$('#disp table td').eq(5).text(device.cordova);
		$('#disp table td').eq(7).text(device.platform);
		$('#disp table td').eq(9).text(device.version);
		$('#disp table td').eq(11).text(device.uuid);
		document.addEventListener("pause",function(){
			escribehistoria('la app se pauso');
		},false);//pause
		document.addEventListener("resume",function(){
			escribehisoria('la app se reinicio');
		},false);//resume
			document.addEventListener("online",function(){
			escribehistoria('la app se se conecto a la red');
		},false);//se conecto
		document.addEventListener("offline",function(){
			escribehisoria('la app se se desconecto dela red');
		},false);//ready devide
		
		{);//document
		function escribehistoria(accion){
			$('#eHisoria').append('<li>'+accion'</li>');