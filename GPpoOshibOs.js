var test = prompt("втавте строку", '');
var arr = test.split(' ');
document.getElementById('group_interaction_info_form-tab_view-group_interaction_type_1').click();
setTimeout(function() {
document.getElementById('group_interaction_rule_frame_form-selected_group_problem_rule_type_4').click();
}, 1130);
setTimeout(function() {
document.getElementById('group_interaction_rule_frame_form-j_idt1084-node_input').value = arr[3];
}, 3030);

setTimeout(function() {
var name =  document.getElementById('group_interaction_info_form-tab_view-node_rule_building-address_ac_input').value + " " + arr[2] + " " + 
arr[3] + ", " +  "Ошибки на интерфейсе " + arr[4] + ". " + "Без деградации сервисов." ;
document.getElementById('group_interaction_info_form-tab_view-businessInteraction').value = name;
var prim = "ГП технологическая, абонентов не привязывать. " + name;
document.getElementById('group_interaction_info_form-tab_view-commentary').value = prim;
}, 15030);
