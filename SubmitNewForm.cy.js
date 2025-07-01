import Homepage from '../../pages/Homepage.js'
import UploadPhotosPage from '../../pages/UploadPhotosPage.js';
import IssuesPage from '../../pages/IssuesPage.js';
import DateandTimePage from '../../pages/DateandTimePage.js';
import LocationPage from '../../pages/LocationPage.js';
import YourDetailsPage from '../../pages/YourDetailsPage.js' ;
import ConfirmationPage from '../../pages/ConfirmationPage.js';
import Utilities from '../../pages/Utilities.js';


describe('Submit successful report', () => {

  beforeEach('Use of a utilities class to open a new form before running each test', () => {

    const utilites = new Utilities();
    utilites.openanewform();

  })

  it('tests that a user can successfully submit a new form', () => {

    const uploadphotospage = new UploadPhotosPage();
    uploadphotospage.navigatetonextpage();

    const issuespage = new IssuesPage();
    issuespage.selectIssueType('Market') ;
    issuespage.entercomments('test');
    issuespage.navigatetonextpage();

    const dtp = new DateandTimePage();
    dtp.selectYes();
    dtp.navigatetonextpage();

    const l = new LocationPage();
    l.enterLocation('westminster');
    l.selectaddress();
    l.returnaddress();
    l.navigatetonextpage();

    const ydp = new YourDetailsPage();
    ydp.selectYes();
    ydp.navigatetonextpage();
    ydp.selectYes();
    ydp.navigatetonextpage();
    ydp.enterDetails();
    ydp.navigatetonextpage();

    const cp = new ConfirmationPage();
    cp.VerifyConfirmationMessage();
    cp.PrintConfirmationMessage();



  })

  
})

