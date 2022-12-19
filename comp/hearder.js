import Link from "next/link";
const Header = () => {
return(
    <header>
        <a href="#" class="logo">ТЕСТЫ</a>
        <nav class="header-nav">
         <ul>
             <li><a href='/'>Главаня</a></li>
             <li><a href='/'>Тест</a></li>
             <li><a href='/result'>Результат</a></li>
             <li><a href='/about'>О нас</a></li>
          </ul>
        </nav>
    </header>
)
}
export default Header;