class Game{
    constructor(nameOfGame){
        this.nameOfGame = nameOfGame;
    }

    decription(){
        return `this game is called ${this.nameOfGame}.`;
    }
}


class Console{
    constructor(nameOfConsole){
        this.nameOfConsole = nameOfConsole;
        this.gamesInConsole = [];
    }

    addGame(gameTitle){
        if(gameTitle instanceof Game){
            this.gamesInConsole.push(gameTitle);
        } else{
            throw new Error(`This is not a valid game:${gameTitle}`);
        }
    }

    decription(){
        return `This console: ${this.nameOfConsole} has ${this.gamesInConsole.lenght} downloaded to it.`;
    }
}

class Menu{
    constructor(){
        this.allConsoles = [];
        this.chosenConsole = null;
    }

    startMenu(){
        let selection = this.showOptionsInMainMenu();
        while(selection != 0){
            switch (selection){
                case '1':
                    this.addConsole();
                    break;
                case '2':
                    this.viewAConsole();
                    break;
                case '3':
                    this.removeAConsole();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showOptionsInMainMenu();
        }

        alert('See You Later');
    }

    showOptionsInMainMenu(){
        return prompt(`
        0.) Exit
        1.) Add console
        2.) View a console
        3.) Remove a console`);
    }

    showConsoleOptions(consoleInfo){
        return prompt(`
        0.) go back
        1.) add game to console
        2.) delete game from console 
        
        ${consoleInfo}`);
    }

    addConsole(){
        let nameOfConsole = prompt('Enter the name of your console.');
        this.allConsoles.push(new Console(nameOfConsole));
    }

    viewAConsole(){
        let indexOfConsole = prompt('Enter the index of the console that you would like to see.');
        if(indexOfConsole > -1 && indexOfConsole < this.allConsoles.lenght){
            this.chosenConsole = this.allConsoles[indexOfConsole];
            let descript = 'Your console is: ' + this.chosenConsole.nameOfConsole + '\n';

            for(let i = 0; i < this.chosenConsole.gamesInConsole.lenght; i++){
                descript += i + '.) ' + this.chosenConsole.gamesInConsole[i].nameOfGame + ' - ' + this.chosenConsole.gamesInConsole[i].gameTitle + '\n';
            }
            
            let selection = this.showConsoleOptions(descript);
            switch(selection){
                case '1':
                    this.addGameToConsole();
                    break;
                case '2':
                    this.deleteGameFromConsole();
            }
        }
    }
}

let menu = new Menu();
menu.startMenu();