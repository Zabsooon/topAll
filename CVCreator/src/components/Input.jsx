import { useState } from "react";

function Input({ label, id, value, onChange }) {
    const [input, setInput] = useState();

    function handleInputChange(e) {
        setInput(e.target.value);
    }

    return (
        <>
            <label htmlFor={id}>{label}:</label>
            <input type="text"
                    id={id}
                    name={id}
                    value={value}
                    onChange={onChange}
                />
        </>
    );
}

export default Input;
