/*
the code I used to 
scrape the data from the internet,
not the best method...
*/

const rp = require('request-promise');
const $ = require('cheerio');





let x = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

for(let i =0; i < x.length; i++) {
    
    url = 'https://www.mithrilandmages.com/utilities/MedievalBrowse.php?letter=' + x[i] + '&fms=F';
    //console.log(url);
    rp(url).then(function(html) { 
        
        for (let j = 0; j < $('br', html).length; j++) {
            //success!
            fName.push($('br', html)[j].prev.data);
        }
        fs.writeFile("/Users/samadlin/Desktop/WebsiteBuilding/medievalNameGenerator/femaleNames",  fName,  function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
        //console.log('female:', fName[getRandomInt(2, fName.length-3)]);
           
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
        fs.writeFile("/Users/samadlin/Desktop/WebsiteBuilding/medievalNameGenerator/maleNames", mName,  function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
        //console.log('male:', mName[getRandomInt(2, mName.length-3)]);   
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
        fs.writeFile("/Users/samadlin/Desktop/WebsiteBuilding/medievalNameGenerator/names", sName, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
        //console.log('surname:', sName[getRandomInt(2, sName.length-3)]);   
    })
    .catch(function(err) {
        //handle error!
    })  
    
}
function getRandomInt(y) {
    return Math.floor(Math.random()*y);
}


