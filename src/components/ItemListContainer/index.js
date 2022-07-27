const estilos={
    borderWidth: '5px',
    borderColor: '#f00',
    BorderStyle: 'solid',
    padding: '40px',
    margin: '40px',
    fontSize: '3rem',
};

function Container( props ) {
    return (
        <div style={estilos}> 
            {props.text}
        </div>
    );
}

export default Container;
