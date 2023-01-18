function validation(e) {
    e.preventDefault();
    let languagesArr = [];
    let radioArr = [];

    // name validation
    if (e.target.FirstName.value.includes(" ")) {
        alert("do not use space");
        return false;
    }
    if (e.target.Lastname.value.includes(" ")) {
        alert("do not use space");
        return false;
    }

    // number validation
    if (isNaN(e.target.number.value)) {
        alert("use Numeric value");
        return false;
    }
    if (e.target.number.value.length < 10) {
        alert("Invalid Number");
        return false;
    }

    // Message Validation
    if (e.target.message.value == "") {
        alert("Please Enter Message");
        return false;
    }

    // Radio and CheckBox Validation
    for (i = 0; i < e.target.length; i++) {
        if (e.target[i].type == "checkbox") {
            if (e.target[i].checked) {
                languagesArr.push(e.target[i].value);
            }
        }
        if (e.target[i].type == "radio") {
            if (e.target[i].checked) {
                radioArr.push(e.target[i].value);
            }
        }
    }
    if (radioArr.length == 0) {
        alert("select gender");
        return false;
    }
    if (languagesArr.length == 0) {
        alert("select atleast one card");
        return false;
    }

    registration(e);
}


function registration(e) {
    // e.preventDefault()

    let result = " ";
    for (let i = 0; i < e.target.length - 1; i++) {
        if (e.target[i].name == 'gender' || e.target[i].name == 'card') {

            if (e.target[i].checked)
                result = result + e.target[i].name +"  " + " : " + " " + e.target[i].value + " " + " " + "\n";
        }
        else {
            result = result + e.target[i].name +"  " + " : " + " " + e.target[i].value +"  " + " " + "\n";
        }
    }
    alert(result);
}
