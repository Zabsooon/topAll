import { useState } from "react";
import Input from "./Input";

function Editor() {
    const [inputCategory, setInputCategory] = useState("general");

    return (
        <>
            <Input label="First Name" />
            <Input label="Email" />
        </>
    );
}

export default Editor;
