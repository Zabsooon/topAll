import { useState } from "react";
import Input from "./Input";

function InputPanel({ inputCategory }) {

    return (
        <>
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

export default InputPanel;
