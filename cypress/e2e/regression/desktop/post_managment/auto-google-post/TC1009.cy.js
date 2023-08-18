
import { autoGooglePosts } from "../../../../../support/pageObjects";
describe('[TC1009]',()=>{
    let tcCommonData;

    beforeEach(() => {
      cy.loginForDesktop();
      cy.fixture('desktop/common-data').then((data)=>{
        tcCommonData = data;
      });
    })
    it('Post Creation(Check svg and gif images upload fail fail message at 3rd popup of uploading images, delete images, images in post form and after creation of post)',()=>{
        
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
        const images = [
            ImagesPath+tcCommonData.lessWidthGif,
            ImagesPath+tcCommonData.lessHeightGif,
            ImagesPath+tcCommonData.accurateSpecsGif,
            ImagesPath+tcCommonData.lessWidthSvg,
            ImagesPath+tcCommonData.lessHeightSvg,
            ImagesPath+tcCommonData.accurateSpecsSvg,
            ImagesPath+tcCommonData.accurateSpecsJpg,
            ImagesPath+tcCommonData.accurateSpecsPng
        ];
        autoGooglePosts.postCreationUploadImage(images);
        //Step 10 : Verify error message
        autoGooglePosts.imageUploadErrorMsg().should(($element)=>{
            expect($element).to.have.length(4);
            expect($element.filter(':visible')).to.have.length(4);
        })

        //Step 11 : Verify upload button disability
        autoGooglePosts.postCreationPopupUploadBtn().should('have.attr', 'disabled');
       
        //Step 12 : Delete images which related to error
        cy.wait(3000);
        autoGooglePosts.imageDeleteButtonAtUploadPopup(tcCommonData.lessWidthSvg).click();
        autoGooglePosts.imageDeleteButtonAtUploadPopup(tcCommonData.lessHeightSvg).click();
        autoGooglePosts.imageDeleteButtonAtUploadPopup(tcCommonData.lessWidthGif).click();
        autoGooglePosts.imageDeleteButtonAtUploadPopup(tcCommonData.lessHeightGif).click();
        autoGooglePosts.imageDeleteButtonAtUploadPopup(tcCommonData.accurateSpecsSvg).click();


        //Step 13 : verify upload button is enabled and click on that
        autoGooglePosts.postCreationPopupUploadBtn().should('not.have.attr', 'disabled');//Assertion
        autoGooglePosts.postCreationPopupUploadBtn().click();

        //Step 14 : verify image upload success message according to sample data
        autoGooglePosts.imageUploadeSuccessMsg().should(($element)=>{
            expect($element).to.have.length(2);
            expect($element.filter(':visible')).to.have.length(2);
        });

        //Step 15 : Verify svg and gif images are failed to upload
        autoGooglePosts.imageUploadFailedErrorMsg().should(($element)=>{
            expect($element).to.have.length(1);
            expect($element.filter(':visible')).to.have.length(1);
        });
        // autoGooglePosts.imageUploadMaxSizeErrorMsg().should(($element)=>{
        //     expect($element).to.have.length(1);
        //     expect($element.filter(':visible')).to.have.length(1);
        // })

        //Step 16 : click on cancel button
        autoGooglePosts.postCreationPopupCancelButton().eq(0).should('exist').and('be.visible').click({force:true});

        //Step 17 : click on create post button
        autoGooglePosts.clickCreatePostButton();

        //Step 18 : upload image according to sample data
        autoGooglePosts.postCreationUploadImage(ImagesPath+tcCommonData.accurateSpecsJpg);
        
        //Step 19 : Click on upload button
        autoGooglePosts.postCreationPopupUploadBtn().click();

        //Step 20 : Click on submit button
        autoGooglePosts.popupSubmitButton().click();
       
        //Step 21 : add location in first form according to sample data 
        autoGooglePosts.postCreationFormLocationField().type(tcCommonData.locationExactMatch);
        autoGooglePosts.locationOption().should('be.visible',tcCommonData.locationExactMatch).click();
        autoGooglePosts.postCreationFormLocationField().click();

        //Step 22 : click on current date and time button
        autoGooglePosts.currentDateTimeBtn().click();
        
        //Step 23 : write discription in discription field 
        autoGooglePosts.postCreationFormDiscriptionFieldType();

        //Step 24 : click on publish post
        autoGooglePosts.publishPostButton().click();

        //Step 25 : verify post creation toast msg
        autoGooglePosts.postPublishSuccessToast().should('be.visible');
        
        //Step refactored : click on processed tab post
        autoGooglePosts.processedTabAtPost().click();

        //Step 26 : verify image in created post
        autoGooglePosts.postContainerImage().eq(0).should('be.visible');
        autoGooglePosts.postContainerPostStatusHaveNotPosted().eq(0).should('exist').and('be.visible').and('have.text', "Haven't Posted Yet");

       
        // ================================ Post Condition =========================== 

        //Step 27 : Click on more button
        autoGooglePosts.postContainerMoreButton().eq(0).should('exist').and('be.visible').click();
       
        //Step 28 : Click on delete button
        autoGooglePosts.postContainerDeleteButton().should('exist').and('be.visible').click();

        //Step 29 : Click on confirm button
        autoGooglePosts.postContainerPopupConfirmBtn().click({force : true });
        autoGooglePosts.postDeletedToastMsg().should('be.visible');

    })
})