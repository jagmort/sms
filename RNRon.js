var namb = prompt('Номер РНР' );
var place = prompt('Место проведения работ' );
//var time = prompt('Время пропадания услуг - Пример "7 часов" или "30 мин"' );
//var abon = prompt('Колличество страдающих абонентов' );




var r = "РНР №" + namb + " на  оборудование связи, кабель, оборудование электропитания, информационные технологии" +"\n"+ "МЕСТО ПРОВЕДЕНИЯ: " + place  +" \nВЛИЯНИЕ НА УСЛУГИ: недоступность в течение … часов ежедневно с … по …  услуг Интернет для … абонентов, телефонная связь для … абонентов в … с телефонными номерами в диапазоне…";


document.getElementById("group_interaction_info_form-tab_view-commentary").value = r;
document.getElementById("group_interaction_info_form-tab_view-commentary").rows = 15;
document.getElementById("group_interaction_info_form-tab_view-businessInteraction").value = "РНР №" + namb;
