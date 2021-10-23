
function test(description, fun) {
    console.log(description);
    fun();
}


function expect(recieved) {

    function toBe(actual) {
        if (recieved === actual) {
            console.log("Status:- Test Passed");
        } else {
            console.log("Status:- Test Failed");
            console.log('recieved:', recieved);
            console.log('actual:', actual);
        }
    }

    return { toBe }
}


// test("Message:- Add 1 and 2, Sum should be 3", () => {
//     expect(1 + 2).toBe(3)
// })

const sum = (a, b) => { return a + b };
const absDiff = (a, b) => { return Math.abs(a - b) };

test("Message:- Sum 5 and 4 should be 9", () => {
    expect(sum(5, 4)).toBe(9)
})

test("Message:- absDiff 4 - 9 should be 5", () => {
    expect(absDiff(4, 9)).toBe(5)
})