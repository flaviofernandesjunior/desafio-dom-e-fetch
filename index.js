function getUserInfo() {
    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then((response) => {
        let usuario = response.results[0]
        let primeiroNome = document.getElementById("full-name");
        primeiroNome.innerHTML = usuario.name.first + " " + usuario.name.last;
        console.log(usuario)
        let oEmail = document.getElementById("email");
        oEmail.innerHTML = usuario.email;
        let numtelefone = document.getElementById("phone");
        numtelefone.innerHTML = usuario.phone;
        let nomerua = document.getElementById("street");
        nomerua.innerHTML = usuario.location.street.name;
        let nomeEstado = document.getElementById("state");
        nomeEstado.innerHTML = usuario.location.state;
        }
    )
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Usuario carregado");
    })
}

getUserInfo();




