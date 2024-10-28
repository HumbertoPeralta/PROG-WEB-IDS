document.addEventListener("DOMContentLoaded", cargarTareas);

function cargarTareas() {
    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas.forEach(tarea => agregarTareaDOM(tarea.texto, tarea.completada));
}

function guardarTareas() {
    const tareas = [];
    document.querySelectorAll("#listaTareas li").forEach(item => {
        const texto = item.querySelector("span").textContent;
        const completada = item.querySelector("input[type='checkbox']").checked;
        tareas.push({ texto, completada });
    });
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

function agregarTarea() {
    const textoInput = document.getElementById("texto");
    const textoTarea = textoInput.value.trim();
    const errorMensaje = document.getElementById("errorMensaje");

    if (textoTarea === "") {
        errorMensaje.textContent = "Error, ingresa una tarea";
        return;
    } else {
        errorMensaje.textContent = "";
    }

    agregarTareaDOM(textoTarea, false);
    guardarTareas();
    textoInput.value = "";
}

function agregarTareaDOM(textoTarea, completada) {
    const listaTareas = document.getElementById("listaTareas");
    const tareaItem = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completada;
    checkbox.addEventListener("change", guardarTareas);

    const tareaSpan = document.createElement("span");
    tareaSpan.textContent = textoTarea;
    tareaSpan.style.textDecoration = completada ? "line-through" : "none";
    checkbox.addEventListener("change", () => {
        tareaSpan.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "eliminarBtn";
    botonEliminar.addEventListener("click", () => {
        tareaItem.remove();
        guardarTareas();
    });

    tareaItem.appendChild(checkbox);
    tareaItem.appendChild(tareaSpan);
    tareaItem.appendChild(botonEliminar);
    listaTareas.appendChild(tareaItem);
}
