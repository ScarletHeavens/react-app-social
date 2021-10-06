export const required = (value) => {
if (value) return undefined;
    return "Field is required"; 
}
export const maxLen = (maxLen) => (value) => {
    if (value.length > maxLen) return `Max length is ${maxLen} symbols`;
        return undefined; 
    }