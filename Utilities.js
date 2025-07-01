class Utilities{

    openanewform()
    {

        cy.visit('https://mywestminster-nprod.westminster.gov.uk/report-it/street-vendors');
        cy.get('button').contains('cookies').click();
        cy.get('.flex h2').contains('new').click();


    }


}

export default Utilities