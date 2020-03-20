describe('safety tips component', function () {
    it('It checks that the safety tips component renders', function () {
        cy.visit('https://gifted-shirley-d83416.netlify.com/safetytips');

        //checks that its the correct url
        cy.url()
            .should('include', '/safetytips')
    })
})