const especieSelect = document.getElementById('especie-animal');
let datosAnimales;

// Función autoejecutable (IIFE) para cargar los datos del archivo JSON
(async () => {
    try {
        const response = await fetch('animales.json');
        const data = await response.json();
        datosAnimales = data.animales;
    } catch (error) {
        console.error('Error al cargar los datos del archivo JSON', error);
    }
})();

// Función para obtener el animal de los datos cargados según la especie seleccionada por el usuario
async function animalData() {
    while (!datosAnimales) {
        await new Promise(resolve => setTimeout(resolve, 100)); 
    }
    const especie = especieSelect.value;
    return datosAnimales.find(animal => animal.especie === especie);
}

// Función para obtener la ruta de la imagen desde los datos cargados
async function rutaImagen() {
    const animal = await animalData();
    return `./assets/imgs/${animal.imagen}`;
}

// Función para obtener la ruta del sonido desde los datos cargados
async function rutaSonido() {
    const animal = await animalData();
    return `./assets/sounds/${animal.sonido}`;
}

export default { rutaImagen, rutaSonido };
