const form = document.querySelector("#form")
const result = document.querySelector("#result")
form.addEventListener('submit',(e)=>{
    const formData = new FormData(form);
    e.preventDefault();
    let object={};
    formData.forEach((value,key)=>{
        object[key] = value
    });
    let json = JSON.stringify(object);
    result.innerHTML = "Por favor espere..."

    fetch('https://api.web3forms.com/submit',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        },
        body:json
    }).then(async(response)=>{
        let json = await response.json();
        if(response.status ==200) {
            result.innerHTML= json.message;
        }else{
            console.log(response);
            result.innerHTML= json.message;
        }
    }).catch(e=>{
        console.log(e);
        result.innerHTML = "Algo ocurrio, te sugerimos que toques el boton flotante de whatsapp para pedir un presupuesto"
    }).then(()=>{
        form.reset();
        setTimeout(()=>{
            result.style.display = "none";
        },3000)
    })
})