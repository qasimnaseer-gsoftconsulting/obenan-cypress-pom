import { listings } from "../../../../../support/pageObjects";

describe('[TC2002]',()=>{
    it('Verify Google Conection Functionality is available and redirecting to google account login',()=>{
        //Pre-Condition : Newly created location exist and set to default or newly created location exist and id is larger than others or location is not connected with signed in google account
        //Step 1 : Visit login page 
        //Step 2 : Type email 
        //Step 3 : Type password
        //Step 4 : click on remeber me checkbox
        //Step 5 : click on sign in button
        //Step 6 : Verify homapage heading
        listings.loginForListings();
        //Step 7 : Verify Connect to Google button
        listings.verifyConnectToGoogleButton();
        //Step 8 : Click on connect to google button
        listings.clickOnConnectToGoogleButton();

        listings.verifyRedirectAfterClickOnConnectToGoogleButton();
    });
});