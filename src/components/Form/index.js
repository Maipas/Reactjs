import './Form.css';

const Input = (props) => {
    return (
        <input type="text" placeholder={props.placeholder} />
    )
}
const TextArea = () => {
    return (
        <textarea styles={{width: 500, height: 400}}></textarea>
    )
}
const Submit = (props) => {
    return (
        <button type="submit">{props.label}</button>
    )
}

/* Creamos el componente principal de este archivo (este componente será el que exportaremos) */
function Form () {
    return (
        <form>
            <h6>
                <Input placeholder={'Ingrese el nombre'} />
                <Input placeholder={'Ingrese el email'} />
                <TextArea />
                <Submit label={'Enviar'} />
            </h6>
        </form>
    );
}

export default Form;