function generarGrupos() {
    // Obtener nombres del textarea y dividirlos en un array
    const inputNombres = document.getElementById('inputNombres').value;
    const nombresArray = inputNombres.split(',').map(nombre => nombre.trim());

    // Obtener número de grupos deseado (puedes ajustar este valor según tus necesidades)
    const numGrupos = 3;

    // Crear grupos aleatorios
    const grupos = Array.from({ length: numGrupos }, () => []);

    // Distribuir nombres en grupos de forma aleatoria
    for (let i = 0; i < nombresArray.length; i++) {
        const randomIndex = Math.floor(Math.random() * numGrupos);
        grupos[randomIndex].push(nombresArray[i]);
    }

    // Mostrar los grupos en la interfaz
    const gruposContainer = document.getElementById('grupos');
    gruposContainer.innerHTML = '';

    grupos.forEach((grupo, index) => {
        const grupoDiv = document.createElement('div');
        grupoDiv.innerHTML = `<strong>Grupo ${index + 1}:</strong> ${grupo.join(', ')}`;
        gruposContainer.appendChild(grupoDiv);
    });
}
