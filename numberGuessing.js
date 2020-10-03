
function check(){
    let number = document.getElementById('number').value;
    num = parseInt(number);
    if(num > rand){
        count--;
        if(count == 0) {
            let message = document.createTextNode('Game Over')
            document.getElementById('myDiv').appendChild(message)
            createButton()
        }
        else{
     let message = document.createTextNode('Too_high ' + 'no. of times remained ' + count)
     document.getElementById('myDiv').appendChild(message)
        }
     
    }
    else if(num < rand) {
        count--;
        if(count == 0){
            let message = document.createTextNode('Game Over')
            document.getElementById('myDiv').appendChild(message)
             createButton()
        }
        else{
        let message = document.createTextNode('Too_low ' + 'no. of times remained ' + count)
     document.getElementById('myDiv').appendChild(message)
        }
        
    }
    else{
        let message = document.createTextNode('Correct')
        document.getElementById('myDiv').appendChild(message)
     createButton()
    }
}

function generate(){
    ran = Math.random() * (100 - 1) + 1;
    rand = Math.floor(ran);
    console.log(rand)
    count = 10;
}

function clear(){
    document.getElementById('myDiv').innerHTML = '';
}
function createButton(){
    let btn = document.createElement('button')
    let text = document.createTextNode('Start new game');
    btn.appendChild(text);
    document.getElementById('myDiv').appendChild(btn)
    btn.addEventListener('click', generate)
    btn.addEventListener('click', clear)
}