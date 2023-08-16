import { addLocations } from "../../../../../support/pageObjects";

describe('[TC6001]',()=>{
    
    let tcCommonData;
    let tc6001Data;

    before(() => {
      cy.loginForDesktop();
      cy.fixture('desktop/common-data').then((data)=>{
        tcCommonData = data;
      });
      
      cy.fixture('desktop/manage_locations/manage-locations').then((data) => {
        tc6001Data = data.smoke[0].desktop[0].TC6001[0];
      });
    });

    it('Verify "location" is added sucessfully or not',()=>{
        
        //Step 1 : Visit login page
        //Step 2 : Type correct email 
        //Step 3 : Type correct password
        //Step 4 : Click Remember me check box 
        //Step 5 : Click sign in
        cy.visit(Cypress.env('baseURL'));
        //Step 6 : Click on drop down manage location in sidebar
        addLocations.sidebarLinkManageLocations().click();
        //Step 7 : Click "Add Location" sidebar child link
        addLocations.sidebarChildLinkAddLocation().click();
        //Step 8 : Now type location in setup location  such as "Johar Town" and select your desired location
        addLocations.locationSelectFieldAtAddLocationsPage()
        .eq(0)
        .click()
        .type(tc6001Data.locationName)
        .wait(8000);
        
        cy.get('#react-select-2-option-0').click().wait(3000);

        //Step 9 : Type valid postal code
        addLocations.postalCodeField().click().type(tc6001Data.postalCode);
        //Step 10 : Click "Add Location" button
        addLocations.addLocationButton().click().wait(1000);
        //Step 11 : Verify Toast message
        addLocations.locationAddedSuccessToast().should('be.visible').wait(5000);
        //Step 12 : Click "cancel" button
        addLocations.cancelButtonAtAddLocations().click().wait(4000);

        //====================== Post Condition ==========================//

        //click on more location button and then delete location
        addLocations.locationMoreButton().click();
        addLocations.deleteLocationButton().eq(0).click({force : true});
        addLocations.popupConfirmButton().click();
        cy.contains('Location deleted successfully').should('be.visible')

    })
})