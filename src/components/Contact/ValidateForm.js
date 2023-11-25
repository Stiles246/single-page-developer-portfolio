function ValidateForm(values) {
    let errors = {};

    if(!values.username.trim()) {
        errors.username = "This field is required";
    }

    if(!values.email) {
        errors.email = "This field is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email =  "Email address is invalid";
    }

    if(!values.message) {
        errors.message = "This field is required";
    } else if (values.message.length < 20) {
        errors.message =  "minimum text of 20";
    }


  return errors;
}

export default ValidateForm