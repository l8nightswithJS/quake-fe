describe('Log in', function () {
    it('Gets, login and logs in', function () {
        cy.visit('https://gifted-shirley-d83416.netlify.com/');

        //checks that its the correct url
        cy.url()
            .should('include', '/')

        //enters user info to login
        cy.get('.form').within(() => {
            cy.get('input[name=username]').type('tbarns23')
            cy.get('input[name=password]').type('tbarnsalot23')
        })

        //clicks the login button
        cy.get('.login-button').click()



    })
});