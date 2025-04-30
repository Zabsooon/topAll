import { useState } from "react";
import '../styles/Input.css';

function Input({ label, id, value, onChange }) {
    const [input, setInput] = useState();

    function handleInputChange(e) {
        setInput(e.target.value);
    }

    return (
        <div className="inputEntity">
            <label htmlFor={id}>{label}:</label>
            <input type="text"
                    id={id}
                    name={id}
                    value={value}
                    onChange={onChange}
                />
        </div>
    );
}

export default Input;
