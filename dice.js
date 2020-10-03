function roll() {
    //  x1 = document.getElementById("1");
    //  x2 = document.getElementById("2");
    //    = document.getElementById("3");
    //  x4 = document.getElementById("4");
    //  x5 = document.getElementById("5");
    //  x6 = document.getElementById("6");

    img1 = document.createElement('img');
    img1.src = 'https://tekeye.uk/android/examples/images/one.png';
    img2 = document.createElement("img");
    img2.src = 'https://tekeye.uk/android/examples/images/two.png';
    img3 = document.createElement("img");
    img3.src = 'https://webstockreview.net/images/dice-clipart-number-3-1.png';
    img4 = document.createElement("img");
    img4.src = 'https://tekeye.uk/android/examples/images/four.png';
    img5 = document.createElement("img");
    img5.src = 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/samsung/220/die-face-5_2684.png';
    img6 = document.createElement("img");
    img6.src= 'https://tekeye.uk/android/examples/images/six.png';
    rollRandom();
}

function rollRandom() {
    //num = Math.floor(Math.random() * 6) + 1;
    num = 1;
    document.write(num);
    //let node = document.createElement("P");
    if (num == 1){
    document.getElementById('para').innerHTML='img1';  
    document.getElementById('para').innerHTML = num;
    } 
     else if (num == 2)
     let textNode = document.createTextNode(img2);
    else if (num == 3)
    let textNode = document.createTextNode(img3);
    else if (num == 4)
    let textNode = document.createTextNode(img4);
    else if (num == 5)
    let textNode = document.createTextNode(img5);
    else if (num == 6)
    let textNode = document.createTextNode(img6);
    else
    let textNode = document.createTextNode("Wrong");

    // node.appendChild(textNode);
    // document.getElementById("myDiv").appendChild(node);
}