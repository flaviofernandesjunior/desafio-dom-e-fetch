function getUserInfo() {
    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then((response) => {
        let usuario = response.results[0]
        let primeiroNome = document.getElementById("full-name")
        primeiroNome.innerHTML = usuario.name.first + " " + usuario.name.last;
        console.log(usuario)
        let oEmail = document.getElementById("email")
        oEmail.innerHTML = usuario.email;
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




