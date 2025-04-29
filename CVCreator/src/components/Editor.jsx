import { useState } from "react";
import Input from "./Input";
import CategoryButton from "./CategoryButton";
import InputPanel from "./InputPanel";
import { createFieldsFromSchema } from "./inputtype";

function Editor() {
    const [inputCategory, setInputCategory] = useState(null);
    const [inputs, setInputs] = useState([]);

    const handleAddDataOnClick = (category) => {
        if (!category) return;

        const newInput = {
            typeid: category,
            fields: createFieldsFromSchema(category),
        }

        setInputs((prevInputs) => [...prevInputs, newInput]);
    }

    console.log(inputs);


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

            <InputPanel 
                inputCategory={inputCategory}
                buttonClickFunc={(e) => {
                    e.preventDefault(); 
                    handleAddDataOnClick(inputCategory)
                }}
            />
            
      </>
    );
}

export default Editor;
