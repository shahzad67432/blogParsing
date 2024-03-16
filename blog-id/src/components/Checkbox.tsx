import React from 'react';

interface CheckboxProps {
    checked: boolean;
    onChange: (isChecked: boolean) => void;
    onClick?: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, onClick }) => {
    const handleClick = () => {
        // Call the onChange function with the new checked state
        onChange(!checked);
        // Call the onClick function if provided
        onClick && onClick();
    };

    return (
        <div style={{ display: 'inline-block', position: 'relative', width: '1.25rem', height: '1.25rem', border: '2px solid #34d399' }}>
            <input
                type="checkbox"
                checked={checked}
                onChange={handleClick}
                onClick={onClick}
                style={{ opacity: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
            <svg
                className={`h-5 w-5 ${checked ? 'text-green-500' : 'text-gray-300'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                />
            </svg>
        </div>
    );
};

export default Checkbox;
