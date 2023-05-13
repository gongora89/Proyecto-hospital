const formulario = document.getElementById("registro-Pacientes-form")
const nombrePaciente = document.getElementById("paciente")
const apellido = document.getElementById("apellido")
const cedula = document.getElementById("cedula")
const edad = document.getElementById("edad")
const telefono = document.getElementById("telefono")
const especialidad = document.getElementById("especialidad")

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const paciente ={
        nombrePaciente: nombrePaciente.value,
        apellido: apellido.value,
        cedula: cedula.value,
        edad: edad.value,
        telefono: telefono.value,
        especialidad: especialidad.value,
    }
    let pacientes = []
    let localPaciente = localStorage.getItem("Pacientes")
    if (localPaciente) {
        pacientes = JSON.parse(localPaciente)
    }
    pacientes.push(paciente)
    localStorage.setItem("Pacientes", JSON.stringify(pacientes))
    formulario.reset()
    alert("Paciente registrado con exito")
})