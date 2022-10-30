

describe("initial conditons", () => {

    beforeEach(() => {
        cy.visit("/");
        cy.server();
    })

    it("should have deafult data", () => {

        /*
        cy.route({
            method: "GET",
            url: "/api/tasks",
            status: 200,
            response: [
                {
                    id: 1,
                    taskName: "Shivam",
                    isCompleted: false,
                },
                {
                    id: 2,
                    taskName: "Singh",
                    isCompleted: false,
                },
                {
                    id: 3,
                    taskName: "Manish",
                    isCompleted: false,
                },
                {
                    id: 4,
                    taskName: "Gupta",
                    isCompleted: false,
                },
            ],
        })

        */
        
        cy.route("GET", "/api/tasks", "fixture:task");
        cy.get(".task-list li").should("have.length", 4);
        cy.get(".task-list li:first").should("contain", "Shivam");
        cy.get(".task-list").get("#task-3").should("contain", "Manish");
    })

})

