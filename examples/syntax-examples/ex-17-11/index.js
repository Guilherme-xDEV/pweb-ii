const elTitulo = document.getElementById("titulo-principal");
console.table(elTitulo);

elTitulo.innerText = "PWEB ii"
elTitulo.classList.add("titulo"); // style.color recebe o valor devido

elTitulo.classList.remove("titulo");
elTitulo.classList.toggle("titulo");

elTitulo.style.backgroundColor = "#000"

const div = document.getElementById("div");
// querySelector("#div")

//div.innerHTML = `<h3 style='color: purple'>Tópicos Estudados:</h3>
//<p>DOM; Métodos de seleção; Métodos de criação; etc.</p>`;

const titulo3 = document.createElement("h3"); 
titulo3.innerText = "Tópicos estudados:";
titulo3.style.color = "purple";

const parag = document.createElement("p"); 
parag.innerText = "DOM; Métodos de seleção; Métodos de criação; etc.";

div.appendChild(titulo3);
div.appendChild(parag);

const btnTopicos = document.getElementById("btn-topicos");
btnTopicos.onclick = () => {
    // div.style.display = "none";
    div.style.display = "block"
    btnTopicos.textContent = "Mostrar Tópicos"
}

btnTopicos.addEventListener("click", () => {
    div.style.display = "none";
}); // forma mais indicada, registra um evento.