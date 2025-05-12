const btnAbrir = document.querySelector("#Abrir");
const btnCerrar = document.querySelector("#Cerrar");

btnAbrir.addEventListener("click",() => {
    const ElementoSuperior = document.querySelector(".superior");
    ElementoSuperior.classList.add("abrir-superior");

    const h1 = document.querySelector("h1");
    const p = document.querySelector("p");
    h1.style.transform = "translateY(-132px)";
    p.style.transform = "translateY(-140px)";
    h1.style.transition = "transform 0.65s ease-in-out";
    p.style.transition = "transform 0.65s ease-in-out";

    const IconoCorazon = document.querySelector(".bx");
    IconoCorazon.classList.add("bx-rotada");

    setTimeout(()=> {
        ElementoSuperior.style.zIndex = -1;
        const ElementoMensaje = document.querySelector(".mensaje");
        ElementoMensaje.classList.add("abrir-mensaje");
    }, 700)
});



btnCerrar.addEventListener("click",() => {
    const ElementoSuperior = document.querySelector(".superior");
    ElementoSuperior.classList.remove("abrir-superior");

    const ElementoMensaje = document.querySelector(".mensaje")
    ElementoMensaje.classList.remove("abrir-mensaje")

     setTimeout(()=> {
        
    const h1 = document.querySelector("h1");
    const p = document.querySelector("p");
    h1.style.transform = "translateY(0px)";
    p.style.transform = "translateY(0px)";
    

    const IconoCorazon = document.querySelector(".bx");
    IconoCorazon.classList.remove("bx-rotada");

    ElementoSuperior.style.zIndex = 0;
    },700);
});

//con click en la carta
const contenedor = document.querySelector("#Abrircontenedor")
contenedor.addEventListener("click", () => {
    const ElementoSuperior = document.querySelector(".superior");
    ElementoSuperior.classList.add("abrir-superior");

    const h1 = document.querySelector("h1");
    const p = document.querySelector("p");
    h1.style.transform = "translateY(-132px)";
    p.style.transform = "translateY(-140px)";
    h1.style.transition = "transform 0.65s ease-in-out";
    p.style.transition = "transform 0.65s ease-in-out";

    const IconoCorazon = document.querySelector(".bx");
    IconoCorazon.classList.add("bx-rotada");

    setTimeout(()=> {
        ElementoSuperior.style.zIndex = -1;
        const ElementoMensaje = document.querySelector(".mensaje");
        ElementoMensaje.classList.add("abrir-mensaje");
    }, 700)
})