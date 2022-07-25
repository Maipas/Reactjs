const estilos={
    borderWidth: '5px',
    borderColor: '#f00',
    BorderStyle: 'solid',
    padding: '40px',
    margin: '40px',
    fontSize: '3rem',
};

function Container() {
    return (
        <div style={estilos}> 
            Hola mundo, esto es react
        </div>
    );
}

export default Container;
