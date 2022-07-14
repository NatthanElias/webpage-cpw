document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById("form");
    var name = document.getElementById("name");
    var email = document.getElementById("e-mail");
    var msg = document.getElementById("msg");
    var error = document.getElementById("error");

    form.addEventListener('submit', function(e){
        const nameValue = name.value.trim();
        const emailValue = email.value.trim();
        const msgValue = msg.value.trim();

        var messages = [];

        if(nameValue === "" || nameValue == null){
            messages.push("Preencha o campo nome");
        }

        if(emailValue === "" || emailValue == null){
            messages.push("Preencha o campo e-mail");
        }else if (!isValidEmail(emailValue)) {
            messages.push("E-mail inválido")
        }

        if(msgValue === "" || msgValue == null){
            messages.push("Preencha o campo mensagem");
        }

        if(messages.length > 0){
            e.preventDefault();
            error.innerText = messages.join (', ');
        }
        
    });

    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

});