<script>
    $( document ).ready(function() {
//Записываем ID нужных вертикальных блоков в массив данных       
      var blockidvert = [  
       "#rec302487576" ,
       "#rec302546371" ,
       "#rec302643369" ,
       "#rec302646111" ,
       "#rec302647708" ,
       "#rec302650143" ,
       "#rec302721867" ,
       "#rec302735528" ,
       "#rec302739768" ,
//       "#rec302495201" , 
       "#rec304196955" ,
                  ];
    function completewrap(){                             
//Добавляем классы к нужным блокам 
   for(let i = 0; i < blockidvert.length; i++){
     $(blockidvert[i]).addClass('singlelememt');
   };


//Оборачиваем эти блоки в секции   
   $('.singlelememt').wrap('<section class="vertical-scrolling"></section>');
//Все блоки оборачиваем в общий контейнер
   $('.vertical-scrolling').wrapAll('<div id="fullPage"></div>');


//Настройки эффекта
$('#fullPage').fullpage({
    sectionSelector: '.vertical-scrolling',
    anchors: ['main', 'hello', 'slidefull', 'service', 'bike', 'works', 'about', 'meet', 'theend','Theend'],
    navigationTooltips: ['Главная', 'Материалы', 'Покрытие', 'Палитра'  ,'Оттенки стали' , 'УФ-печать', 'Лазерная гравировка', 'Накладные элементы' ,'Пигменты','Контакты'],
            css3: true,
            scrollingSpeed: 1500,
            navigation: true,
            slidesNavigation: true,
            responsiveHeight: 330,
            dragAndMove: true,
            scrollBar: true, 
            loopTop:true,
            loopBottom:true,
            controlArrows: true
    
});


  };  

 if ($(window).width() > 100){
    completewrap();  
    $('body,html').css('overflow','hidden');

 };



});

var oldWidth = window.innerWidth;
window.onresize = function () {
    var newWidth = window.innerWidth;
    if (newWidth != oldWidth) {
        oldWidth = newWidth;
        window.location.reload(true);
    }
};
</script>
