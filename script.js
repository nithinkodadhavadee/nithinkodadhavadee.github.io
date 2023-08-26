const outputElement = document.getElementById('output');
const inputElement = document.getElementById('input');

    
const commandHistory = [];
let historyIndex = -1;

inputElement.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const command = inputElement.value.trim();
        inputElement.value = '';

        if (command) {
            commandHistory.push(command);
            historyIndex = commandHistory.length;

            const output = processCommand(command);
            outputElement.innerHTML += `<br>> ${command}<br>${output}`;
            outputElement.scrollTop = outputElement.scrollHeight;
        }
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (historyIndex > 0) {
            historyIndex--;
            inputElement.value = commandHistory[historyIndex];
        }
    } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            inputElement.value = commandHistory[historyIndex];
        } else {
            inputElement.value = '';
        }
    }
});

function processCommand(command) {
    switch (command) {
        case 'help':
            return 'Available commands: help, about, contact';
        case 'about':
            return 'This is a terminal emulator like portfolio built using HTML, CSS, and JavaScript.';
        case 'contact':
            return 'You can reach us at nithinkodadhavadee@outlook.com.';
        default:
            return `Command not found: ${command}`;
    }
}
