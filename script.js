let counter = 0;
let history = [];
let historyIndex = -1;

document.getElementById('subtract-btn').addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        updateProgressBar();
        history.push(counter);
        historyIndex++;
    }
});

document.getElementById('add-btn').addEventListener('click', () => {
    if (counter < 150) {
        counter++;
        updateProgressBar();
        history.push(counter);
        historyIndex++;
    }
});

document.getElementById('undo-btn').addEventListener('click', () => {
    if (historyIndex > 0) {
        historyIndex--;
        counter = history[historyIndex];
        updateProgressBar();
    }
});

document.getElementById('redo-btn').addEventListener('click', () => {
    if (historyIndex < history.length - 1) {
        historyIndex++;
        counter = history[historyIndex];
        updateProgressBar();
    }
});

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const percentage = (counter / 150) * 100;
    progressBar.style.width = `${percentage}%`;
    document.getElementById('counter').textContent = counter;
}
