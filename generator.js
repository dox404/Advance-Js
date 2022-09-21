function* generatorFunc(){
    yield "Muktarul Hoque"
    yield "Mani"
    yield 45
}


const generator=generatorFunc()
console.log(generator.next())// it will print the first yield value
console.log(generator.next())// it will print the 2nd yield value (if i want to print the value of the object then i have to write .value method)
console.log(generator.next())// it will print the 3rd yield value

// generator function always return an object