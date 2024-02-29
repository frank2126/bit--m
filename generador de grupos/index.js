function generarGrupos() {
    const inputNombres = document.getElementById('inputNombres').value;
    const nombresArray = inputNombres.split(',').map(nombre => nombre.trim());

    const numGrupos = 2;

    const grupos = Array.from({ length: numGrupos }, () => []);

    for (let i = 0; i < nombresArray.length; i++) {
        const randomIndex = Math.floor(Math.random() * numGrupos);
        grupos[randomIndex].push(nombresArray[i]);
    }
    const gruposContainer = document.getElementById('grupos');
    gruposContainer.innerHTML = '';

    grupos.forEach((grupo, index) => {
        const grupoDiv = document.createElement('div');
        grupoDiv.innerHTML = `<strong>Grupo ${index + 1}:</strong> ${grupo.join(', ')}`;
        gruposContainer.appendChild(grupoDiv);
    });
}
