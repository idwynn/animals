import { Leon, Lobo, Oso, Serpiente, Aguila } from "./modules/especie.js";
import data from "./modules/data.js";

const especieSelect = document.getElementById("especie-animal");

especieSelect.addEventListener("change", async () => {
  const img = document.getElementById("preview");
  img.src = await data.rutaImagen();
});

async function animalInstancia() {
  const especie = especieSelect.value;
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  const imagen = await data.rutaImagen();
  const comentarios = document.getElementById("comentarios").value;
  const sonido = await data.rutaSonido();

  switch (especie) {
    case "Leon":
      return new Leon(nombre, edad, imagen, comentarios, sonido);
    case "Lobo":
      return new Lobo(nombre, edad, imagen, comentarios, sonido);
    case "Oso":
      return new Oso(nombre, edad, imagen, comentarios, sonido);
    case "Serpiente":
      return new Serpiente(nombre, edad, imagen, comentarios, sonido);
    case "Aguila":
      return new Aguila(nombre, edad, imagen, comentarios, sonido);
    default:
      console.error("Especie no encontrada");
      return null;
  }
}

async function añadirTarjeta() {
  const animal = await animalInstancia();
  const card = animal.createCard();
  const animalContainer = document.getElementById("Animales");
  animalContainer.appendChild(card);
}

const form = document.getElementById("animal-form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  await añadirTarjeta();
  form.reset();
});

function actualizarModal(imagen, edad, comentario) {
  const modalBody = document.querySelector("#modal-container .modal-body");

  modalBody.innerHTML = `
        <img src="${imagen}" class="img-fluid" alt="Animal">
        <p class="edad">Edad: ${edad}</p>
        <hr>
        <p class="comentario">Observaciones: ${comentario}</p>
    `;
  $("#modal-container").modal("show");
}

document.addEventListener("click", (event) => {
  if (event.target.matches(".card img")) {
    const imagen = event.target.src;
    const edad = event.target.parentElement.getAttribute("data-age");
    const comentario = event.target.parentElement.getAttribute("data-comment");
    actualizarModal(imagen, edad, comentario);
  }
});
