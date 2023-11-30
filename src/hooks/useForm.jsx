// REGLAS PARA CREAR UN HOOK DE REACT
// 1. Custom Hook es una funcion que utiliza otros hooks de React
// 2. El nombre de la funcion debe comenzar con la palabra use
// 3. Siempre deben ser funciones
// 4. Deben ser reutilizables, no para casos muy especificos (en este caso para cualquier formulario)
// 5. Deben retornar algo, ya sea un valor, un objeto, un array, una funcion, etc

import { useState } from 'react'

function useForm (callback, defaultData) {
    //Estado unico para guardar los datos de mi formulario en un objeto; formData = Datos de mi formulario
    const [formData, setFormData] = useState(defaultData)
    //defaultData (valores Por Defecto) van a ser un objeto con los campos de mi form

    // Funcion que se ejecutara cuando se envie el formulario
    const handleSubmit = (event) => {
        event.preventDefault()
        callback(formData)
        setFormData(defaultData)
    }

    /*formData = {
        [name]: value,

        nombre: 'valor de name',
        apellido: 'valor de apellido',
        email: 'valor de email',
        password: 'valor de password'
        etc
    }*/

    // Funcion que se ejecuta cuando se escriba en los inputs
    const handleInputChange = (event) => {
        const { name, value } = event.target
        console.log(name, value)
        setFormData({ ...formData, [name]: value })
    }


    return {
        formData,
        handleSubmit,
        handleInputChange
    }
}

export default useForm