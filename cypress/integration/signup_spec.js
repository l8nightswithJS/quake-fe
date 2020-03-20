describe('Sign up', function () {
    it('Gets, signup and signs up', function () {
        cy.visit('https://gifted-shirley-d83416.netlify.com/');

        //clicks the sign up link
        cy.contains("Sign up").click()

        //checks that the url has /signup at the end 
        cy.url()
            .should('include', '/signup')


        //actually fills out the sign up form 
        cy.get('form').within(() => {
            cy.get('input[name=firstName]').type('trent')
            cy.get('input[name=lastName]').type('barns')
            cy.get('input[name=email]').type('trentbarns@yahoo.com')
            cy.get('input[name=username]').type('tbarns23')
            cy.get('input[name=password]').type('tbarnsalot23')
            cy.get('input[name=phone]').type('6542892456')
        })
        //clicks the sign up button
        cy.get('.signup-button').click()

    })
});