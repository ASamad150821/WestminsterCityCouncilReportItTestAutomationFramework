class ConfirmationPage
{

    ConfirmationMessage()
    {
        cy.get('.text-h2') ;
    }


    VerifyConfirmationMessage()
    {
        cy.get('.text-h2').should('contain.text', 'CAS') ;
    }

    PrintConfirmationMessage()
    {

        cy.get('.text-h2').first().then((message) => {
            const messageText = message.text();
            cy.log('Confirmation message: ' + messageText);
            console.log('Confirmation message:', messageText); 
        });

    }

}

export default ConfirmationPage