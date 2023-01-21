import { useRouter } from 'next/router'
import Script from 'next/script'



export default function Resource(props) {
    const router = useRouter();
    const id=router.query.resource
    console.log(id);

    const onClickHandler = async () => {   
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
      }


    return ( //Вызывая функцию Start, мы начинаем отслеживать дейсвие пользователя, а также передаём через неё id, нужное для индификации localSrotage---11.01.2023
    <div> 
         <Script src="script.js" />
         <div onClick={()=>start(id)}>Начать тест</div>
         <div onClick={onClickHandler}>Закончить тест/Отправить данные</div>
    </div>   
    )
}