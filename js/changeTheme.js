document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme');
    var text = document.getElementById('theme-txt');

    btn.addEventListener("click", function(){
        if(document.body.classList.contains('light')){
            document.body.classList.add('dark');
            document.body.classList.remove('light');
            text.textContent="Leitura: Claro";
        }else{
            document.body.classList.add('light');
            document.body.classList.remove('dark');
            text.textContent="Leitura: Escuro";
        }

    });

});