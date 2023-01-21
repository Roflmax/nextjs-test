//Все используемые глобальные переменные:
let hidden_count = 0; //Количество потери видимости страницы
let hidd_time=[];//Когда была потеряна видимость
let sec_not_fullscreen=0;//Сколько секунд было открыто неполное разрешение страницы
let flag=0;//флаг, чтобы были загруженны достоверные данные 
let time_interval_not_fullscreen=[];//Периоды времени неполного разрешения страницы
let start_time_screen;//Начальный период времени разреш.ст.
let end_time_screen;//Конечный период времени разреш.ст.
let time_stopwatch=0;//время из секундомера. |искать по //Секундомер 
let startTime = Date.now() //Нужно для нормальной работы секундомера
let screen_config_Width = window.screen.width;//Кофигурация монитора
let screen_config_Height = window.screen.height;//Кофигурация монитора
let copy = 0;//Кол-ов сочетания клавиш CTRL+C
let paste = 0;//Кол-ов сочетания клавиш CTRL+V
let mouseleave_count_screen=0;//Выход мыши за рамки браузера
let mouseleave_count_screen_time=[]
let start_or_continue='start'
let id_question=0;

//Запуск Отслеживания + сохранение данных в localSrotage и в БД при Перезагрузке или выходе
const id=window.location.pathname.slice(1) //индификация пользователя
if (localStorage.getItem(id)!=null && JSON.parse(localStorage.getItem(id)).start_or_continue=='continue') start(id) //Запуск автоматически, если тестирование уже было начато, но преравно.
function start(){
    //Перезапись глобальных значений в случае повторного захода на страницу
    if(localStorage.getItem(id)!=null && JSON.parse(localStorage.getItem(id)).start_or_continue=='continue'){      
      hidd_time=JSON.parse(localStorage.getItem(id)).hidd_time
      hidden_count=JSON.parse(localStorage.getItem(id)).hidden_count
      sec_not_fullscreen=JSON.parse(localStorage.getItem(id)).sec_not_fullscreen
      time_interval_not_fullscreen=JSON.parse(localStorage.getItem(id)).time_interval_not_fullscreen
      copy= JSON.parse(localStorage.getItem(id)).copy
      paste= JSON.parse(localStorage.getItem(id)).paste
      mouseleave_count_screen= JSON.parse(localStorage.getItem(id)).mouseleave_count_screen
      mouseleave_count_screen_time= JSON.parse(localStorage.getItem(id)).mouseleave_count_screen_time
      startTime= JSON.parse(localStorage.getItem(id)).startTime
    }
    // сохранения данных при закрытии ----То Что мы обсуждали 11.01.2023 в зуме
    window.onbeforeunload = function() {
      start_or_continue='continue'
      localStorage.setItem(id,JSON.stringify(penalty_point_and_json_format()))
      !async function(){   
        console.log(654)
        let user_info = penalty_point_and_json_format()
        const responce = await fetch('/api/exampledb', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json;charset=utf-8' },
          body: JSON.stringify({
           user_info,
          })
        })
        const data = await responce.json();
        console.log(data);
      }();
    };








    //Подсчёт сворачиваний экрана   N1
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        hidden_count += 1
        console.log('hidd: ',hidden_count,' ',time_stopwatch)
        hidd_time.push(time_stopwatch)
      }
    });

    //Сравнение разрешения экрана браузера с монитором  N2
    setInterval(() => {
      if (screen_config_Width-200>window.outerWidth || screen_config_Height-200>window.outerHeight){  
        console.log(`${screen_config_Width}--${window.outerWidth} || ${screen_config_Height}--${window.outerHeight}`)
        sec_not_fullscreen+=1
        if(flag===0) {
          start_time_screen=time_stopwatch
          flag=1
        }
      }
      else{
        if (flag===1){
          flag=0
          end_time_screen=time_stopwatch
          time_interval_not_fullscreen.push(`${start_time_screen}-${end_time_screen}`)
        }
      }
    }, 1000);

    //выход мышки за пределы браузера.//Из за того,что это событие срабатывает иногда дважды в браузере, пришлось дать ему ограничени при двойном срабатывании N2+
    let kostul_time=0
    let kostil=0;
    setInterval(()=>{kostul_time+=1},2000)
    document.addEventListener("mouseleave", function(event) {
    if(kostil===kostul_time) {console.log(kostul_time,'',kostil)
       return}
    kostil=kostul_time;
    mouseleave_count_screen+=1
    mouseleave_count_screen_time.push(time_stopwatch)
    console.log('mose :',mouseleave_count_screen,' ',time_stopwatch)
    })  

    //copy dop-info
    document.addEventListener('copy', function () {
      copy += 1
      console.log(copy)
    });

    //paste dop-info

    document.addEventListener('paste', function () {
      paste += 1  
      console.log(paste)
    });


    //Секундомер time-info
    timerInterval = setInterval(function printTime() {

      elapsedTime = Date.now()- startTime;
      time_stopwatch=timeToString(elapsedTime)
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




}




// данные через json+подсчёт штраф-баллво
function penalty_point_and_json_format(){
    //Подсчёт штраф-баллов
    let cheat_point=0
    cheat_point+=10*hidden_count  //сворачивание 10 баллов  
    cheat_point+=sec_not_fullscreen //Минута 60 баллов
    cheat_point+=mouseleave_count_screen*5 //выход мыщки за рамки браузера

    //Итоговвый статус пользователя
    let status=''
    if (cheat_point<50){ 
      status='normal'
    }
    else{
      status='suspicion'
    }
    
    //Формирование объекта
    let user_info = {
      FIO:null,
      id_question:null,
      identification_test:id,
      start_or_continue:start_or_continue,
      status:status,
      cheat_point: cheat_point,
      hidden_count: hidden_count,
      hidd_time: hidd_time,
      time_interval_not_fullscreen: time_interval_not_fullscreen,
      sec_not_fullscreen:sec_not_fullscreen,
      mouseleave_count_screen:mouseleave_count_screen,
      mouseleave_count_screen_time:mouseleave_count_screen_time,
      copy: copy,
      paste: paste,
      startTime:startTime
    };
    return user_info
}