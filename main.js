 function solution(j){
   var dict={} 
    
    for(let i=0;i<j;i++){
    var key = prompt('enter date in yyyy-mm-dd format');
    var value = prompt('enter value');
    
    dict[key] = value;
    }
    for(var key in dict) {
   console.log(key + " : " + dict[key]);
}

var dayDict = {"Sun":null,"Mon":null,"Tue":null,"Wed":null,"Thu":null,"Fri":null, "Sat":null}
var dictKeys = Object.keys(dict)
for(let i=0;i<k;i++){
        var date = new Date(dictKeys[i]);
        var day = date.getDay();
        let dayname
    switch(day){
        case 0: dayname = 'Sun';
        break;
        case 1: dayname ='Mon';
        break;
        case 2: dayname ='Tue';
        break;
        case 3: dayname ='Wed';
        break;
        case 4: dayname ='Thu';
        break;
        case 5: dayname ='Fri';
        break;
        case 6: dayname ='Sat';
    }
    dayDict[dayname] = dict[dictKeys[i]];
    
}

  
 if(dayDict["Sun"]==null){
     dayDict["Sun"]=(Number(dayDict["Sat"])+Number(dayDict["Mon"]))/2;
 }
 
 if(dayDict["Mon"]==null){
     dayDict["Mon"]=(Number(dayDict["Sun"])+Number(dayDict["Tue"]))/2;
 }
 
 if(dayDict["Tue"]==null){
     dayDict["Tue"]=(Number(dayDict["Mon"])+Number(dayDict["Wed"]))/2;
    
 }
 
 if(dayDict["Wed"]==null){
     dayDict["Wed"]=(Number(dayDict["Tue"])+Number(dayDict["Thu"]))/2;
 }
 
 if(dayDict["Thu"]==null){
     dayDict["Thu"]=(Number(dayDict["Wed"])+Number(dayDict["Fri"]))/2;
 }
 
 if(dayDict["Fri"]==null){
     dayDict["Fri"]=(Number(dayDict["Thu"])+Number(dayDict["Sat"]))/2;
 }
 
 if(dayDict["Sat"]==null){
     dayDict["Sat"]=(Number(dayDict["Fri"])+Number(dayDict["Sun"]))/2;
 }

 for(var key in dayDict) {
     console.log(key + " : " + dayDict[key]);}
}


var k = prompt("enter the size of dictionary");
solution(k)