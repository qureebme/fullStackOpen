import React from 'react';

const style = {
    color: 'red',
    fontSize: 25,
    backgroundColor: 'lightgrey',
    padding: 10,
    borderStyle: 'solid',
    borderRadius: 5
}

const Error = ({errorMessage}) => (
    <div style={errorMessage ? style : null}>
        {errorMessage}
    </div>
)

export default Error