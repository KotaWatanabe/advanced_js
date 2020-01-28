//Log all paris of array

const boxes = [1,2,3,4,5]

for(let i = 0; i<boxes.length; i++) {
    for(let j = 0; j<boxes.length; j++) {
        if(i !== j) {
            console.log(boxes[i],boxes[j])
        }
    }
}

//O(n^2) Quadric time
