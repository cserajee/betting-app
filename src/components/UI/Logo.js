import React from 'react'
import logoImg from '../../assets/img/logo.png';
const logo = (props) => {
    return (
        <div className="text-center py-md-5">
            <img src={logoImg} width="80" className="img" alt="logo" />
        </div>
    )
}

export default logo
