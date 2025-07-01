import Homepage from '../../pages/Homepage.js'
import UploadPhotosPage from '../../pages/UploadPhotosPage.js';
import IssuesPage from '../../pages/IssuesPage.js';
import Utilities from '../../pages/Utilities.js';

describe('Issue Details Validation Empty Message', () => {
  
  beforeEach('Use of a utilities class to open a new form before running each test', () => {
    const utilites = new Utilities();
    utilites.openanewform();
  })
  
  it('tests that a user cannot submit a report if they do not enter details of the issue', () => {
  
      const uploadphotospage = new UploadPhotosPage();
      uploadphotospage.navigatetonextpage();
  
      const issuespage = new IssuesPage();
      issuespage.selectMarketIssue();
      issuespage.navigatetonextpage();
      issuespage.displayerrormessage();
  
    })
  

    it('tests that a user cannot submit a report if they enter a message above the character limit of 500 characters', () => {
  
      const uploadphotospage = new UploadPhotosPage();
      uploadphotospage.navigatetonextpage();
  
      const issuespage = new IssuesPage();
      issuespage.selectMarketIssue();
      issuespage.navigatetonextpage();
      issuespage.enterlongmessage();
      issuespage.navigatetonextpage();
      issuespage.displayerrormessage();
  
  
    })
  
    
  })