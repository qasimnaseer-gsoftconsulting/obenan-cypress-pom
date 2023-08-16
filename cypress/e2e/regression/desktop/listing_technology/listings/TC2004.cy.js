import { listings } from "../../../../../support/pageObjects";

describe('[TC2004]',()=>{
    it('Verify sync and fetch functionalities are available or not',()=>{
        //Pre-Condition : locations have to added
        //Step 1 : Visit login page 
        //Step 2 : Type email 
        //Step 3 : Type password
        //Step 4 : click on remeber me checkbox 
        //Step 5 : click on sign in button
        //Step 6 : Verify homapage heading
        listings.loginForListings();
        //Step 7 : Verify auto sync checkbox is available or not
        listings.verfiyAutoSyncCheckbox();
        //Step 8 : verify sync now button is available or not
        listings.verifySyncNowButton();
        //Step 9 : click on 3 dots 
        //Step 10 : Verify fetching link
        listings.verifyMoreButtonForFethcingData();
    });
});