function out(any) {

    console.log(any + " Har typen " + typeof any)
}
out("15" > 5)
out("15" > "5")

const a1 = 5
const a2 = 15

if(a1 > a2){
    out("a1 er større end a2")
}else{
        out("a2 er større end a1")
}

let arr = [1, 2, 3]
out(arr)

arr.forEach(out)

let f

let g = null

let arr2 = [5, 5.5, "hej", 5>4, f, g, [1,"array2"], {"erik" : 5}, 0/0]
