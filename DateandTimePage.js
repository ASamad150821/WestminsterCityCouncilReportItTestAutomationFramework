class DateandTimePage
{

    selectYes()
    {
        cy.get('#Yes').click();
    }

    selectNo()
    {
        cy.get('#No').click();
    }

    navigatetonextpage()
    {
        cy.get('#next-button').click();
    }


}

export default DateandTimePage