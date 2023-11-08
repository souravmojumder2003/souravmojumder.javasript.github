# souravmojumder.javasript.github
function validateExpression(userOption, userInput) {
    let regex;
    switch (userOption) {
        case "Email":
            regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            break;
        case "Phone Number":
            regex = /^\d{11}$/;
            break;
        case "Post Code":
            regex = /^\d{5}$/;
            break;
        default:
            return "Invalid option";
    }

    if (regex.test(userInput)) {
        return "Valid";
    } else {
        return "Invalid";
    }
}

function validateUserInput() {
    const userOption = prompt("Enter the expression type (Email, Phone Number, Post Code):");
    const userInput = prompt("Enter the expression to validate:");

    const result = validateExpression(userOption, userInput);
    alert(`The ${userOption} expression "${userInput}" is ${result}.`);
}

validateUserInput();
