import { desktopCommonObjects, reviewRequests } from "../../../../../support/pageObjects";

describe('[TC3009]',()=>{

    let tcCommonData;
    beforeEach(() => {
        cy.loginForDesktop();
        cy.fixture('desktop/common-data').then((data)=>{
            tcCommonData = data;
        });
    });

    it('Verify Campaign is created successfully via email (Send to Private Survey)',()=>{

        //Step 1 : Visit the login page of obenan
        //Step 2 : type email
        //Step 3 : type password
        //Step 4 : Click sign in
        cy.visit(Cypress.env('baseURL'));
        //Step 5 : click on reveiw managment
        reviewRequests.sidebarLinkReviewManagment().click();
        //Step 6 : click on review requests
        reviewRequests.sidebarChildLinkReviewRequest().click();
        //Step 7 : click on create new compaigns
        reviewRequests.createNewCompaignButton().click();
        //Step 8 : select location
        desktopCommonObjects.locationSelectField(tcCommonData.param_review_request_campaign).click().type(tcCommonData.locationExactMatch);
        desktopCommonObjects.locationSelectFieldFirstOption(tcCommonData.param_review_request_campaign).click(); 
        //Step 9 : click on checkbox send to Private Survey
        reviewRequests.reviewTypeCheckboxSendToPrivateSurvey().click();
        //Step 10 : Click Browse Image Button
        //Step 11 : Select Image
        reviewRequests.imageUploadAtCampaignsetup(tcCommonData.imagesPath + tcCommonData.accurateSpecsImageJPG);
        //Step 12 : Click "Ok"
        reviewRequests.imageUploadOkButtonAtCampaignsetup().click().wait(20000);
        //Step 13 : Click "pencil" or edit icon button
        reviewRequests.editHeadingAndDiscriptionButton().should('be.visible').click({force : true});
        //Step 14 : Type anything in heading or description
        reviewRequests.emailHeadingFieldAtCampaignsetup().click().type(tcCommonData.heading);
        reviewRequests.discriptionFieldAtCampaignSetup().click().type(tcCommonData.discription);
        //Step 15 : Click "Save" Button
        reviewRequests.saveButtonAtCampaignSetup().click();
        cy.contains(tcCommonData.heading).should('be.visible');
        cy.contains(tcCommonData.discription).should('be.visible');
        //Step 16 : click on next button
        reviewRequests.nextButtonAtCampaignsetup().click();
        //Step 17 : click on "Browse Image" button
        //Step 18 : Select Image and click open
        reviewRequests.imageUploadAtCampaignsetup(tcCommonData.imagesPath + tcCommonData.accurateSpecsImageJPG);
        //Step 19 : click on ok button
        reviewRequests.imageUploadOkButtonAtCampaignsetup().click().wait(20000);
        //Step 20 : Click on "pencil or edit icon" button
        reviewRequests.editHeadingAndDiscriptionButton().click();
        //Step 21 : type text in heading
        reviewRequests.emailHeadingFieldAtCampaignsetup().click().type(tcCommonData.heading);;
        //Step 22 : type discription
        reviewRequests.discriptionFieldAtCampaignSetup().click().type(tcCommonData.discription);
        //Step 23 : click on save button
        reviewRequests.saveButtonAtCampaignSetup().click();
        cy.contains(tcCommonData.heading).should('be.visible');
        cy.contains(tcCommonData.discription).should('be.visible');
        //Step 24 : click on next button
        reviewRequests.nextButtonAtCampaignsetup().click();
        //Step 25 : Type email in email field
        reviewRequests.emailFieldForSendingReviewRequest().click().type(tcCommonData.email);
        //Step 26 : Choose language as English
        //Step 27 : click on next button
        reviewRequests.nextButtonAtCampaignsetup().click();
        //Step 28 : Click on Start Campaign
        reviewRequests.startCampaignButton().click()
        //Step 29 : click on confirm button on popup
        desktopCommonObjects.popupConfirmButton().click();
        //Step 30 : Verify toast messeage
        reviewRequests.compaignCreatedSuccessToast().should('be.visible');

    })

});