import iconSuccess from "../images/iconSuccess.png";
import closeButton from "../images/CloseIcon.png";
function InfoToolTip({isSuccess, isInfoOpen, onCloseBtn}) {
  
  return (
      <div className="pop-up">
        <div className="infoTool">
          <img className="infoTool__image" src={iconSuccess} alt="icono que muestra el estado del registro"/>
          <p className="infoTool__text">¡Correcto! Ya estás registrado.</p>
          <img
              alt="Icono de cerrar"
              className="pop-up__close-button pop-up__close" id="close-button1"
              src={closeButton}
              onClick={onCloseBtn}
          />
        </div>
      </div>
  )
}

export default InfoToolTip;