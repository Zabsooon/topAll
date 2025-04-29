export const inputscheme = {
    "general": {
        "firstname" : "",
        "lastname"  : "",
        "email"     : "",
        "phone"     : ""
    },
    "education": {
        "schoolname"   : "",
        "titleofstudy" : "",
        "date"         : ""
    },
    "experience": {
        "companyname" : "",
        "position"    : "",
        "description" : "",
        "date"        : ""
    }
}

// keyof typeof inputtype
export function createFieldsFromSchema(typeid) {
    return JSON.parse(JSON.stringify(inputscheme[typeid]));
}

export const inputs = {
    0: {
        typeid : "general",
        fields : createFieldsFromSchema("general")
    }
}

export function addElement(category) {
    const nextId = Math.max(...Object.keys(inputs).map(Number)) + 1;
    inputs[nextId] = {
        typeid: category,
        fields: createFieldsFromSchema(category)
    };
}
