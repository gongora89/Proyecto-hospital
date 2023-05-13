function mostrarPacientes() {
    let Pacientes = []
    let localPacientes = localStorage.getItem("Pacientes")
    if (localPacientes) {
        Pacientes = JSON.parse(localPacientes)
    }
    const tablaPacientes = document.getElementById("tabla-Pacientes")
    const cuerpoTabla = tablaPacientes.getElementsByTagName("tbody")[0]

    Pacientes.forEach(Paciente => {
        let fila = cuerpoTabla.insertRow()
        const celdaNombrePaciente = fila.insertCell()
        celdaNombrePaciente.textContent= Paciente.nombrePaciente
        const celdaApellido = fila.insertCell();
        celdaApellido.textContent=Paciente.apellido
        const celdaDocumento = fila.insertCell();
        celdaDocumento.textContent=Paciente.cedula
        const celdaEdad = fila.insertCell();
        celdaEdad.textContent=Paciente.edad
        const celdaTelefono = fila.insertCell();
        celdaTelefono.textContent=Paciente.telefono
        const celdaEspecialidad = fila.insertCell();
        celdaEspecialidad.textContent=Paciente.especialidad
        const celdaDoctor = fila.insertCell();
        celdaDoctor.textContent="Por asignar"
    });
}

mostrarPacientes()
