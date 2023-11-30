import useForm from '../../hooks/useForm'
import { registerUserService } from '../../services/userServices'
import './Signup.scss'

export default function Signup() {
  // Paso 1: Crear un objeto con valores iniciales para cada input
  const datosPorDefecto = {
    first_name: '',
    last_name: '',
    gender: 'M',
    email: '',
    password: '',
    role: '',
    // color: '#000000'
  }

  // Paso 2: Crear funcion que se va a ejecutar cuando haga click en el boton enviar
  const enviarDatos = (data) => {
    registerUserService(data)
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error.message))
  }

  // Paso 3: Uso mi custom hook de useForm (primero importarlo)
  const { formData, handleInputChange, handleSubmit } = useForm(enviarDatos, datosPorDefecto)
  
  return (
    <div>
      <div className="form-container">
        <h1 className="form-container__title">Sign Up.</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="form__form-group">
            <label htmlFor='first_name' className="form__form-group__label">Nombre</label>
            <input
              type='text'
              name='first_name'
              placeholder='Tu nombre'
              id='first_name'
              value={formData.first_name}
              onChange={handleInputChange}
              className="form__form-group__input"
            />
          </div>

          <div className="form__form-group">
            <label htmlFor='last_name' className="form__form-group__label">Apellido</label>
            <input
              type='text'
              name='last_name'
              placeholder='Tu apellido'
              id='last_name'
              value={formData.last_name}
              onChange={handleInputChange}
              className="form__form-group__input"
            />
          </div>

          <div className="form__form-group">
            <label htmlFor='email' className="form__form-group__label">Email</label>
            <input
              type='text'
              name='email'
              placeholder='correo@mail.com'
              id='email'
              value={formData.email}
              onChange={handleInputChange}
              className="form__form-group__input"
            />
          </div>

          <div className="form__form-group">
            <label htmlFor='password' className="form__form-group__label">Password</label>
            <input
              type='password'
              name='password'
              id='password'
              value={formData.password}
              onChange={handleInputChange}
              className="form__form-group__input"
            />
          </div>

          <div className="form__form-group">
            <label htmlFor='role' className="form__form-group__label">Role</label>
            <select name='role' id='role' value={formData.role} onChange={handleInputChange}>
              <option value=''>Elige un tipo de usuario</option>
              <option value='CUSTOMER'>Cliente</option>
              <option value='ADMIN'>Administrador</option>
            </select>
          </div>

          {/* <div className="form__form-group">
            <label htmlFor='color' className="form__form-group__label">Color Favorito</label>
            <input
              type='color'
              name='color'
              id='simple-color'
              value={formData.color}
              onChange={handleInputChange}
              className="form__form-group__input"
            />
          </div> */}

          <div className="form__form-group">
            <button type='submit' className="form__form-group__button">
              Regístrate
            </button>
          </div>


        </form>
      </div>
    </div>
  )
}
