import React from 'react';
import './styles.scss';

const Button = ({ color, label, textColor }) => {
    return <div className="button">
        <button style={{ background: color, color: textColor }}>{label}</button>
    </div>
}

export default Button