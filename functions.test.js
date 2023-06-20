const {
    returnTwo,
    greeting,
    add,
    multiply,
    divide,
    subtract
} = require('./functions.js')

test('returnTwo output equal 2', () => {
    expect(returnTwo()).toEqual(2)
  })

  describe('Test for Greeting Function', () =>{
    test('Does greeting return name', ()=>{
        expect(greeting('James')).toEqual('Hello, James')
    })
    test('Does greeting return name', ()=>{
        expect(greeting('Jill')).toEqual('Hello, Jill')
    })
  })

  describe('Test for Math Functions', ()=>{
    test('Does add function return sum', ()=>{
        expect(add(1,2)).toEqual(3)
    })
    test('Does add function return sum', ()=>{
        expect(add(5,9)).toEqual(14)
    })
    test('Does multipy function return correct answer', ()=>{
        expect(multiply(5,5)).toEqual(25)
    })
    test('Does divide function return correct answer', ()=>{
        expect(divide(50,10)).toEqual(5)
    })
    test('Does subtract function return correct answer', ()=>{
        expect(subtract(12,6)).toEqual(6)
    })
  })