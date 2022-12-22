
//(function () { //защита глобальных переменных


//Главный код

//Все используемые глобальные переменные:
let hidd = 0; //Количество потери видимости страницы
let hidd_time=[];//Когда была потеряна видимость
let sec_not_full=0;//Сколько секунд было открыто неполное разрешение страницы
let flag=0;//флаг, чтобы были загруженны достоверные данные 
let promej_time=[];//Периоды времени неполного разрешения страницы
let start_screen;//Начальный период времени разреш.ст.
let end_screen;//Конечный период времени разреш.ст.
let vrema=0;//время из секундомера. |искать по //Секундомер 
let startTime = Date.now() //Нужно для нормальной работы секундомера
let screenWidth = window.screen.width;//Кофигурация монитора
let screenHeight = window.screen.height;//Кофигурация монитора
let copy = 0;//Кол-ов сочетания клавиш CTRL+C
let paste = 0;//Кол-ов сочетания клавиш CTRL+V
let X = document.getElementById('X');//Координаты мыши по x
let Y = document.getElementById('Y');//Координаты мыши по y
let windowOuterWidth = 0;//Разрешение страницы в текущий момент
let windowOuterHeight = 0;//Разрешение страницы в текущий момент


//Главный код

//Вариант сохранения данных
window.onbeforeunload = function() {
  if(isNaN(hidd)) hidd=0
  localStorage.setItem('hidd',hidd)
  console.log(localStorage+' '+'save')
};
if (localStorage.length>0) hidd=parseInt(localStorage.getItem('hidd'))

// данные через json
function mix() 
        {
          //Подсчёт штраф-баллов
          let cheat_point=0
          cheat_point+=10*hidd  //сворачивание 10 баллов  
          cheat_point+=sec_not_full //Минута 60 баллов

          //Итоговвый статус пользователя
          let status_polz=''
          if (cheat_point<30){ //todo1
            status_polz='vse norm'
          }
          else{
            status_polz='podozreniy'
          }

          //отправка через ajax json ом
          let user = {
            status:status_polz,
            cheat_point: cheat_point,
            all_hid: hidd,
            hidd_time1: hidd_time,
            not_full_screen_time:promej_time,
            CTRLC: copy,
            CTRLV: paste,
            konfig_mon: [screenWidth, screenHeight],
            screen_now: [windowOuterWidth, windowOuterHeight],
            time: vrema
          };
          alert(JSON.stringify(user))
         //$.ajax({
         //  url: "/result",
         //  type: "post",
         //  data: JSON.stringify({user}),
         //  contentType: "application/json",
         //  complete: callback
         //});
            
        };
        
//Подсчёт сворачиваний экрана   //todo3
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === 'hidden') {
    hidd += 1
    console.log(hidd)
    hidd_time.push(vrema)
    document.getElementById('demo').innerHTML = hidd;
  }
});

//Сравнение разрешения экрана браузера с монитором  //todo4
setInterval(() => {
  if (screenWidth-200>windowOuterWidth || screenHeight-200>windowOuterHeight){  //todo2
    console.log(`${screenWidth}--${windowOuterWidth} || ${screenHeight}--${windowOuterHeight}`)
    sec_not_full+=1
    if(flag===0) {
      start_screen=vrema
      flag=1
    }
  }
  else{
    if (flag===1){
      flag=0
      end_screen=vrema
      promej_time.push(`${start_screen}-${end_screen}`)
    }
  }
}, 1000);//})



//Секундомер 
timerInterval = setInterval(function printTime() {
  elapsedTime = Date.now()- startTime;
  vrema=timeToString(elapsedTime)
  document.querySelector('.timerDisplay').innerHTML=vrema;
}, 1000);

function timeToString(time) {
  
  let Hrs = time / 3600000;
  let hh = Math.floor(Hrs); //00

  let Min = (Hrs - hh) * 60;
  let mm = Math.floor(Min); //00

  let Sec = (Min - mm) * 60;
  let ss = Math.floor(Sec); //00
  
  let HH = hh.toString().padStart(2, "0"); //00
  let MM = mm.toString().padStart(2, "0"); //00
  let SS = ss.toString().padStart(2, "0"); //00

  return `${HH}:${MM}:${SS}`; //00:00:00
}











//Доп инфорамция Ниже

//Разрешение по кофигурации

setInterval(function(){
document.getElementById('screen').innerHTML = 'разрешение экрана монитора = ' + screenWidth + 'x' + screenHeight
},1000)



//CTRL+C

document.addEventListener('copy', function () {
  copy += 1
  document.getElementById('cop').innerHTML = copy;
  console.log(b)
});

//CTRL+V

document.addEventListener('paste', function () {
  paste += 1
  document.getElementById('past').innerHTML = paste;
});

//Положение мыши

function pos(e) {
  X.value = e.pageX;
  Y.value = e.pageY;
}

addEventListener('mousemove', pos, false);

//Внешние границы браузера в моменте  / Заменил на постоянную проверку разрешение с помощью интервалов 

//document.addEventListener("DOMContentLoaded", function (event) {
//  
//  window.onresize = function () {
//  console.log(windowOuterWidth)
//  windowOuterWidth = window.outerWidth
//  windowOuterHeight = window.outerHeight
//  document.getElementById('nowsize_vnesh').innerHTML = 'разрешение окна = ' + windowOuterWidth + 'x' + windowOuterHeight
//  };
//});

//document.addEventListener("DOMContentLoaded", function (event) {
setInterval(() => {windowOuterWidth = window.outerWidth
 windowOuterHeight = window.outerHeight
 document.getElementById('nowsize_vnesh').innerHTML = 'разрешение окна = ' + windowOuterWidth + 'x' + windowOuterHeight}, 0);
//})




//Внешние границы браузера при загрузке /Не нужно
//const windowOuterWidth_first = window.outerWidth
//const windowOuterHeight_first = window.outerHeight
//document.getElementById('size_vnesh').innerHTML = 'разрешение окна = ' + windowOuterWidth_first + 'x' + windowOuterHeight_first




//Нужно сравнить загруженный вместе со страничкой разрешение экрана с эраном монитора, если ок, то продолжать сравнивать текущее разрешение с новым изменением
//5 секунд на сворачивание допускается





//document.addEventListener("DOMContentLoaded", function (event) {
//  windowOuterWidth = window.outerWidth
//  windowOuterHeight = window.outerHeight
//if (screenWidth-100>windowOuterWidth || screenHeight-100>windowOuterHeight){
//  console.log(`${screenWidth}--${windowOuterWidth} || ${screenHeight}--${windowOuterHeight}`)
//}})
//
//window.onresize = function () {
//if (screenWidth-200>windowOuterWidth || screenHeight-200>windowOuterHeight){
//  console.log(`${screenWidth}--${windowOuterWidth} || ${screenHeight}--${windowOuterHeight}`)
//}};
//}());