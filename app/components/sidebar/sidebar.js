import style from "./sidebar.css"

function SideBarOption(props) {
  return (
    <div className="SideBar-Options-Box">
      <img src={props.img} alt="" />
      <p>{props.name}</p>
    </div>
  )
}

function SideBar() {
  return (
    <div className="SideBar">
      <div className="SideBar-Title">
        <h3>Gestión de vuelos</h3>
      </div>
      <div className="SideBar-Options">
        <SideBarOption name="+ Registrar" img=""></SideBarOption>
        <SideBarOption name="Consultar" img=""></SideBarOption>
        <SideBarOption name="Modificar" img=""></SideBarOption>
        <SideBarOption name="Eliminar" img=""></SideBarOption>
      </div>
    </div>
  )
}

export default SideBar
