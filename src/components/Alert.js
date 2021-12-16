import React from 'react'

function Alert(props) {
    const capital = (word) =>{
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + word.slice(1)
    }
    return (
        <div style={{height:'70px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capital(props.alert.msg)}</strong>
        </div>}
        </div>
    )
}

export default Alert
