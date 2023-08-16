import { listings } from "../../../../../support/pageObjects";

describe('[TC2005]',()=>{
    let tc2005Data; // tc1001Data variable outside the hooks
  
    beforeEach(() => {
      // Runs before each test in the describe block
      cy.fixture('desktop/Listings/listings').then((data) => {
        tc2005Data = data.smoke[0].desktop[0].listings[0].TC2005[0];
      });
    });
    it('Verify Listing account location search field available and locations are displaying',()=>{
        //Pre-Conditions : locations have to added
        //Step 1 : Visit login page
        //Step 2 : Type email 
        //Step 3 : Type password
        //Step 4 : click on remeber me checkbox 
        //Step 5 : click on sign in button
        //Step 6 : Verify homapage heading
        listings.loginForListings();
        //Step 7 : Verify account location field available
        listings.verifyLocationInputField();
        //Step 8 : Verify added locations at bottom of account field
        listings.vefiyLocationIsAvailable(tc2005Data.locationMatch);
    });
});