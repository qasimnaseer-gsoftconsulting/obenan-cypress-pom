import { autoGooglePosts } from "../../../../../support/pageObjects";

describe('[TC1007]', () => {
    let tcCommonData;

    beforeEach(() => {
      cy.loginForDesktop();
      cy.fixture('desktop/common-data').then((data)=>{
        tcCommonData = data;
      });
    });

    it(' Post Creation(Check upload button disabllity when image upload with less width specs on 2nd prompt,image error message,delete image button, prompt title and closing 2nd prompt by cross and cancel button)', () => {
       
      cy.visit(Cypress.env('baseURL'));
      let ImagesPath = tcCommonData.ImagesPath;
      //Step 1 : Visit login page
      //Step 2 : Type email 
      //Step 3 : Type password
      //Step 4 : click on remeber me checkbox 
      //Step 5 : Click on sign in button
      //Step 6 : click on post managment sidebar link
      autoGooglePosts.sidebarClickPostManagement();
      //Step 7 : click on auto google post dropdown link
      autoGooglePosts.sidebarClickAutoGooglePost();

        //Step 8 : click on create post button
        autoGooglePosts.clickCreatePostButton();
        
        //Step 9 : upload image according to sample data
        autoGooglePosts.postCreationUploadImage(ImagesPath+tcCommonData.less_widthPNG);
        autoGooglePosts.checkImageUploadedNameOnPopup(tcCommonData.less_widthPNG);
        autoGooglePosts.postCreationPopupUploadBtn().should('have.attr', 'disabled');//Assertion

        //Step 11 : Verify image error message
        autoGooglePosts.imageUploadErrorMsg().should('be.visible').should('have.length',1);

        //Step 12 : Verify prompt title
        autoGooglePosts.postCreationVerifyPopupTitle(tcCommonData.popupTitle);
        
        //Step 13 : Verify image appear in prompt
        autoGooglePosts.verifyImageDisplayingOnPopup(tcCommonData.less_widthPNG);

        //Step 14 : Click on delete button
        autoGooglePosts.imageDeleteButtonAtUploadPopup(tcCommonData.less_widthPNG).click();
        autoGooglePosts.postCreationVerifyPopupTitle(tcCommonData.popupTitle);

        //Step 15 : upload image according to sample data
        autoGooglePosts.postCreationUploadImage(ImagesPath+tcCommonData.less_widthPNG);
        autoGooglePosts.checkImageUploadedNameOnPopup(tcCommonData.less_widthPNG);

        //Step 16 : Verify image error message
        autoGooglePosts.imageUploadErrorMsg().should('be.visible').should('have.length',1);
        autoGooglePosts.imageDeleteButtonAtUploadPopup(tcCommonData.less_widthPNG).should('be.visible').should('have.length',1);

        //Step 17 : verify delete button is available
        autoGooglePosts.imageDeleteButtonAtUploadPopup(tcCommonData.less_widthPNG).should('be.visible').should('have.length',1);

        //Step 18 : verify upload button is disabled
        autoGooglePosts.postCreationPopupUploadBtn().should('have.attr', 'disabled');//Assertion

        //Step 19 : click on cancel button
        autoGooglePosts.postCreationPopupCancelButton().click()

        //Step 20 : click on create post button
        autoGooglePosts.clickCreatePostButton();

        //Step 21 : upload image according to sample data
        autoGooglePosts.postCreationUploadImage(ImagesPath+tcCommonData.less_widthPNG);
        autoGooglePosts.checkImageUploadedNameOnPopup(tcCommonData.less_widthPNG);

        //Step 22 : Verify image error message
        autoGooglePosts.imageUploadErrorMsg().should('have.length',1);

        //Step 23 : verify delete button is available
        autoGooglePosts.imageDeleteButtonAtUploadPopup(tcCommonData.less_widthPNG).should('be.visible').should('have.length',1);

        //Step 24 : verify upload button is disabled
        autoGooglePosts.postCreationPopupUploadBtn().should('have.attr', 'disabled');//Assertion

        //Step 25 : Click cross icon
        autoGooglePosts.popupCrossIcon().should('be.visible').click();

        //Step 26 : click on create post button
        autoGooglePosts.clickCreatePostButton();

        //Step 27 : upload image according to sample data
        autoGooglePosts.postCreationUploadImage(ImagesPath+tcCommonData.accurateSpecsImage);
        autoGooglePosts.postCreationPopupUploadBtn().click();
        autoGooglePosts.imageUploadeSuccessMsg().should('be.visible').should('have.length',1);
        autoGooglePosts.popupSubmitButton().should('be.visible').click();
        autoGooglePosts.imageAvailableInForm().should('exist').should('be.visible');
                
        //Step 28 : select location according to sample data
        autoGooglePosts.postCreationFormLocationField().type(tcCommonData.locationExactMatch)
        autoGooglePosts.locationOption().should('be.visible',tcCommonData.locationExactMatch).click();
        autoGooglePosts.postCreationFormLocationField().click();

        //Step 29 : select date time
        autoGooglePosts.currentDateTimeBtn().click();

        //Step 30 : write discription in discription field 
        autoGooglePosts.postCreationFormDiscriptionFieldType();

        //Step 31 : click on publish post
        autoGooglePosts.publishPostButton().click();
        autoGooglePosts.postPublishSuccessToast().should('be.visible');
        cy.wait(3000);
        //pre condition 
        autoGooglePosts.postCreationCronJobNetworkCall(tcCommonData.locationID);
        
        //Step refactored : click on processed tab post
        autoGooglePosts.processedTabAtPost().click();

        //Step 32 : verify image in created post
        autoGooglePosts.postContainerImage().eq(0).should('be.visible');
        autoGooglePosts.postContainerPostStatus().eq(0).should('exist').should('be.visible');


        // ================================ Post Condition =========================== 

        //Step 33 : Click on more button
        autoGooglePosts.postContainerMoreButton().eq(0).should('be.visible').click();

        //Step 34 : Click on delete button
        autoGooglePosts.postContainerDeleteButton().should('be.visible').click();

        //Step 35 : Click on confirm button
        autoGooglePosts.postContainerPopupConfirmBtn().click({force : true });
        autoGooglePosts.postDeletedToastMsg().should('be.visible'); 

    });


});