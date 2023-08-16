import { listings } from "../../../../../support/pageObjects";

describe('[TC2006]',()=>{
    it('Verify add location button when dont have any location in application',()=>{
        //Pre-Conditions : no location added in application
        //Step 1 : Visit login page
        //Step 2 : Type email 
        //Step 3 : Type password
        //Step 4 : click on remeber me checkbox 
        //Step 5 : click on sign in button
        //Step 6 : Verify homapage heading
        listings.loginForListings();
        //Step 7 : Verify Add location button
        listings.verifyAddLocationButton();
        //Step 8 :  click on add location button
        listings.clickOnAddLocationButtonForListings();
    });
});