//Pre-Condition
import '../../../../smoke/desktop/review_management/review_request/TC3001.cy';
import { desktopCommonObjects, reviewRequests } from '../../../../../support/pageObjects';
describe('[TC3005]',()=>{
    
    let tcCommonData;

    beforeEach(() => {
        cy.loginForDesktop();

        cy.fixture('desktop/common-data').then((data)=>{
          tcCommonData = data;
        });
    });
    
    it('Verify private review link of review request working correctly',()=>{
        //Step 1 : Visit the login page of obenan
        //Step 2 : Type correct email 
        //Step 3 : Type correct password
        //Step 4 : Click Remember me check box 
        //Step 5 : Click sign in
        //Step 6 : Click on Review managment 
        cy.visit(Cypress.env('baseURL'));
        reviewRequests.sidebarLinkReviewManagment().click();
        //Step 7 : Click on "Review Request"
        reviewRequests.sidebarChildLinkReviewRequest().click();
        //Step 8 : Verify dropdown
        desktopCommonObjects.locationSelectField(tcCommonData.param_review_request).click();
        desktopCommonObjects.locationSelectFieldFirstOption(tcCommonData.param_review_request).should('be.visible');
        //Step 9 : Verify Campaigns
        desktopCommonObjects.tableFirstRow(tcCommonData.param_review_request).should('be.visible').click({force : true});
        //Step 10 : Verify buttons
        //Step 11 : Click 3 dots in front of each campaign
        reviewRequests.editReviewRequestButton().should('exist').and('be.visible');
        reviewRequests.reviewRequestMoreButton().should('exist').and('be.visible').click({force : true});
        //Step 12 : Click private review
        reviewRequests.privateReviewButtonAfterMoreButton().click({force : true});
        //Step 13 : Verify review is present
        cy.contains(tcCommonData.email).filter(':visible').its('length').should('be.gt', 0);

    });

});