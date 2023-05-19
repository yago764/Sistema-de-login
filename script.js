function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
      document.getElementById("message").innerHTML = "Preencha todos os campos.";
      return;
    }

    if (username === "almeida" && password === "comandblock") {
      document.getElementById("message").innerHTML = "Login realizado com sucesso.";
    } else {
      document.getElementById("message").innerHTML = "Usuário ou senha inválidos.";
    }
}