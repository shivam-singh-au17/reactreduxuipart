var { sum, diff ,sqr} = require("../index.js");


/*
// SOME ,ORE FUNCTIONS:-

1:- .toBeNull

*/


describe("test case inside __tests__ for sum function", function () {

    test('should sum function defined', () => {
        expect(sum).toBeDefined()
    })

    test('should sum 1,2 == 3', () => {
        expect(sum(1, 2)).toBe(3)
    })

    test('should diff function defined', () => {
        expect(diff).toBeDefined()
    })

    test('should diff 2,1 == 1', () => {
        expect(diff(2, 1)).toBe(1)
    })

    test('should sqr function Undefined', () => {
        expect(sqr).toBeUndefined()
    })

    let a = null;
    test('should be null', () => {
        expect(a).toBeNull()
    })

})



describe("test case for toBe", function () {

    test('should toBe number', () => {
        // === or triple equal to
        expect(10).toBe(10)
    })
    test('should toBe boolean', () => {
        // === or triple equal to
        expect(false).toBe(false)
    })
    test('should toBe boolean', () => {
        // === or triple equal to
        expect(true).toBeTruthy()
    })
    test('should toBe boolean', () => {
        // === or triple equal to
        expect(false).toBeFalsy()
    })
    test('should toBe boolean', () => {
        // === or triple equal to
        expect(5).not.toBeNaN()
    })
    test('should toBe boolean', () => {
        // === or triple equal to
        expect(NaN).toBeNaN()
    })
    test('should toBe object {} !== {}', () => {
        // === or triple equal to
        expect({}).not.toBe({})
    })
    test('should toBe object a === a', () => {
        // === or triple equal to
        var a = {}
        expect(a).toBe(a)
    })
    test('should toBe array [] !== []', () => {
        // === or triple equal to
        expect([]).not.toBe([])
    })
})


describe("test case toEqual for Array", () => {

    test('should array [] isEqual to []', () => {
        expect([]).toEqual([])
    })
    test('should array [1, 2] isEqual to [1, 2]', () => {
        expect([1, 2]).toEqual([1, 2])
    })
    test('should array a = [1, 2] isEqual to b = [1, 2]', () => {
        var a = [1, 2], b = [1, 2]
        expect(a).toEqual(b)
    })
    test('should array a = [1, 2, 3] isEqual contains to b = [1, 2]', () => {
        var a = [1, 2, 3], b = [1, 2]
        expect(a).toEqual(expect.arrayContaining(b))
    })
    test('should array a = [1, 2] not isEqual contains to b = [1, 2, 3]', () => {
        var a = [1, 2], b = [1, 2, 3]
        expect(a).not.toEqual(expect.arrayContaining(b))
    })

})


describe("test case toEqual for Objects", () => {

    test('Objects check 1', () => {
        expect({ a: 1 }).toEqual({ a: 1 })
    })

    test('User name and Email check', () => {
        let obj = { username: "shivam", email: "shivamsingh@gmail.com" }
        let out = { username: expect.any(String), email: expect.stringContaining("@gmail.com") }
        expect(obj).toEqual(out)
    })

    test('Username contains masai', () => {
        let username = ['masai', 'admin', 'school']
        expect(username).toContain('masai')
    })

})


describe("test case for relational checks", () => {

    test('should 100 + 200 <= 300', () => {
        var num1 = 100;
        var num2 = 200;
        expect(num1 + num2).toBeLessThanOrEqual(300)
    })

    test('should 100 + 200 == 300', () => {
        var num1 = 100;
        var num2 = 200;
        expect(num1 + num2).toEqual(300)
    })

    test('should 100 + 100 < 300', () => {
        var num1 = 100;
        var num2 = 100;
        expect(num1 + num2).toBeLessThan(300)
    })

    test('should 200 + 200 > 300', () => {
        var num1 = 200;
        var num2 = 200;
        expect(num1 + num2).toBeGreaterThan(300)
    })

    test('should 200 + 200 >= 400', () => {
        var num1 = 200;
        var num2 = 200;
        expect(num1 + num2).toBeGreaterThanOrEqual(400)
    })

})