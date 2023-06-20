let listaBotones = document.querySelectorAll("ul li a");
let imagen = document.querySelector(".item-right img");

for(let i = 0; i < listaBotones.length; i++){
    listaBotones[i].addEventListener("mouseover", () => {
        if (listaBotones[i].textContent === "My Work"){
            imagen.style.opacity = "0";
            setTimeout(() => {
                imagen.setAttribute("src","./assets/img/my_work.jpg");
                imagen.style.opacity = "1";
            }, 200);
        }
        else if (listaBotones[i].textContent === "My Career"){
            imagen.style.opacity = "0";
            setTimeout(() => {
                imagen.setAttribute("src","./assets/img/my_career.jpg");
                imagen.style.opacity = "1";
            }, 200);
        }
        else if (listaBotones[i].textContent === "About Me"){
            imagen.style.opacity = "0";
            setTimeout(() => {
                imagen.setAttribute("src","./assets/img/about_me.jpg");
                imagen.style.opacity = "1";
            }, 200);
        }
        else if (listaBotones[i].textContent === "Curriculum"){
            imagen.style.opacity = "0";
            setTimeout(() => {
                imagen.setAttribute("src","./assets/img/curriculum.jpg");
                imagen.style.opacity = "1";
            }, 200);
        }
        else{
            alert("El valor del boton cambio");
        }
    });

    /*listaBotones[i].addEventListener("mouseout", () => {
        imagen.style.opacity = "0";
        setTimeout(() => {
            imagen.setAttribute("src","./assets/img/web-design-2038872_1280.jpg");
            imagen.style.opacity = "1";
        }, 200);
    });*/
}

