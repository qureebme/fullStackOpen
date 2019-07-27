import React from 'react';

const style = {
    color: 'green',
    fontSize: 25,
    backgroundColor: 'lightgrey',
    padding: 10,
    borderStyle: 'solid',
    borderRadius: 5
}

const Notif = ({notifMessage}) => (
    <div style={notifMessage ? style : null}>
        {notifMessage}
    </div>
)

export default Notif