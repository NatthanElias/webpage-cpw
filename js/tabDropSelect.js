document.addEventListener('DOMContentLoaded', function () {
    var dropdown = document.getElementById("dropdown");
    var drop = document.getElementById("drop-nav");
    var arrow = document.getElementById("arrow");
    var icon = document.getElementById("drop-icon");
    var navbar = document.getElementById('navbar');


    dropdown.addEventListener("click", function(){
        if(drop.style.display === 'none'){
            drop.style.display = 'block';
        } else{
            drop.style.display = 'none';
        }
        if(dropdown.classList.contains('no-hover')){
            dropdown.classList.remove('no-hover');
            arrow.classList.remove('no-hover-icon');
            icon.classList.remove('no-hover-icon');
        }else{
            dropdown.classList.add('no-hover');
            arrow.classList.add('no-hover-icon');
            icon.classList.add('no-hover-icon');
        }

    });

    navbar.addEventListener("mouseleave", function(){
        drop.style.display = 'none';
        dropdown.classList.remove('no-hover');
        arrow.classList.remove('no-hover-icon');
        icon.classList.remove('no-hover-icon');
    });

});