 function randomBosses() {
     const bosses = 
     ["Abyss Watchers",
      "Pontiff Sulyvahn", 
      "Dancer of the Boreal Valley", 
      "Twin Princes", 
      "Champion Gundyr"]

let outPut = document.getElementById("randomElementOutPut")    

let child = outPut.firstChild
while (child) {
     outPut.removeChild(child);
     child = outPut.firstChild;
}

let randomNumber = Math.floor(Math.random() * bosses.length)

let newParagraph = document.createElement("h1")

newParagraph.textContent = bosses[randomNumber];

outPut.appendChild(newParagraph)

return outPut

}

document.body.style.backgroundImage = "url('img/teahub.io-game-live-wallpaper-219751.jpg')";






// let total_images = 5;

// let random_number = Math.floor((Math.random() * total_images));
// let random_img = new Array();
// let random_text = [];

// random_img[0] = "https://cdna.artstation.com/p/assets/images/images/037/718/644/large/edric-luffie-abyss-watchers-web.jpg?1621142998";
// random_text[0] = 'Abyss Watchers';
// random_img[1] = "https://images7.alphacoders.com/697/697746.jpg";
// random_text[1] = 'Pontiff Sulyvahn';
// random_img[2] = "https://cdnb.artstation.com/p/assets/images/images/005/707/897/large/chris-kotiesen-danceroftheborealvalley-4k.jpg?1493167569";
// random_text[2] = 'Dancer of the Boreal Valley';
// random_img[3] = "https://wallpapers.com/images/hd/uhd-dark-souls-3-twin-princes-waitau3ik1ahc48e.jpg";
// random_text[3] = 'Twin Princes';
// random_img[4] = "https://cdnb.artstation.com/p/assets/images/images/028/192/293/large/marsela-dolgacheva-1920x1080-champion-gundyr-1.jpg?1593727607";
// random_text[4] = 'Champion Gundyr';

// document.body.style.backgroundImage = "url(" + random_img[random_number] + ")";
// document.getElementById("txtSecTxt").innerHTML = random_text[random_number];