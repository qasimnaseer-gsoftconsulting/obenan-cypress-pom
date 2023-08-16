import { listings } from "../../../../../support/pageObjects";

describe('[TC2001]',()=>{
    it('Test the working of Listing Technology',()=>{
        //Step 1 : Visit login page
        //Step 2 : Type email 
        //Step 3 : Type password
        //Step 4 : click on remeber me checkbox 
        //Step 5 : click on sign in button
        //Step 6 : Verify homapage heading
        listings.loginForListings();
    });
});