let input = document.querySelector(".input");
let botonAgregar = document.querySelector(".boton-agregar");
let contenedor = document.querySelector(".container");

class Item {
  constructor(nuevaTarea) {
    this.crearDiv(nuevaTarea);
  }

  crearDiv(nuevaTarea) {
    let inputItem = document.createElement("input");
    inputItem.disabled = true;
    inputItem.classList.add("item-input");
    inputItem.value = nuevaTarea;

    let contenerdor2 = document.createElement("div");
    contenerdor2.classList.add("item");

    let botonEditar = document.createElement("button");
    botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
    botonEditar.classList.add("boton-editar");

    let botonRemover = document.createElement("button");
    botonRemover.innerHTML = "<i class='fas fa-trash'></i>";
    botonRemover.classList.add("boton-remover");

    contenerdor2.appendChild(inputItem);
    contenerdor2.appendChild(botonEditar);
    contenerdor2.appendChild(botonRemover);
    contenedor.appendChild(contenerdor2);

    botonEditar.addEventListener("click", function () {
      inputItem.disabled = !inputItem.disabled;
      if (inputItem.disabled == false) {
        botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>";
      } else {
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
      }
    });
    botonRemover.addEventListener("click", function () {
      contenerdor2.remove();
    });
  }
}

function chequearInput() {
  if (input.value != null) {
    new Item(input.value);
    input.value = null;
  }
}

botonAgregar.addEventListener("click", chequearInput);
