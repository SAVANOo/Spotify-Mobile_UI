/*
function listFilms(lista) {
    const container = document.querySelector(.movie-list);
    let isDragging = false;
    let startPositionX = 0;
    
    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        startPositionX = e.clientX;
    });
    
    container.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const offsetX = e.clientX - startPositionX;
        container.scrollLeft -= offsetX;
        startPositionX = e.clientX;
    });
    
    container.addEventListener('mouseup', () => {
        isDragging = false;
    });
    
    container.addEventListener('mouseleave', () => {
        isDragging = false;
    });
}

listFilms('.recently-played-container-items');
listFilms('.editor-pick-container-items');
*/

const containers = document.querySelectorAll('.music-list');

// Função para adicionar funcionalidade de arrastar e rolagem a um único elemento
function addDragAndScrollFunctionality(container) {
    let isDragging = false;
    let startPositionX = 0;

    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        startPositionX = e.clientX;
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const offsetX = e.clientX - startPositionX;
        container.scrollLeft -= offsetX;
        startPositionX = e.clientX;
    });

    container.addEventListener('mouseup', () => {
        isDragging = false;
    });

    container.addEventListener('mouseleave', () => {
        isDragging = false;
    });
}

// Itere sobre os elementos e adicione a funcionalidade a cada um
containers.forEach(container => {
    addDragAndScrollFunctionality(container);
});




const elementosComID = document.querySelectorAll('.item img');
elementosComID.forEach(elemento => {
    elemento.setAttribute('draggable', 'false');
    elemento.setAttribute('tabindex', '-1');
});