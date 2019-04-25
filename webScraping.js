const rp = require('request-promise');
const $ = require('cheerio');


let x = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let fName = [];
let mName = [];
let sName = [];


for(let i =0; i < x.length; i++) {
    
    url = 'https://www.mithrilandmages.com/utilities/MedievalBrowse.php?letter=' + x[i] + '&fms=F';
    //console.log(url);
    rp(url).then(function(html) { 
        
        for (let j = 0; j < $('br', html).length; j++) {
            //success!
            fName.push($('br', html)[j].prev.data);
        }
        
        console.log('female:', fName[getRandomInt(2, fName.length-3)]);
           
    })  
    .catch(function(err) {
        //handle error!
    }) 
   
}


for(let i =0; i < x.length; i++) {
    
    url = 'https://www.mithrilandmages.com/utilities/MedievalBrowse.php?letter=' + x[i] + '&fms=M';
    //console.log(url);

    rp(url).then(function(html) { 
        
        for (let i = 0; i < $('br', html).length; i++) {
            //success!
            mName.push($('br', html)[i].prev.data);
        }
        
        console.log('male:', mName[getRandomInt(2, mName.length-3)]);   
    })
    .catch(function(err) {
        //handle error!
    })
    
    
}

for(let i =0; i < x.length; i++) {
    
    url = 'https://www.mithrilandmages.com/utilities/MedievalBrowse.php?letter=' + x[i] + '&fms=S';
    //console.log(url);

    rp(url).then(function(html) { 
        
        for (let i = 0; i < $('br', html).length; i++) {
            //success!
            sName.push($('br', html)[i].prev.data);
        }
        
        console.log('surname:', sName[getRandomInt(2, sName.length-3)]);   
    })
    .catch(function(err) {
        //handle error!
    })  
    
}


setUpEventListeners: function (fName[]) {
        let showNames = document.querySelector('button');
        todosUl.addEventListener('click', function (event) {
            let elementClicked = event.target;

            if(elementClicked.className === 'male') {
                document.getElementById("names").innerHTML=fName[getRandomInt(2, sName.length-3)];
            }
        });

function getRandomInt(x,y) {
    return Math.floor(Math.random()*y)+x;
}

