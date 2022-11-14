const btnGenerateGrid = document.getElementById("btn_generate_grid");
const grigliaCont = document.querySelector(".griglia-cont");
let bomb;

btnGenerateGrid.addEventListener("click", function () {
    console.log(this);
    grigliaCont.innerHTML = "";
    bomb = makeBombsList(16);
    generateGrid(10);
} );

/**
 * @param {number} numCelle
 */

function generateGrid(numCelle) {
    const totalCell = numCelle * numCelle;
    

    for (let i = 1; i <= totalCell; i++) {
        const newCell = document.createElement("div");

        newCell.classList.add("grid-cell");
        newCell.style.flexBasis = `calc(100% / ${ numCelle })`;
        newCell.style.width = `calc(100% / ${ numCelle })`;

        newCell.dataset.numCella = i + 1;
    
        grigliaCont.append(newCell);

        newCell.addEventListener ("click", function() {
            newCell.classList.toggle("bg-primary");
        } );
    }
    gridContainer.classList.remove( "d-none" );
}

/**
 * @this {htmlElement}
 */
function onCelleClick () {
    this.classlist.toggle("active");

    const numCella = + this.dataset.numcella;

    if(bomb.includes(numCella)){
        alert("hai trovato una bomba")
    }
}

// 16 bombe

/**
 * @param {number} min numero minimo
 * @param {number} max numero massimo
 */

function generateRandmNum (min, max){

// 0 ... 0.999999 * 16 -> 0 15.99999
// 0 > 15
// + 1
// 1 a 16

    return Math.floor(Math.random() * (max - min + 1)) + min; 
}


/**
 * @param {number} numCelle
 * @return {Array}
 */


function makeBombsList (numCelle) {
    const bombList = [];
    console.log(numCelle)
    while ( bombList.length < numCelle ){
        const num = generateRandmNum(1, numCelle );
        console.log(num);
        if( !bombList.includes ( num ) ) {
           bombList.push(num);
        }

    }
    console.log(bombList);
    return bombList;
    
}
