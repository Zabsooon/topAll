import { useState } from "react";
import CategoryButton from "./CategoryButton";
import InputPanel from "./InputPanel";
import Generator from "./Generator";
import '../styles/Editor.css';

function Editor() {
    const [inputCategory, setInputCategory] = useState(null);
    const [inputs, setInputs] = useState([]);

    const handleAddDataOnClick = (category, data) => {
        if (!category) return;

        const newInput = {
            typeid: category,
            fields: data,
        }

        setInputs((prevInputs) => [...prevInputs, newInput]);
    }

    return (
        <div className="editor">
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
                buttonClickFunc={handleAddDataOnClick}
            />

            <Generator inputs={inputs}/>          
      </div>
    );
}

export default Editor;
