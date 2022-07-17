const currentNumbers = [];
const randomNumbers = 5;
const maxValue = 100;
let randNumber;
let displayedNumber = document.getElementById('displayNumbers');
let insertNumber = [];

for (let x = 0; x<randomNumbers; x++){
    randNumber = getUniqueNumber(currentNumbers, 1, maxValue);
    currentNumbers.push(randNumber);
}

displayedNumber.innerHTML = (currentNumbers);

setTimeout(
    function(){
        let containerDom = document.getElementById('numbersWrapper');
        containerDom.classList.add('hidden');
    }, 30000
)

setTimeout(
    function(){
        for (let x = 0; x<currentNumbers.length; x++){
            insertNumber.push(parseInt(prompt('Inserisci di seguito il numero memorizzato')));
        }

        let yourNumbers = compare(currentNumbers, insertNumber);

        score.innerHTML = (`Hai indovinato ${yourNumbers.length} numeri ${yourNumbers}`);
    }

    function compare(firstArray, secondArray){
        let sortFirstArray = firstArray.sort();
        let sortSecondArray = secondArray.sort();
        let common = [];
        console.log(firstArray, secondArray);
        let x = 0;
        let y = 0;

        while(x<firstArray.length && y<secondArray.length){
            if (sortFirstArray[x] === sortSecondArray[y]){
                common.push(sortFirstArray[x]);
                x++;
                y++;
            } else if (sortFirstArray[x]<sortSecondArray[y]){
                x++
            } else {
                y++;
            }
        }
        return common;

    },30500
)

function getRandomNumbers(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getUniqueNumber(usedNumberList, min, max) {

    let validNumber = false;

    let generatedRandomNumber;

    while (validNumber == false) {
        generatedRandomNumber = getRandomNumber(min, max);

        if (usedNumberList.includes(generatedRandomNumber) == false) {
            validNumber = true;
        }
    }

    return generatedRandomNumber;

}
