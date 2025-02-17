'use client';
import React from 'react';

interface ButtonProps {
    onClick: () => void;
    label: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    onClick = () => console.log('clicked'),
    label,
    disabled = false,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="bg-btn-color text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-85"
        >
            {label}
        </button>
    );
};

export default Button;
