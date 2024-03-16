import { ChangeEvent } from 'react';

interface inputType {
    placeholder: string;
    label: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

const Labelledinput = ({ onChange, placeholder, label, type }: inputType) => {
    return (
        <div>
            <div>
                <label
                    htmlFor=""
                    style={{
                        marginBottom: '0.5rem',
                        fontSize: '0.875rem',
                        fontWeight: 'thin',
                        color:"lightgray"
                    }}
                >
                    {label}
                </label>
                <input
                    type={type}
                    onChange={onChange}
                    placeholder={placeholder}
                    style={{
                        backgroundColor: '#f9fafb',
                        border: '1px solid #e5e7eb',
                        color: '#4b5563',
                        fontSize: '0.875rem',
                        borderRadius: '0.375rem',
                        padding: '0.625rem',
                        width: '100%',
                    }}
                />
            </div>
        </div>
    );
};

export default Labelledinput;
