window.addEventListener("load",() => {
    let $form = document.querySelector("form"),
    $errors = document.querySelector("#result"),
    $name = document.querySelector("#name"),
    $tel = document.querySelector("#tel"),
    $email = document.querySelector("#email"),
    $description = document.querySelector("#msg"),
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExAlpha = /^[a-zA-Z0-9\sñáéíóúü ]*$/,
    validacion = false;
    $email.addEventListener("blur", () => {
        switch (true) {
            case !$email.value.trim():
                    validacion = true
                    $email.style.borderColor = "red"
                console.log(validacion);
                break;
            case !regExEmail.test($email.value):               
                $email.style.borderColor = "red"
                    validacion = true
                console.log(validacion);
                break;
        
            default:
                validacion = false 
                $email.style.borderColor = "green"
                console.log(validacion);
                break;
        }
    })
    $name.addEventListener("blur", () => {
        switch (true) {
            case !$name.value.trim():
                $name.style.borderColor = "red"
                    validacion = true
                console.log(validacion);
                break;
                case !regExAlpha.test($name.value):
                $name.style.borderColor = "red"
                    validacion = true
                console.log(validacion);
                break;
            default:
                validacion = false 
                $name.style.borderColor = "green"
                console.log(validacion);
                break;
        }
    })
    $tel.addEventListener("blur", () => {
        switch (true) {
            case !$tel.value.trim():
                $tel.style.borderColor = "red"
                    validacion = true
                console.log(validacion);
                break;
            default:
                validacion = false 
                $tel.style.borderColor = "green"
                console.log(validacion);
                break;
        }
    })
    $description.addEventListener("blur", () => {
        switch (true) {
            case !$description.value.trim():
                description.style.borderColor = "red"
                    validacion = true
                console.log(validacion);
                break;
            default:
                validacion = false 
                console.log(validacion);
                break;
        }
    })   
    
})