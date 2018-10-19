
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }

        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

var cont = 1;
var bitacoras = [];
var formulario = document.getElementById("bitacora");
/* Contiene el elemento del HTML que contiene el formulario*/

formulario.addEventListener("submit", (evt) => {
    evt.preventDefault(); /*Este metodo lo que hace es prevenir que el evento que se realizar por defecto, no se haga, para ponder realizar algo con los datos, antes de que 
                            se produsca el evento*/


    let bitacora = {
        cant: cont,
        fecha: formulario[1].value,
        descripcion: formulario[2].value,
        cantidad: formulario[3].value
        /* contiene los elementos del formulario que aportan datos  */
    }

    if (bitacora.descripcion == "" || bitacora.fecha == "" || bitacora.cantidad == "") {
        formulario[1].style.border = "1px solid red";
        formulario[2].style.border = "1px solid red";
        formulario[3].style.border = "1px solid red";
    } else {
        formulario[1].style.border = "1px solid green";
        formulario[2].style.border = "1px solid green";
        formulario[3].style.border = "1px solid green";
        bitacoras.push(bitacora);
        cont++;
        mostrar();
    }



});

console.log(Object.values(bitacora));

const crearElemento = (bitacora, tbody) => {
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
        let td = document.createElement("td");
        let content = document.createTextNode(item);
        td.appendChild(content);
        tr.setAttribute("class", "click");
        tr.appendChild(td);
        /*
        Contiene las filas y las columnas de la tabla

        la variable content contiene los elementos que se encuentran dentro del formulario

        Lo que hace la funcion es agregar todos a la tabla de la derecha, agrega un registro de todos los datos que se ha puesto en el formulario
        */
    });
    tbody.appendChild(tr);
}

const eliminar = (tbody) => {

    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    /*Devuelve el primer hijo del nodo que se ha seleccionado
    
    Despues del while en elemento queda vacio*/
}

const agregar = () => {
    var eventtr = document.querySelectorAll(".click");
    eventtr.forEach((item, index) => {
        item.addEventListener("click", () => {
            document.querySelector("#fecha").value = item.childNodes[1].textContent;
            document.querySelector("#descp").value = item.childNodes[2].textContent;
            document.querySelector("#cant").value = item.childNodes[3].textContent;
        })
    });
}

const mostrar = () => {
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
        console.log(document.querySelector(".tabla-btc tbody").childElementCount);
        eliminar(document.querySelector(".tabla-btc tbody"));
    }

    bitacoras.forEach(item => {
        crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });

    agregar();
}