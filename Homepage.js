class Homepage {
   
    visit() 
    {
      cy.visit('https://mywestminster-nprod.westminster.gov.uk/report-it/street-vendors');
    }

    acceptcookies()
    {
        cy.get('button').contains('cookies').click();
    }

    opennewform()
    {
        cy.get('.flex h2').contains('new').click();
    }

    

  }
  
  export default Homepage;