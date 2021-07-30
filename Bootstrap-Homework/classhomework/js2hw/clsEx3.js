var a = [1,2,2,3,3,4,5,6,]

function dubplicateFinder(a){
 let counts = {}
 let result = [];

 for(let i =0; i < a.length; i++){ 
     if (counts[a[i]]){
     counts[a[i]] += 1
     } else {
     counts[a[i]] = 1
     }
    }  
    for (let prop in counts){
        if (counts[prop] >= 2){
            result.push(prop)
        }
    }

    return result;
  
}

dubplicateFinder(a)