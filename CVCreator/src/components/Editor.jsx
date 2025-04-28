import { useState } from "react";
import Input from "./Input";
import CategoryButton from "./CategoryButton";

function Editor() {
    const [inputCategory, setInputCategory] = useState("general");

    return (
        <>
            <CategoryButton category="general" onClickFunc={setInputCategory} />
            <CategoryButton category="education" onClickFunc={setInputCategory} />
            <CategoryButton category="experience" onClickFunc={setInputCategory} />
            {inputCategory === 'general' ? (
                <div className="inputs">
                    <Input label="First Name" />
                    <Input label="Last Name" />
                    <Input label="Email" />
                    <Input label="Phone" />
                </div> 
            ) : (inputCategory === 'education') ? (
                <div className="inputs">
                    <Input label="School Name" />
                    <Input label="Title of Study" />
                    <Input label="Date" />
                </div>
            ) : (inputCategory === 'experience') ? (
                <div className="inputs">
                    <Input label="Company Name" />
                    <Input label="Position title" />
                    <Input label="Main Responsibilities" />
                    <Input label="Date" />
                </div>
            ) : (
                <div>
                    <h1>Choose Input Category</h1>
                </div>
            )}
       </>
    );
}

export default Editor;
