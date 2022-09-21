//here we take object

const obj={
        name:'Muktarul hoque',
        age:20,
        vill:'alampur'

}

for(const key of Object.keys(obj)){
    console.log(key) // it will print the keys only
    console.log(obj[key]) // it will print the key value
    console.log(`The key is ${key} and the value is${obj[key]}`) // it will print the key value
}


