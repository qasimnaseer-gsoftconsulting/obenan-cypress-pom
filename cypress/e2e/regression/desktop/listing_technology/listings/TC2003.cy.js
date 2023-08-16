import { listings } from "../../../../../support/pageObjects";

describe('[TC2003]',()=>{
    it('Verify connected location displaying comapny details, contact details, can we edit them',()=>{
        //Pre-Condition : Location is set to default and connected with signed in google account or id of location is greater and connected to google
        //Step 1 : Visit login page
        //Step 2 : Type email 
        //Step 3 : Type password
        //Step 4 : click on remeber me checkbox 
        //Step 5 : click on sign in button
        //Step 6 : Verify homapage heading
        listings.loginForListings();
        //Step 7 : click on location details tab
        listings.clickOnLocationDetailsTab();
        //Step 8 : Check availability of results tab
        listings.clickResultTab();
        listings.clickOnLocationDetailsTab();//precondtion
        //Step 9 : Verify Company details tab available in location details tab
        listings.verifyCompanyDetailsBlockByHeading();
    })
});