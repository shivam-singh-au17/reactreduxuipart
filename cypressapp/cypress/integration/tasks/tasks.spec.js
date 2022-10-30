
describe("testing tasks applications", () => {

    beforeEach(() => {
        cy.visit("/");
    })

    it("is page loading", () => {
    })

    it("is input focased", () => {
        cy.get('.task-input').focused();
    })

    //  only run one test case

    // it.only("is input focased", () => {
    //     cy.get('.task-input').focus();
    // })

})


describe("testing tasks applications with moke server", () => {

    beforeEach(() => {
        cy.visit("/");
        cy.server();
    })

    it("is input changeable", () => {
        let value = "Shivam Singh"
        cy.route({
            method: "POST",
            url: "/api/task",
            status: 200,
            response: {
                id: 1,
                taskName: value,
                isCompleted: false,
            }
        })
        cy.get('.task-input').type(value).type("{enter}");
    })

    it.only("should add task and validate if added successfuly", () => {
        let value = "Saurabh Singh"
        cy.route({
            method: "POST",
            url: "/api/task",
            status: 200,
            response: {
                id: 1,
                taskName: value,
                isCompleted: false,
            }
        })
        cy.route({
            method: "GET",
            url: "/api/task",
            status: 500,
            response: {}
        })

        cy.get('.task-input').type(value).type("{enter}");
        cy.get('#error-id').should("be.visible");
        cy.get(".task-list li").should("have.length", 1);
        cy.get(".task-list li").should("contain", value);
    })

    it.only("should add task and validate", () => {
        let value = "Saurabh Singh"
        cy.route("GET", "/api/tasks", "fixture:task");
        cy.route({
            method: "POST",
            url: "/api/task",
            status: 200,
            response: {
                id: 1,
                taskName: value,
                isCompleted: false,
            }
        })


        cy.get('.task-input').type(value).type("{enter}");
        cy.get('.task-input').should("have.attr", "placeholder", "Add something?");
        cy.get('#error-id').should("not.exist");
        cy.get(".task-list li").should("have.length", 5);
        cy.get(".task-list li").should("contain", value);
    })

})


