import Header from "./Header";
import {Link} from "react-router-dom";
import UserForm from "./UserForm";

function Register() {
  
  
  function handleChange() {
  
  }
  function handleSubmit(evt) {
    evt.preventDefault();
  }
  
  return (
    <>
      <Header>
        <Link to='/signin' className='header__sign'>
          {' '}
          Iniciar Sesión
        </Link>
      </Header>
      <UserForm
          title={"Regístrate"}
          buttonText={"Regístrate"}
          linkSpan={"../signin"}
          linkText={"¿Ya eres miembro? Iniciar sesión aquí"}
          onSubmit={handleSubmit}
      >
        <input
            className="userForm__input"
            placeholder="Correo electrónico"
            type="email"
            name="email"
            minLength="4"
            maxLength="30"
            onChange={handleChange}
            required
        />
        <input
            className="userForm__input"
            placeholder="Contraseña"
            type="password"
            name="password"
            minLength="4"
            maxLength="30"
            onChange={handleChange}
            required
        />
      </UserForm>
    </>
  );
}

export default Register;