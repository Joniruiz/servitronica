window.addEventListener("load", () => {

    let hamburger = document.querySelector(".hamburger");
    let menuMobile = document.querySelector(".menuMobile")
    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("is-active");
        menuMobile.classList.toggle("hidden");
        menuMobile.classList.toggle("deploy");
    });
    /* formulario */
    let
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
                $description.style.borderColor = "red"
                validacion = true
                console.log(validacion);
                break;
            default:
                validacion = false
                $description.style.borderColor = "green"
                console.log(validacion);
                break;
        }
    })
    ////////////////////////////////////////////////////////////////////////
    /* FORMULARIO DE CONTACTO  */
    const form = document.querySelector("#form")
    const result = document.querySelector("#result")

    form.addEventListener('submit', (e) => {
        let validacion = false;
        e.preventDefault();
        let elementsForm = form.elements;
        console.log(elementsForm)
        for (let index = 2; index < elementsForm.length - 1; index++) {
            if (elementsForm[index].value == "") {
                elementsForm[index].style.borderColor = "red"
                $errors.innerHTML = 'Los campos señalados son obligatorios';
                validacion = true;
            }
        }
        if (validacion == false) {
            console.log('Todo bien');
            const formData = new FormData(form);
            let object = {};
            formData.forEach((value, key) => {
                object[key] = value
            });
            let json = JSON.stringify(object);
            result.innerHTML = "Por favor espere..."

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            }).then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    result.innerHTML = json.message;
                } else {
                    console.log(response);
                    result.innerHTML = json.message;
                }
            }).catch(e => {
                console.log(e);
                result.innerHTML = "Algo ocurrio, te sugerimos que toques el boton flotante de whatsapp para pedir un presupuesto"
            }).then(() => {
                form.reset();
                setTimeout(() => {
                    result.style.display = "none";
                }, 3000)
            })

        }

    })
})
