import { useState } from "react";
import Input from "./Input";
import { createFieldsFromSchema } from "./inputtype";
import '../styles/InputPanel.css'

function InputPanel({ inputCategory, buttonClickFunc }) {
    const [formData, setFormData] = useState({
        general: {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
        },
        education: {
            schoolname: '',
            titleofstudy: '',
            date: '',
        },
        experience: {
            companyname: '',
            position: '',
            description: '',
            date: '',
        }
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [inputCategory]: {
                ...prev[inputCategory],
                [id]: value
            }
        }));
    };

    const handleClick = (e) => {
        e.preventDefault();

        let newInputData = createFieldsFromSchema(inputCategory);

        if(inputCategory === 'general') {
            newInputData.firstname = formData.general.firstname;
            newInputData.lastname = formData.general.lastname;
            newInputData.email = formData.general.email;
            newInputData.phone = formData.general.phone;
        } else if(inputCategory === 'education') {
            newInputData.schoolname = formData.education.schoolname;
            newInputData.titleofstudy = formData.education.titleofstudy;
            newInputData.date = formData.education.date;
        } else if(inputCategory === 'experience') {
            newInputData.companyname = formData.experience.companyname;
            newInputData.position = formData.experience.position;
            newInputData.description = formData.experience.description;
            newInputData.date = formData.experience.date;
        } else { return; }
        buttonClickFunc(inputCategory, newInputData);
    }

    return (
        <div className="inputPanel">
            {inputCategory === 'general' ? (
                <form>
                    <Input 
                        label="First Name" 
                        id="firstname" 
                        onChange={handleChange}
                        value={formData.general.firstname}
                    />
                    <Input 
                    label="Last Name" 
                    id="lastname" 
                    onChange={handleChange}
                    value={formData.general.lastname}
                    />
                    <Input 
                        label="Email" 
                        id="email" 
                        onChange={handleChange}
                        value={formData.general.email}
                    />
                    <Input 
                        label="Phone" 
                        id="phone" 
                        onChange={handleChange}
                        value={formData.general.phone}
                    />
                    <button onClick={handleClick}>submit</button>
                </form>
            ) : inputCategory === 'education' ? (
                <form>
                    <Input 
                        label="School Name" 
                        id="schoolname" 
                        onChange={handleChange}
                        value={formData.education.schoolname}
                    />
                    <Input 
                        label="Title of Study" 
                        id="titleofstudy" 
                        onChange={handleChange}
                        value={formData.education.titleofstudy}
                    />
                    <Input 
                        label="Date" 
                        id="date" 
                        onChange={handleChange}
                        value={formData.education.date}
                    />
                    <button onClick={handleClick}>submit</button>
                </form>
            ) : inputCategory === 'experience' ? (
                <form>
                    <Input 
                        label="Company Name" 
                        id="companyname" 
                        onChange={handleChange}
                        value={formData.experience.companyname}
                    />
                    <Input 
                        label="Position" 
                        id="position" 
                        onChange={handleChange}
                        value={formData.experience.position}
                    />
                    <Input 
                        label="Description" 
                        id="description" 
                        onChange={handleChange}
                        value={formData.experience.description}
                    />
                    <Input 
                        label="Date" 
                        id="date" 
                        onChange={handleChange}
                        value={formData.experience.date}
                    />
                    <button onClick={handleClick}>submit</button>
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
