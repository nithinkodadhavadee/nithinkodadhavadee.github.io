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
        case 'about':
            return 'This is a terminal emulator like portfolio built using HTML, CSS, and JavaScript.';
        case 'clear':
                outputElement.innerHTML = "";
                return ''
        case 'contact':
            return `
            You can reach me at following places: <br> 
            <a href="mailto:nithinkodadhavadee@outlook.com">nithinkodadhavadee@outlook.com</a> <br> 
            <a href="tel:+919141128016"> +91 9141128016</a>
            `;
        case 'help':
            return `Available commands: <br>
            <br>
            about<br>
            clear<br>
            contact<br>
            help <br>
            link <br>
            links<br>
            resume<br>`;
        case 'links':
            return `
            Use the command <code>link --&ltplatform&gt</code> to be redirected to the following platform.<br>
            <br>
            available parameters: <br>
              --github <br>
              --linkedin
            ` ;
        case command.match(/^link/)?.input:
            switch(command.slice(7)){
                case 'github':
                    window.open("https://github.com/nithinkodadhavadee", "_blank");
                    return '<a href="https://github.com/nithinkodadhavadee/">The link to my Github Profile</a>';
                case 'linkedin':
                    window.open("https://www.linkedin.com/in/nithinkodadhavadee/", "_blank");
                    return '<a href="https://www.linkedin.com/in/nithinkodadhavadee/">The link to my Linkedin Profile</a>';
                default:
                    console.log(command.slice(7));
                    return 'Un recognized parameter. try <code>links<code> to know how to use the command.';
            }
        case 'resume':
            window.open('./Resume.pdf', '_blank');
            return "";
        default:
            return `Command not found: ${command}`;
    }
}
