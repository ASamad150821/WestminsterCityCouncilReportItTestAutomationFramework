class YourDetailsPage
{

    selectYes()
    {
        cy.get('#Yes').click();
    }

    navigatetonextpage()
    {
        cy.get('#next-button').click();
    }

    enterFirstName(firstname)
    {
        cy.get("input[name='firstName']").type(firstname)
    }

    enterLastName(lastname)
    {
        cy.get("input[name='lastName']").type(lastname)
    }

    enterEmail(email)
    {
        cy.get("input[name='email']").type(email)
    }

    enterPhoneNumber(phonenumber)
    {
        cy.get("input[name='phoneNumber']").type(phonenumber)
    }

    enterDetails()
    {
        cy.fixture('yourdetails').then((data) => {
            this.enterFirstName(data.firstName);
            this.enterLastName(data.lastName);
            this.enterEmail(data.email);
            this.enterPhoneNumber(data.phoneNumber);
        });
        
    }

}

export default YourDetailsPage
