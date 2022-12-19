
//Главный код


//Настройка проверки

//Нужно сделать так, чтобы на нашей странице мы могли менять условия проверки.
//Для удобного поиска в коде ищи по номеру задания. Например, первое задание это "todo1"
//Каким параментры проверки мы хотим задавать?

//1)Ограничение для cheat_point. Т.е. мы должны иметь возможность вместо нынешних "30" записать другое число на нашей Test-странице. //todo1

//2)Нужно менять значения дозволенного разрешения. У нас сейчас по вертикали и горизонтали из разрешения конфигурации вычитается 200, чтобы узнать, что экран открыт во весь экран.
// Нам нужна возможность увеличить эти 200 отдельно для вериткали и горизонтали на нашей  Test-странице//todo2

//3)Нам нужна галка, которая отключает/включает подсчёт сворачиваний //todo3
//4)Подобная выше галка, но для разрешение экрана //todo4

function mix() //все данные через json
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
          console.log(user)
         // $.ajax({
         //   url: "cgi-bin/obrjson.py",
         //   type: "post",
         //   data: JSON.stringify({user}),
         //   dataType: "json",
         // });
            
        };
        



//Подсчёт сворачиваний экрана   //todo3
let hidd = 0
let hidd_time=[]
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === 'hidden') {
    hidd += 1
    hidd_time.push(vrema)
    document.getElementById('demo').innerHTML = hidd;
  }
});

//Сравнение разрешения экрана браузера с монитором  //todo4
let sec_not_full=0
let flag=0;
let promej_time=[]
let start_screen;
let end_screen;
//document.addEventListener("DOMContentLoaded", function (event) {
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
let vrema=0;
startTime = Date.now() 
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











//Доб инфорамция Ниже

//Разрешение по кофигурации
let screenWidth = window.screen.width
let screenHeight = window.screen.height
setInterval(function(){
screenWidth = window.screen.width
screenHeight = window.screen.height
document.getElementById('screen').innerHTML = 'разрешение экрана монитора = ' + screenWidth + 'x' + screenHeight
},1000)



//CTRL+C
let copy = 0
document.addEventListener('copy', function () {
  copy += 1
  document.getElementById('cop').innerHTML = copy;
  console.log(b)
});

//CTRL+V
let paste = 0
document.addEventListener('paste', function () {
  paste += 1
  document.getElementById('past').innerHTML = paste;
});

//Положение мыши
let X = document.getElementById('X');
let Y = document.getElementById('Y');

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
let windowOuterWidth =0
let windowOuterHeight = 0
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



//Все данные через form (не нужно)
function result() {

  //Подсчёт штраф-баллов
  let cheat_point=0
  cheat_point+=10*hidd  //сворачивание 10 баллов
  cheat_point+=sec_not_full //Минута 60 баллов

  //что отправляем
  document.getElementById("hid1").value = hidd;
  document.getElementById("CTRLC").value = copy;
  document.getElementById("CTRLV").value = paste;
  document.getElementById("display1").value = [screenWidth, screenHeight];
  document.getElementById("point").value = cheat_point
 // document.getElementById("screen1").value = [windowOuterWidth_first, windowOuterHeight_first]; Разрешение при загрузке не нужно
  document.getElementById("screen_now1").value =  [windowOuterWidth, windowOuterHeight];
  document.getElementById("time_of_violation").value = vrema;
}