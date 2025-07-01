class IssuesPage
{

    selectIssueType(issuetype)
    {
        cy.get("#" + issuetype).click();
    }


    selectMarketIssue()
    {
        cy.get("#Market").click();
    }

    entercomments(message)
    {
        cy.get('textarea').type(message);
    }

    navigatetonextpage()
    {
        cy.get('#next-button').click();
    }

    displayerrormessage()
    {
        cy.get(".text-body li a").then((message) => 
        {
            const messageText = message.text();
            cy.log('Error message: ' + messageText);
        })
    }

    enterlongmessage()
    {
        cy.get('textarea')
        .type('123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901');
    }



}

export default IssuesPage;