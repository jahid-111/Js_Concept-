// console.log("here")
// ===============     undefined 
function chkUndCond (a,b) {
    if (a < 0 || b < 0 ) {
        return "out"
    }
    return a+b;
}

// console.log(chkUndCond(4,-5))








// ==================== Boolean 
let x = true;
    if (!!x){
        // console.log("X is ---TRUE")
    } else {
        // console.log('X is ---FALSE ')
    }

    // ===========type == / === 




    const a = 0;
    const b = "0";

    if (a === b ){
        // console.log(true)
    } else {
        // console.log(false)
    }

    // == eq are compare only what fouund 
    // ===  eq are compare inside variable and type of all about
    // non-premetive Data are not anwoed here


    const firstArr = [1,2,3,4,55]
    const secondtArr = [1,2,3,4,5523]


    function compArry(one, two) {
        if (one.length !== two.length) {
            return "Not Same";
        }
    
        for (let i = 0; i < one.length; i++) {
            if (one[i] !== two[i]) {
                console.log(one[i], two[i])
                return false;
            }
        }
    
        return true;
    }

    
    // const result = compArry(firstArr, secondtArr);
    // console.log(result); 
    
// HOISTING 
    for (var i = 0 ; i < 5; i++) {
    // console.log(i)
    }
    // console.log('out;', i)

    function closure() {
        let count = 0;
        return function() {
            count++;
            return count;
        }
    }
    
    const one = closure();
    // console.log(one);
    


    function callBackFinall(hello, name){
        hello(name)
    }

    const forOne = "hello...!!!"
    
    
    function callBackOne(name) {
        console.log('good Morning', name)
    }
    callBackFinall(callBackOne, "Jahid")