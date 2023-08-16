import { desktopCommonObjects, reviewRequests } from "../../../../../support/pageObjects";

describe('[TC3002]',()=>{

    let tcCommonData;
    beforeEach(() => {
        cy.loginForDesktop();
        // Runs before each test in the describe block
        cy.fixture('desktop/common-data').then((data)=>{
          tcCommonData = data;
        });
    });


    it('Verify Image formats are uploaded successfully',()=>{
        let ImagesPath = tcCommonData.ImagesPath;
        let videosPath = tcCommonData.videosPath;
        let filesPath = tcCommonData.filesPath;
        //Step 1 : Visit the login page of obenan
        //Step 2 : Type correct email 
        //Step 3 : Type correct password
        //Step 4 : Click Remember me check box 
        //Step 5 : Click sign in
        cy.visit(Cypress.env('baseURL'));
        //Step 6 : Click on Review managment 
        reviewRequests.sidebarLinkReviewManagment().click();
        //Step 7 : Click on "Review Request"
        reviewRequests.sidebarChildLinkReviewRequest().click();
        //Step 8 : Verify dropdown 
        desktopCommonObjects.locationSelectField(tcCommonData.param_review_request_campaign).click();
        desktopCommonObjects.locationSelectFieldFirstOption(tcCommonData.param_review_request_campaign).should('be.visible');
        //Step 9 : Click "Create new Campaign"
        reviewRequests.createNewCompaignButton().click();
        cy.contains('Campaign setup').should('be.visible');
        //Step 10 : Click on the dropdown menu to select location
        desktopCommonObjects.locationSelectField(tcCommonData.param_review_request_campaign).click().type(tcCommonData.locationExactMatch);
        //Step 11 : Click on a location 
        desktopCommonObjects.locationSelectFieldFirstOption(tcCommonData.param_review_request_campaign).click(); 
        //Step 12 : 1- Select "Review Platform" if unchecked //already selected google
        //Step 13 : 2 - Click on Check box Send to private survey
        reviewRequests.reviewTypeCheckboxSendToPrivateSurvey().click().then(()=>{
            desktopCommonObjects.checkboxCheckedState(tcCommonData.param_review_request_campaign).eq(1).should('exist');
        });
        //Step 14 : Click Edit Button 
        reviewRequests.browseImageAtCampaignsetup().click();
        //Step 15 : Click camera to select images
        //Step 16 : 1- Select single image
        reviewRequests.imageUploadAtCampaignsetup(ImagesPath + tcCommonData.accurateSpecsImage);
        reviewRequests.deleteButtonForImageFromUploadImageBox().eq(0).click();
        //Step 17 : 2 - Select any other file like text file or video
        reviewRequests.videoUploadAtCampaignsetup(videosPath + tcCommonData.video);
        desktopCommonObjects.cancelButton().click({force:true});
        //Step 18 : 3 - Select other image format such as gif
        reviewRequests.imageUploadAtCampaignsetup(ImagesPath + tcCommonData.accurateSpecsGif);
       //Step 19 : 1- Click Ok to select image 
        reviewRequests.imageUploadOkButtonAtCampaignsetup().click().wait(20000);
        reviewRequests.deleteButtonForImageFromUploadImageBox().eq(0).click({force:true});
        //Step 20 : 2 - Any other file like text file or video
        reviewRequests.videoUploadAtCampaignsetup(videosPath + tcCommonData.video);
        desktopCommonObjects.cancelButton().click({force:true});
        //Step 21 : 3 - Select other image format such as gif
        reviewRequests.imageUploadAtCampaignsetup(ImagesPath + tcCommonData.accurateSpecsGif);
        reviewRequests.imageUploadOkButtonAtCampaignsetup().click().wait(8000);
        //Step : Click on pencil/Edit icon
        reviewRequests.editHeadingAndDiscriptionButton().click({force : true});
        //Step 22 : 4 - Type anything in heading or description
        reviewRequests.emailHeadingFieldAtCampaignsetup().click().type(tcCommonData.heading);
        reviewRequests.discriptionFieldAtCampaignSetup().click().type(tcCommonData.discription);
       //Step 23 : 5 - Click save
        reviewRequests.saveButtonAtCampaignSetup().click();
        cy.contains(tcCommonData.heading).should('be.visible');
        cy.contains(tcCommonData.discription).should('be.visible');
        //Step 24 : 1 - Enter email address in the field
        reviewRequests.emailInputFieldForReviewFeedback().eq(1).click({force : true}).clear().type(tcCommonData.email);
        //Step 25 : 2 - Click Next
        reviewRequests.nextButtonAtCampaignsetup().click();
        //Step 26 : 1- Click upload image/ Edit email campaign
        reviewRequests.browseImageAtCampaignsetup().click();
        //Step 27 : 2 - Click camera icon to select image
        //Step 28 : 1 - Single image selection
        reviewRequests.imageUploadAtCampaignsetup(ImagesPath + tcCommonData.accurateSpecsImage);
        reviewRequests.imageUploadOkButtonAtCampaignsetup().click({force : true}).wait(8000);
        reviewRequests.deleteButtonForImageFromUploadImageBox().eq(0).click();
        //Step 29 : 2- Select any other file like text file or video
        reviewRequests.videoUploadAtCampaignsetup(videosPath+tcCommonData.video);
        desktopCommonObjects.cancelButton().click({force:true});
         //Step 30 : 3 - Select other image format such as gif
        //Step 31 : 1- Single image
        reviewRequests.imageUploadAtCampaignsetup(ImagesPath+tcCommonData.accurateSpecsGif);
        reviewRequests.imageUploadOkButtonAtCampaignsetup().click({force : true}).wait(8000);
        reviewRequests.deleteButtonForImageFromUploadImageBox().eq(0).click({force : true});
        //Step 32 : 2- Any other file like text file or video
        reviewRequests.videoUploadAtCampaignsetup(videosPath+tcCommonData.video);
        desktopCommonObjects.cancelButton().click({force:true});
        //Step 33 : 3 - Select other image format such as gif
        reviewRequests.imageUploadAtCampaignsetup(ImagesPath+tcCommonData.accurateSpecsGif);
        reviewRequests.imageUploadOkButtonAtCampaignsetup().click({force:true}).wait(20000);
        //Step : Click on pencil/Edit icon
        reviewRequests.editHeadingAndDiscriptionButton().should('be.visible').click();
        //Step 34 : Type anything in heading or description
        reviewRequests.emailHeadingFieldAtCampaignsetup().click().type(tcCommonData.heading);
        reviewRequests.discriptionFieldAtCampaignSetup().click().type(tcCommonData.discription);
        //Step 35 : Click save button
        reviewRequests.saveButtonAtCampaignSetup().click();
        cy.contains(tcCommonData.heading).should('be.visible');
        cy.contains(tcCommonData.discription).should('be.visible');
        //Step 36 : Click Next button
        reviewRequests.nextButtonAtCampaignsetup().click({force:true})
        //Step 37 : 1 - Click Import your own email addresses
        reviewRequests.uploadOwnFileCheckboxForEmails().click();
        //Step 38 : 2 - Direct Import
        //Step 39 : 3- Upload your own file
        cy.xpath("//input[@type='file']").attachFile(filesPath+tcCommonData.file1);;
        //Step 40 : Choose language
        //Step 41 : Click Next
        reviewRequests.nextButtonAtCampaignsetup().click();
        //Step 42 : 1 - Click start campaign
        reviewRequests.startCampaignButton().click();
        //Step 43 : 2 - Click confirm to start campaign
        desktopCommonObjects.popupConfirmButton().click();
        //Step 44 : Verify Toast message "Campaign Created successfully"
        reviewRequests.compaignCreatedSuccessToast().should('be.visible');
    })

});