describe('map component', function () {
    it('It checks that the map component renders', function () {
        cy.visit('https://gifted-shirley-d83416.netlify.com/map');

        //checks that its the correct url
        cy.url()
            .should('include', '/map')
    })
})