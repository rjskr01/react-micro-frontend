import React from 'react';

interface ButtonProps {
    text?: string
}

const Button: React.FC<ButtonProps> = ({ text = 'World' }) => {
    return (
        <button>Hello {text}</button>
    );
}

export default Button;