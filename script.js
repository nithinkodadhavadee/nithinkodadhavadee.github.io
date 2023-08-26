const outputElement = document.getElementById('output');
const inputElement = document.getElementById('input');
// const asciiArt = import('asciiArt.html');
// import art from "./asciiArt";

art = [
    `
                                                                                                                        
    ***** *     **                        *                                    *****                    *******    
    ******  **    **** *   *         *     **          *                       ******                    *       ***  
    **   *  * **    ****   ***       **     **         ***                     **   *  *    **           *         **  
    *    *  *  **    * *     *        **     **          *                     *    *  *   **** *         **        *   
      *  *    **   *              ******** **                                    *  *     ****           ***          
     ** **    **   *     ***     ********  **  ***   ***     ***  ****          ** **    * **           ** ***        
     ** **     **  *      ***       **     ** * ***   ***     **** **** *       ** **   *                *** ***      
     ** **     **  *       **       **     ***   ***   **      **   ****        ** *****                   *** ***    
     ** **      ** *       **       **     **     **   **      **    **         ** ** ***                    *** ***  
     ** **      ** *       **       **     **     **   **      **    **         ** **   ***                    ** *** 
     *  **       ***       **       **     **     **   **      **    **         *  **    ***                    ** ** 
        *        ***       **       **     **     **   **      **    **            *       ***                   * *  
    ****          **       **       **     **     **   **      **    **        ****         ***        ***        *   
    *  *****                *** *     **    **     **   *** *   ***   ***      *  *****        ***  *  *  *********    
    *     **                  ***             **    **    ***     ***   ***    *    ***           ***  *     *****      
    *                                               *                          *                       *                
    **                                            *                            **                      **              
                                                *                                                                     
                                               *                                                                      
                                                                                                                      
    `,
    `
    N   N     t  h                K  K  SSS  
    NN  N ii  t  h    ii          K K  S     
    N N N    ttt hhh     nnn      KK    SSS  
    N  NN ii  t  h  h ii n  n     K K      S 
    N   N ii  tt h  h ii n  n     K  K SSSS  
                                             
    `
    ]
    
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

function addAsciiArt(){
    let index = getRndInteger(0,2);
    document.getElementById("art").innerHTML =  `<pre>` + art[index] + `</pre>`;
//     fetch('asciiArt.txt')
//   .then(response => response.text())
//   .then(text => console.log(text))
  // outputs the content of the text file
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

addAsciiArt();