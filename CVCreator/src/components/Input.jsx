import { useState } from "react";

function Input({ label }) {
    const [input, setInput] = useState();

    function handleInputChange(e) {
        setInput(e.target.value);
    }

    return (
        <>
            <label for="{label}">{label}:</label>
            <input type="text"
                    id="{label}"
                    name="{label}"
                    onChange={handleInputChange}
                />
        </>
    );
}

export default Input;
