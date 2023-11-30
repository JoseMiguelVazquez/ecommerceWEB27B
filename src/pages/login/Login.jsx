import { useState } from "react"
import { loginUserService } from "../../services/userServices"
import './Login.scss'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  /*useEffect(()=>{
    axios.get('http://localhost:3000/items') //realiza una petición a la API local
      .then((response) => { //con axios no necesitamos extraer el json
        console.log(response.data) // podemos directamente usar nuestra respuesta,  se encuentra en la propiedad data
      })
      .catch((error) => { //si hay algun error en la petición
        console.error(error.message) // imprimir error en consola
      })
  }, [])*/
  
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const submittedData = {
      email,
      password
    }
    loginUserService(submittedData)
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error.message))
    setEmail('')
    setPassword('')
  }


  return (
    <div>
      <div className="form-container">
        <h1 className="form-container__title">Enter your credentials.</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="form__form-group">
            <label htmlFor='email' className="form__form-group__label">Email</label>
            <input
              type='text'
              name='email'
              placeholder='correo@mail.com'
              id='email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="form__form-group__input"
            />
          </div>

          <div className="form__form-group">
            <label htmlFor='password' className="form__form-group__label">Password</label>
            <input
              type={showPassword ? 'text ' : 'password'}
              name='password'
              id='password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="form__form-group__input"
            />
            <button onClick={() => setShowPassword(!showPassword)} type="button">
              {showPassword ? 'hide' : 'show'}
            </button>
          </div>

          <div className="form__form-group">
            <button type='submit' className="form__form-group__button">
              Iniciar Sesion
            </button>
          </div>


        </form>
      </div>
    </div>
  )

}
