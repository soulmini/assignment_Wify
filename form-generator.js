const formConfig = [
    {
        "key": "user_name",
        "label": "Name",
        "type": "text",
        "maxLength": "50",
        "placeholder": "Enter Name"
    },
    {
        "key": "mobile_no",
        "label": "Mobile number",
        "type": "number",
        "maxLength": "10",
        "placeholder": "Enter Mobile number"
    },
    {
        "key": "email",
        "label": "Email",
        "type": "email",
        "placeholder": "Enter Email"
    }
];

const formElement = document.getElementById('dynamicForm');

formConfig.forEach(field => {
    const label = document.createElement('label');
    label.textContent = field.label;
    const input = document.createElement('input');
    input.type = field.type;
    input.name = field.key;
    if (field.maxLength) {
        input.maxLength = field.maxLength;
    }
    if (field.placeholder) {
        input.placeholder = field.placeholder;
    }
    input.required = true;

    formElement.insertBefore(label, formElement.lastElementChild);
    formElement.insertBefore(input, formElement.lastElementChild);
});

formElement.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Submitted successfully');
});
