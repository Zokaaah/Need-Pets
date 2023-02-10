import responsivo from "../Components/Menu.module.css";
import Logo from "../Images/walk.png";
function Menu() {
  return (
    <div>
      <header class={responsivo.header}>
        {/* <img src={Logo} class={responsivo.logo} /> */}
        <h1 className={responsivo.logo}>Need <span class={responsivo.ColorLogo}>Pets.</span></h1>
        <input class={responsivo.side_menu} type="checkbox" id="side_menu" />
        <label class={responsivo.hamb} for="side_menu">
          <span class={responsivo.hamb_line}></span>
        </label>
        <nav class={responsivo.nav}>
          <ul class={responsivo.menu}>
            <li>Contato</li>

            <li>Home</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
export default Menu;
