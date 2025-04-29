import { useState } from "react";
import Input from "./Input";
import CategoryButton from "./CategoryButton";
import InputPanel from "./InputPanel";
import { addElement, createFieldsFromSchema, inputs } from "./inputtype";

function Editor() {
    const [inputCategory, setInputCategory] = useState(null);

    let counter = 0;
    for(let index in inputs) {
        const { typeid, fields } = inputs[index];
        console.log(typeid);
        console.log(fields);
        counter = index;
    }
    
    addElement("experience");
    addElement("education");
    addElement("experience");
    addElement("general");
    addElement("general");
    addElement("education");

    for(let index in inputs) {
        const { typeid, fields } = inputs[index];
        console.log("after update");
        console.log(index);
        console.log(typeid);
        console.log(fields);
    }

    

    return (
        <>
            <CategoryButton 
                category="general" 
                onClickFunc={setInputCategory} 
            />
            <CategoryButton 
                category="education"
                onClickFunc={setInputCategory} 
            />
            <CategoryButton 
                category="experience" 
                onClickFunc={setInputCategory} 
            />

            <InputPanel inputCategory={inputCategory}/>
            
      </>
    );
}

export default Editor;
