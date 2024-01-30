function oddNumber(){
    const arr = [1, 3, 4, 8];
    let oddArr= [];
    //console.log(arr)
    return new Promise((resolve, reject)=>{
        for(let i=0; i<arr.length; i++){
            if(arr[i] % 2 != 0){
                oddArr.push(arr[i])
            }
        }
        setTimeout(()=>{
            //console.log(new Date)
            document.querySelector("#output").innerText=oddArr;
            resolve(arr)
        }, 1000)
    });
}
function multiplyEven(arr){
    let evenArr= [];
    return new Promise((resolve, reject)=>{
        for(let i=0; i<arr.length; i++){
            if(arr[i] % 2 === 0){
                evenArr.push(arr[i]);
            }
        }
        setTimeout(()=>{
            //console.log(new Date)
            document.querySelector("#output").innerText=evenArr;
            resolve(evenArr)
        }, 2000)

    })
}

oddNumber()
    .then((arr)=>{
        return multiplyEven(arr)
    })
    .then((evenArr)=>{
        //console.log(new Date)
    })
    .catch((err)=>{
        console.log(err)
    })

