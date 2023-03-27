const prompt = require("prompt-sync")();

const Rows=3;
const Cols=3;

const symbols_count = {
    "A" : 2,
    "B" : 4,
    "C" : 6,
    "D" : 8

}

const symbols_values = {
    "A" : 5,
    "B" : 4,
    "C" : 3,
    "D" : 2
}

const deposit = () => {
    while(true){
    const balance = prompt("Amount of deposit: ");
    const numberdepositamount = parseFloat(balance);

    if(isNaN(numberdepositamount) || numberdepositamount <= 0){
        console.log("please try again ");
    }else{
       return numberdepositamount;
    }
}
};

// console.log(deposit());

const getnumberoflines = () => {
    while(true){
    const lines = prompt("Number of lines you wanna play(1-3) :  ");
    const numberoflines = parseFloat(lines);

    if(isNaN(numberoflines) || numberoflines <= 0 || numberoflines >3){
        console.log("please try again ");
    }else{
       return numberoflines;
    }
}
};


// console.log(getnumberoflines());


const getbet = (balance,lines) => {
    while(true){
    const bet = prompt("How much do you wanna bet per line? : ");
    const numberbet = parseFloat(bet);

    if(isNaN(numberbet) || numberbet <= 0 || numberbet > balance/lines){
        console.log("Invalid bet, please try again ");
    }else{
       return numberbet;
    }
}
};

const spin = () =>{
    const symbols=[];
    for(const[symbol,count] of Object.entries(symbols_count)){
         for(let i=0; i <count ; i++){
            symbols.push(symbol);
         }
    }


    const reel = [];
    for(let i=0; i < Cols ;i++ ){
        reel.push([]);
        const reelsymbols = [...symbols];
        for(let j=0; j <Rows; j++){
            const randomindex = Math.floor(Math.random()*reelsymbols.length);
            reel[i].push(reelsymbols[randomindex]);
       reelsymbols.splice(randomindex,1);
        }

    }
    return reel;
};

const transpose = (reel)=>{
    const rows = [];
    for(let i=0; i< Rows; i++){
        rows.push([]);
        for(let j=0; j< Cols; j++){
            rows[i].push(reel[j][i]);
        }
    }
    return rows;
};










let balance = deposit();
const numberoflines = getnumberoflines();
const bet = getbet(balance,numberoflines);
const reels = transpose(reels);
console.log(reels);

