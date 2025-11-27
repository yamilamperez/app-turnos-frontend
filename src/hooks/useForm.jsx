import { useState } from "react"

const useForm = (initial_form_state, onSubmit) => {
  //Estado con los valores del formulario
    const [ form_state, setFormState ] = useState(initial_form_state)


    const onInputChange = (event) => {

        //Capturamos el campo que estamos modificando
        const field = event.target

        //Nombre del campo del formulario
        const field_name = field.name

        //Valor del campo del formulario
        const field_value = field.value

        //Modifico el estado de mi formulario
        setFormState(
            (prevFormState) => {
                return {...prevFormState, [field_name]: field_value }
            }
        )
    }

    const handleSubmit = (event) => {
        //Evitamos que la página se recargue
        event.preventDefault()
        //Llamamos a la función de registro
        onSubmit(form_state)
    }

    const resetForm = () => {
        setFormState(initial_form_state)
    }

    return {
        form_state,
        onInputChange,
        handleSubmit,
        resetForm
    }
}

export default useForm