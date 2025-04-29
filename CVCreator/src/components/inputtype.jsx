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
