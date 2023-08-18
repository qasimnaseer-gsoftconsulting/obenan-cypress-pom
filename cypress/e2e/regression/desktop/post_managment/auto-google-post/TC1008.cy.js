import { autoGooglePosts } from "../../../../../support/pageObjects";

describe('[TC1008]', () => {

    let tcCommonData;

    beforeEach(() => {
      // Runs before each test in the describe block
      cy.loginForDesktop();
      cy.fixture('desktop/common-data').then((data)=>{
        tcCommonData = data;
      });
    })

    it('Post Creation(Check impact when i upload correct and wrong specs images,image error and success messages, delete images, images in post form and after creation of post)', () => {

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

        //Step 9 : upload 4 images according to sample data
        let images = [ImagesPath+tcCommonData.lessHeightJPG, ImagesPath+tcCommonData.lesWidthPNG, ImagesPath+tcCommonData.accurateSpecsImageJPG, ImagesPath+tcCommonData.accurateSpecsImagePNG];
        
        autoGooglePosts.postCreationUploadImage(images);
        autoGooglePosts.verifyImageDisplayingOnPopup(tcCommonData.lessHeightJPG);
        autoGooglePosts.verifyImageDisplayingOnPopup(tcCommonData.lesWidthPNG);
        autoGooglePosts.verifyImageDisplayingOnPopup(tcCommonData.accurateSpecsImageJPG);
        autoGooglePosts.verifyImageDisplayingOnPopup(tcCommonData.accurateSpecsImagePNG);
        cy.wait(2000);

        //Step 10 : Verify error message
        autoGooglePosts.imageUploadErrorMsg().should('be.visible').should('have.length',2);

        //Step 11 : Verify upload button disability
        autoGooglePosts.postCreationPopupUploadBtn().should('have.attr', 'disabled');

        //Step 12 : Delete images which related to error
        autoGooglePosts.imageDeleteButtonAtUploadPopup(tcCommonData.lessHeightJPG).click();
        autoGooglePosts.imageDeleteButtonAtUploadPopup(tcCommonData.lesWidthPNG).click();

        //Step 13 : verify upload button is enabled and click on that
        autoGooglePosts.postCreationPopupUploadBtn().should('not.have.attr', 'disabled');//Assertion
        autoGooglePosts.postCreationPopupUploadBtn().click();

        //Step 14 : verify image upload success message according to sample data
        autoGooglePosts.imageUploadeSuccessMsg().should('be.visible').should('have.length',2);

        //Step 15 : clickn on submit
        autoGooglePosts.popupSubmitButton().click();

        //Step 16 : Verify images in post  creation form
        autoGooglePosts.imageAvailableInForm().eq(0).should('exist').should('be.visible');//Assertion
        autoGooglePosts.imageAvailableInForm().eq(1).should('exist').should('be.visible');//Assertion

        //Step 17 : delete first form 
        autoGooglePosts.deletePostFromPostCreationForm().eq(1).click({force : true});

        //Step 18 : add location in first form according to sample data 
        autoGooglePosts.postCreationFormLocationField().eq(0).type(tcCommonData.locationExactMatch)
        autoGooglePosts.locationOption().should('be.visible',tcCommonData.locationExactMatch).click();
        autoGooglePosts.postCreationFormLocationField().eq(0).click();

        //Step 19 : click on current date and time button
        autoGooglePosts.deletePostFromPostCreationForm().eq(1).should('be.visible').click();
        autoGooglePosts.currentDateTimeBtn().click();

        //Step 20 : write discription in discription field 
        autoGooglePosts.postCreationFormDiscriptionFieldType();

        //Step 21 : click on publish post
        autoGooglePosts.publishPostButton().click();
        autoGooglePosts.postPublishSuccessToast().should('be.visible');
        
        //Step refactored : click on processed tab post
        autoGooglePosts.processedTabAtPost().click().wait(2000);

        //Step 22 : verify image in created post
        autoGooglePosts.postContainerImage().should('be.visible');
        autoGooglePosts.postContainerPostStatusHaveNotPosted().eq(0).should('exist').and('be.visible').and('have.text', "Haven't Posted Yet");

       
        // ================================ Post Condition =========================== 

        //Step 23 : Click on more button
        autoGooglePosts.postContainerMoreButton().eq(0).should('exist').and('be.visible').click();
       
        //Step 24 : Click on delete button
        autoGooglePosts.postContainerDeleteButton().should('exist').and('be.visible').click();

        //Step 25 : Click on confirm button
        autoGooglePosts.postContainerPopupConfirmBtn().click({force : true });;
        autoGooglePosts.postDeletedToastMsg().should('be.visible');

    });


});