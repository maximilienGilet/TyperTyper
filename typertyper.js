// Get all typers !
let typers = document.querySelectorAll('.typer');
typers.forEach(function (typer) {
    // get words
    let words = typer.dataset.typerWords.split(';');
    // word counter
    let cpt = 0;
    // leter counter
    let letter = 0;
    // write or erase
    let increment = true;
    resetTyper(typer);
    // loop through word letters
    window.setInterval(() => {
        // actual write
        typer.textContent = words[cpt].substr(0,letter+1) + typer.dataset.typerCursor;
        // writing or erasing
        if (increment){
            if (letter > words[cpt].length-1){
                if(typer.dataset.typerErase == "false"){
                    cpt == words.length-1 ? cpt=0 : cpt++;
                    letter = 0;
                    resetTyper(typer);
                }
                else {
                    increment = false;
                }
            }
            else {
                letter++;
            }
        }
        else {
           if (letter < 0){
               increment= true;
               cpt == words.length-1 ? cpt=0 : cpt++;
           }
           else {
               letter--;
           }
        }
    }, typer.dataset.typerDelay);
});

function resetTyper(typer) {
    typer.textContent = typer.dataset.typerCursor;
}
