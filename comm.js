var i = confirm("Отрубили Э/Э ??? .Если да то ОК Нет - отмена");
if (i==true){

var y=prompt('Кто подтвердил? .Если неизвестно то Отмена',  );

if (y==null){

alert('РЭС подтвердил отключение электроэнергии');

}
else
alert('Отключение электроэнергии подтвердил '+y );
}

else alert('РЭС не подтвердил отключение Э/Э' );
