mainUrl='https://raw.githubusercontent.com/nektoOi/sms/master/';

//document.getElementById("j_idt1604-history_form-new_comment").value = "Дано СМС оповещение ответственному подразделению";
//$( "span[class='ui-button-icon-left ui-icon ui-c argus-ui-icon-ok']" ).click();

var result = $("table tr:eq(1) td:eq(0)").text();

//var y = result.split(/^\W+/);
var arr = result.split(';');
var y = '';
arr.forEach(function(element) {
    if(element.match(/\[(\d+\.){3}\d+\]/)) y = element;
});
var adres = $('#group_interaction_info_form-tab_view-node_rule_building_out-node_rule_building_out').text();
var timedown = $('#group_interaction_info_form-tab_view-calculate_due_date_form_out').text();

var mess = "Недоступно оборудование " + adres +' '+ y + " Время начала аварии " + timedown;
//$("#group_interaction_info_form-tab_view-node_rule_building_out-node_rule_building_out").html('<input type="button" name="nubex" value="Nubex" />');


//$("columns").html('<button class="copy" id="copyw">Перейти в СМС</button><<input class="text" id="gert" value="аааа"  />');
$( "div[class='ui-grid-col-12']" ).html('<button class="copy" id="copyw">Перейти в СМС</button><<input class="text" id="gert" value="аааа"  />');
document.getElementById('gert').value = mess;


var button = document.querySelector('.copy');
button.addEventListener('click', function(event) {
  var text = document.querySelector('.text');
  text.select();
  document.execCommand('copy');

window.open("http://wiki.kortkeros.com/sms2/backend/web/index.php");
});
document.getElementById('copyw').click();
