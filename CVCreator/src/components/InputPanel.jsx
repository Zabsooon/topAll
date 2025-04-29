import { useState } from "react";
import Input from "./Input";

function InputPanel({ inputCategory, buttonClickFunc }) {

    return (
        <div className="inputs">
            {inputCategory === 'general' ? (
                <form>
                    <Input label="First Name" />
                    <Input label="Last Name" />
                    <Input label="Email" />
                    <Input label="Phone" />
                    <button onClick={buttonClickFunc}>submit</button>
                </form>
            ) : (inputCategory === 'education') ? (
                <form>
                    <Input label="School Name" />
                    <Input label="Title of Study" />
                    <Input label="Date" />
                    <button onClick={buttonClickFunc}>submit</button>
                </form>
            ) : (inputCategory === 'experience') ? (
                <form>
                    <Input label="Company Name" />
                    <Input label="Position title" />
                    <Input label="Main Responsibilities" />
                    <Input label="Date" />
                    <button onClick={buttonClickFunc}>submit</button>
                </form>
            ) : (
                <div>
                    <h1>Choose Input Category</h1>
                </div>
            )}
 
        </div>
    );
}

export default InputPanel;
