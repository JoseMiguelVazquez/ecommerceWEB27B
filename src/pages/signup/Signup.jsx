import './Signup.scss'

export default function Signup() {
  return (
    <div>
      <div className="form-container">
        <h1 className="form-container__title">Sign Up.</h1>
        <form onSubmit={() => {}} className="form">
          <div className="form__form-group">
            <label htmlFor='nombre' className="form__form-group__label">Nombre</label>
            <input
              type='text'
              name='nombre'
              placeholder='Tu nombre'
              id='nombre'
              value=''
              onChange={() => {}}
              className="form__form-group__input"
            />
          </div>

          <div className="form__form-group">
            <label htmlFor='apellido' className="form__form-group__label">Apellido</label>
            <input
              type='text'
              name='apellido'
              placeholder='Tu apellido'
              id='apellido'
              value=''
              onChange={() => {}}
              className="form__form-group__input"
            />
          </div>

          <div className="form__form-group">
            <label htmlFor='edad' className="form__form-group__label">Edad</label>
            <input
              type='number'
              name='edad'
              placeholder='Tu edad'
              id='edad'
              value=''
              onChange={() => {}}
              className="form__form-group__input"
            />
          </div>

          <div className="form__form-group">
            <label htmlFor='email' className="form__form-group__label">Email</label>
            <input
              type='text'
              name='email'
              placeholder='correo@mail.com'
              id='simple-email'
              value=''
              onChange={() => {}}
              className="form__form-group__input"
            />
          </div>

          <div className="form__form-group">
            <label htmlFor='password' className="form__form-group__label">Password</label>
            <input
              type='password'
              name='password'
              id='simple-password'
              value=''
              onChange={()=>{}}
              className="form__form-group__input"
            />
          </div>

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
