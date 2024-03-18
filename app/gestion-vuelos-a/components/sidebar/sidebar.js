import style from "./sidebar.css"

function SideBarOption(props) {
  return (
    <div className="SideBar-Options-Box">
      <img src={props.img}/>
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
        <SideBarOption name="+ Registrar" ></SideBarOption>
        <SideBarOption name="Consultar" ></SideBarOption>
        <SideBarOption name="Modificar" ></SideBarOption>
        <SideBarOption name="Eliminar" ></SideBarOption>
      </div>
    </div>
  )
}

export default SideBar
