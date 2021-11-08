window.addEventListener("load",() => {
    let $form = document.querySelector("form"),
    $errors = document.querySelector("#result"),
    $name = document.querySelector("#name"),
    $tel = document.querySelector("#tel"),
    $email = document.querySelector("#email"),
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExAlpha = /^[a-zA-Z0-9\sñáéíóúü ]*$/,
    $description = document.querySelector("#msg"),
    validacion = false;

    $email.addEventListener("blur", () => {
        switch (true) {
            case !$email.value.trim():
                    validacion = true
                console.log(validacion);
                break;
            case !regExEmail.test($email.value):
                    validacion = true
                console.log(validacion);
                break;
        
            default:
                validacion = false 
                console.log(validacion);
                break;
        }
    })
    $name.addEventListener("blur", () => {
        switch (true) {
            case !$name.value.trim():
                    validacion = true
                console.log(validacion);
                break;
                case !regExAlpha.test($name.value):
                    validacion = true
                console.log(validacion);
                break;
            default:
                validacion = false 
                console.log(validacion);
                break;
        }
    })
    $tel.addEventListener("blur", () => {
        switch (true) {
            case !$tel.value.trim():
                    validacion = true
                console.log(validacion);
                break;
            default:
                validacion = false 
                console.log(validacion);
                break;
        }
    })
    $description.addEventListener("blur", () => {
        switch (true) {
            case !$description.value.trim():
                    validacion = true
                console.log(validacion);
                break;
            default:
                validacion = false 
                console.log(validacion);
                break;
        }
    })
    $form.addEventListener('submit', function(e){
        let error = false;
        e.preventDefault();
        let elementsForm = this.elements;

        for (let index = 0; index < elementsForm.length-1; index++){
            if(elementsForm[index].value == ""){
                elementsForm[index].classList.add('is-invalid');
                $errors.innerHTML = 'Los campos señalados son obligatorios';
                error = true;
            }
        }
        if(!error){
            console.log('Todo bien');
            $form.submit();
        }
    })
})