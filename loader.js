mainUrl='https://raw.githubusercontent.com/nektoOi/sms/master/';

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); 
	xmlHttp.send( null );
   return xmlHttp.responseText;
}


if((document.location.href).indexOf('10.78.16.120:8080/argus/')>=0){
	actoinScript=mainUrl+'sms4.js';
	eval(httpGet(actoinScript));
}
if((document.location.href).indexOf('http://omssis-sms.mts-nn.ru/sms2/')>=0){
	actoinScript=mainUrl+'sms5.js';
	eval(httpGet(actoinScript));
}
if(('    '+document.location.href).indexOf('http://nagios.ulrt.net/')>1){
	getUrl='ulnag';
}

if((document.location.href).indexOf('http://fttb.mts-nn.ru/monit.php')>=0){
	actoinScript=mainUrl+'fttb.js';
	eval(httpGet(actoinScript));
}
//if(getUrl.length>1){
	//actoinScript=mainUrl+'sms4.js';
	//eval(httpGet(actoinScript));
//}else{
	//alert("Данная страница пока не поддерживается(((");
//}
