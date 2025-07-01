class LocationPage
{

    enterLocation(location)
    {
        cy.get('#map-search-input').type(location)
    }

    selectaddress()
    {
        cy.get('ul').contains('WESTMINSTER').click();
    }

    returnaddress()
    {
        cy.get('.font-normal').should('contain.text', 'WESTMINSTER');

    }

    navigatetonextpage()
    {
        cy.get('#next-button').click();
    }



}

export default LocationPage