import { autoGooglePosts } from "../../../../../support/pageObjects";

describe('[TC1005]', () => {

    let tcCommonData;

    beforeEach(() => {
      cy.loginForDesktop();
      // Runs before each test in the describe block
      cy.fixture('desktop/common-data').then((data)=>{
        tcCommonData = data;
      });
    });

    it('Title : Post Creation(Create a post according to sample data )', () => {
        let ImagesPath = "./images/";
        //Step 1 : Visit login page
        //Step 2 : Type email 
        //Step 3 : Type password
        //Step 4 : click on remeber me checkbox 
        //Step 5 : Click on sign in button 
        //Step 6 : click on post managment sidebar link
        //Step 7 : click on auto google post dropdown link
        cy.visit(Cypress.env('baseURL'));
        autoGooglePosts.sidebarClickPostManagement();
        autoGooglePosts.sidebarClickAutoGooglePost();

        //Step 8 : click on create post button
        autoGooglePosts.clickCreatePostButton();

        //Step 9 : Verify dialog box title
        autoGooglePosts.postCreationVerifyPopupTitle(tcCommonData.popupTitle);

        //Step 10 : upload image according to sample data
        autoGooglePosts.postCreationUploadImage(ImagesPath + tcCommonData.accurateSpecsImage);
        autoGooglePosts.checkImageUploadedNameOnPopup(tcCommonData.accurateSpecsImage);
        autoGooglePosts.verifyImageDisplayingOnPopup(tcCommonData.accurateSpecsImage);//Assertion
        autoGooglePosts.postCreationPopupUploadBtn().should('be.visible').should('exist');//Assertion
        
        //Step 11 : click on upload button
        autoGooglePosts.postCreationPopupUploadBtn().click();
        autoGooglePosts.imageUploadeSuccessMsg().should('exist').should('have.length',1);//Assertion
        autoGooglePosts.verifyImageDisplayingOnPopup(tcCommonData.accurateSpecsImage);//Assertion
       
   
        //Step 12 : Click on submit button
        autoGooglePosts.popupSubmitButton().click();
        autoGooglePosts.imageAvailableInForm().should('exist').should('be.visible').should('have.length',1);
       
        //Step 13 : select location according to sample data
        autoGooglePosts.postCreationFormLocationField().type(tcCommonData.locationExactMatch);
        autoGooglePosts.locationOption().should('be.visible',tcCommonData.locationExactMatch).click();
        autoGooglePosts.postCreationFormLocationField().click();

        //Step 14 : select crunnent date time
        autoGooglePosts.currentDateTimeBtn().click();
        autoGooglePosts.googleBusinessPostCheckBoxText().click();
        autoGooglePosts.currentDateTimeBtn().click(); //Need for instant Post
        
        //Step 15 : write discription in discription field 
        autoGooglePosts.postCreationFormDiscriptionFieldType();
 
        //Ste 16 : Click on publish button
        autoGooglePosts.publishPostButton().click();
        autoGooglePosts.postPublishSuccessToast().should('be.visible');
        cy.wait(3000);
        autoGooglePosts.postCreationCronJobNetworkCall(tcCommonData.locationID);
        
        //Step refactored : click on processed tab post
        autoGooglePosts.processedTabAtPost().click();
          
        //Step 17 : verify image in created post
        autoGooglePosts.postContainerImage().eq(0).should('exist').should('be.visible');
        autoGooglePosts.postContainerPostStatus().eq(0).should('exist').should('be.visible');
        autoGooglePosts.postContainerImage().eq(0).should('exist').should('be.visible');
     
        // ================================ Post Condition =========================== 
        //Step 18 : Click on more button
        autoGooglePosts.postContainerMoreButton().should('be.visible').click();

        //Step 19 : Click on delete button
        autoGooglePosts.postContainerDeleteButton().should('be.visible').click();

        //Step 20 : Click on confirm button
        autoGooglePosts.postContainerPopupConfirmBtn().should('be.visible').click();
      
    });


});