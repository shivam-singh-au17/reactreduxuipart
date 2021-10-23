
describe("testing tasks applications", () => {
    
    it("is page loading", () => {
        cy.visit("http://localhost:3000")
    })

    it("is input focased", () => {
        cy.visit("http://localhost:3000");
        cy.get('input').focused();
        cy.get('.task-input').focused();
    })

    it("is input changeable", () => {
        cy.visit("http://localhost:3000");
        cy.get('input').focused();
        cy.get('.task-input').type("shivam").type("{enter}");
    })
})