
let colorButtons = ["red","blue","yellow","green"];
let newOrderButton = [];
let myOrderButton = [];
//alert(randomColorNum);
let levelIndex = 0;
let statusKeyDown = true;
let statusClic = false;
let totalClics = 0;


//

$("button").click(function (e) { 
    console.log(statusClic);
    if (statusClic === true){
                //alert($(this).text());
        toggleColor($(this).text());
        myOrderButton.push($(this).text());
        totalClics++;
        if (totalClics === newOrderButton.length){
            //alert(myOrderButton + " " + newOrderButton);
            if (myOrderButton.join() === newOrderButton.join()){
                setTimeout(() => {
                    addLevel();
                    addRecordButton();
                    myOrderButton = [];
                    totalClics = 0;
                }, 800);
            }
            else{
                newOrderButton = [];
                myOrderButton = [];
                levelIndex = 0;
                totalClics = 0;
                $("h1").text("Fail, Press any key to start");
                statusKeyDown = true;
                statusClic = false;
                //alert("fallaste");
            }
        }
    }
});


$(document).keydown(function (e) { 
    e.preventDefault();
    console.log(statusKeyDown);
    if (statusKeyDown){
        addLevel();
        addRecordButton();
        statusKeyDown = false;
        statusClic = true;
    }
});



/*$(document).keydown(function (e) { 
    console.log(statusKeyDown);
    if (statusKeyDown) {
        // Verificar si la tecla presionada es Enter o Space
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault(); // Evitar la acción predeterminada del navegador
            if (!e.repeat) { // Evitar la ejecución duplicada del evento
                addLevel();
                addRecordButton();
                statusKeyDown = false;
                statusClic = true;
            }
        }
    }
});*/


function addRecordButton(){
    let randomColorNum = Math.floor(Math.random() * 4);
    toggleColor(colorButtons[randomColorNum]);
    newOrderButton.push(colorButtons[randomColorNum]);
}

function addLevel() {
    levelIndex++;
    $("h1").text("level " + levelIndex);
}

function toggleColor(color){
    $("." + color + "-item").addClass(color + "-itemBlinking");
    setTimeout(() => {
        $("." + color + "-item").removeClass(color + "-itemBlinking");
    }, 300);
}


/*var sonIguales = myOrderButton.every(function(elemento, indice) {
    return elemento === newOrderButton[indice];
});*/


//myOrderButton.join() === newOrderButton.join()