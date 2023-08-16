// PART - B
// 3. b) Sum of 2 inputs
let form = document.querySelector('form');
let output = document.createElement('p')
form.appendChild(output);

function handleSum(event){
    let num1 = parseFloat(document.getElementById('number1').value);
    let num2 = parseFloat(document.getElementById('number2').value);
    let sum =  num1 + num2;
    if(event.code == 'Enter'){
       if((!isNaN(num1)) && (!isNaN(num2))) {
            output.innerText="The Output is : " + sum;
            output.style.fontWeight="bold";
        }
        else{
        alert('Do not leave field empty');
       }
    }
}


// Part C
// 4. Palindrome 

let checkPalindrome = (event) =>{
    event.preventDefault();
    let word=document['palindrome']['palindromeText'].value;
    let palindromeDisplay = document.getElementById('palindromeDisplay');
    let br = document.createElement('br');
    let check=[];
    // for(let i=0;i<word.length;i++){
    //     check.unshift(word[i]); 
    // }

    check = word.split('')
    let reverse = check.reverse();
    let newWord = reverse.join('');
    palindromeDisplay.textContent=(`Original: ${word.toLowerCase()} & Reversed: ${newWord.toLowerCase()}`)

    if(word.toLowerCase() == newWord.toLowerCase() ){
        palindromeDisplay.append(br ," It is a Palindrome")
    }
    else{
        palindromeDisplay.append(br, " Not a Palindrome")
    }
}






// 5.) 5th Multiplication Table

let number=5;
let times=0;
let tBody = document.getElementById("tBody")
for(times; times<=10; times++){
    let result = times * number;
        let tr= document.createElement('tr');
        let td= document.createElement('td');
        tBody.appendChild(tr);
        tr.appendChild(td)
        td.innerText=(`5 x ${times} = ${result}`) ;

}




