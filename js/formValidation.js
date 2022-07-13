document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById("form");
    var name = document.getElementById("name");
    var email = document.getElementById("e-mail");
    var msg = document.getElementById("msg");
    var error = document.getElementById("error");

    form.addEventListener('submit', function(e){
        var messages = [];

        if(name.value === "" || name.value == null){
            messages.push("Preencha o campo nome");
        }

        if(email.value === "" || email.value == null){
            messages.push("Preencha o campo e-mail");
        }

        if(msg.value === "" || msg.value == null){
            messages.push("Preencha o campo mensagem");
        }

        if(messages.length > 0){
            e.preventDefault();
            error.innerText = messages.join (', ');
        }
        
    });

});