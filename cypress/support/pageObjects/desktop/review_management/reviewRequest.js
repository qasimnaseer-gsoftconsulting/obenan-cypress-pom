import { desktopLoginPageObjects } from "../../index";

const sidebarLinkReviewManagment = "//span[normalize-space()='Review Management']";
const sidebarChildLinkReviewRequest = "//span[normalize-space()='Review Request']";
const createNewCompaignButton = "//button[normalize-space()='Create new campaign']";
const locationFieldAtCampaignsetup = "//input[@id='combo-box-demo']";
const locationFieldOptionAtCampaignsetup = '#combo-box-demo-option-0';
const reviewTypeCheckboxSendToReviewPlateform = "//p[normalize-space()='Send to review platform']/preceding-sibling::span/input";
const reviewTypeCheckboxSendToPrivateSurvey = "//p[normalize-space()='Send to private survey']/preceding-sibling::span/input";
const nextButtonAtCampaignsetup = "//button[normalize-space()='Next']";
const browseImageAtCampaignsetup = "//button[normalize-space()='Browse Image']";
const imageUploadAtCampaignsetup = "//p[normalize-space()='Drag & Drop Image(s) here']";
const imageUploadOkButtonAtCampaignsetup = "//button[normalize-space()='OK']";
const emailHeadingFieldAtCampaignsetup = "//input[@placeholder='Enter heading']";
const discriptionFieldAtCampaignSetup = "//textarea[@placeholder='Write Description here']";
const saveButtonAtCampaignSetup ="//button[normalize-space()='Save']";
const emailFieldForSendingReviewRequest = "//textarea[@placeholder='Enter emails here, divide by using enter']";
const startCampaignAndGenerateQrCodeButton = "//button[normalize-space()='Start Campaign']";
const startCampaignPopupConfirmButton = "//button[normalize-space()='Confirm']";
const compaignCreatedSuccessToast = "//div[contains(text(),'Campaign created successfully')]";
const qrCode = "//canvas[@id='qrCodeEl']";
const uploadImageBoxLabel = "#file";
const editReviewRequestButton = "//tbody/tr/td/button[2]";
const reviewRequestMoreButton = "//tbody/tr/td/button[1]";
const privateReviewButtonAfterMoreButton = "//li[normalize-space()='Private review']";
const generateQrCodeCheckbox = "//p[normalize-space()='Generate QR Code']/parent::div/parent::div/span";
const getQrCodeButton = '//button[normalize-space()="Get QR Code"]';
const editCompaignTemplateButton = "//button[normalize-space()='Edit']";
const deleteButtonForImageFromUploadImageBox = "//*[@data-testid='CloseOutlinedIcon']";
const emailInputFieldForReviewFeedback = '//input[@placeholder="Email here"]';
const uploadOwnFileCheckboxForEmails = "//p[normalize-space()='Upload your own file']/parent::div/span";
const editHeadingAndDiscriptionButton = " //p//*[name()='svg']";
const browseFileButton = "//button[normalize-space()='Browse File']";
const checkLanguageDuringCompaignSetup = "//td[normalize-space()='Email language']/following-sibling::td"


class reviewRequest {


    loginForRequestReview(){
        desktopLoginPageObjects.setViewPortForDesktop();
        desktopLoginPageObjects.visitLoginPage();
        desktopLoginPageObjects.setEmailAddress();
        desktopLoginPageObjects.setPasswrod();
        desktopLoginPageObjects.rememberMeCheckbox().click();
        desktopLoginPageObjects.signInButton().click();
    }

    sidebarLinkReviewManagment(){
        return cy.xpath(sidebarLinkReviewManagment);
    }

    sidebarChildLinkReviewRequest(){
        return cy.xpath(sidebarChildLinkReviewRequest);
    }

    createNewCompaignButton(){
        return cy.xpath(createNewCompaignButton);
    }

    locationFieldAtCampaignsetup(){
        return cy.xpath(locationFieldAtCampaignsetup);
    }

    locationFieldOptionAtCampaignsetup(){
        return cy.get(locationFieldOptionAtCampaignsetup);
    }

    reviewTypeCheckboxSendToReviewPlateform(){
        return cy.xpath(reviewTypeCheckboxSendToReviewPlateform);
    }

    //for review type send to private survey
    reviewTypeCheckboxSendToPrivateSurvey(){
        return cy.xpath(reviewTypeCheckboxSendToPrivateSurvey);
    }

    nextButtonAtCampaignsetup(){
        return cy.xpath(nextButtonAtCampaignsetup);
    }

    browseImageAtCampaignsetup(){
        return cy.xpath(browseImageAtCampaignsetup);
    }

    //for edit heading and discription button 
    editHeadingAndDiscriptionButton(){
        return cy.xpath(editHeadingAndDiscriptionButton);
    }

    //for edit compagin template
    editCompaignTemplateButton(){
        return cy.xpath(editCompaignTemplateButton);
    }

    //for delete imagebutton of uploaded image in upload image box
    deleteButtonForImageFromUploadImageBox(){
        return cy.xpath(deleteButtonForImageFromUploadImageBox);
    }

    imageUploadAtCampaignsetup(images){
        this.browseImageAtCampaignsetup().click();
        cy.get(uploadImageBoxLabel).attachFile(images).wait(3000);
    }

    //for video upload at compaign setup
    videoUploadAtCampaignsetup(video){
        cy.xpath(imageUploadAtCampaignsetup).click();
        // if(video){
        //     cy.attachFile("Test Case Fail : Video is not allowed here");
        // }
        cy.get(uploadImageBoxLabel).attachFile(video).then(()=>{
            cy.log("Test Case Fail : Video is not allowed here");
        });
    }

    imageUploadOkButtonAtCampaignsetup(){
        return cy.xpath(imageUploadOkButtonAtCampaignsetup);
    }

    emailHeadingFieldAtCampaignsetup(){
        return cy.xpath(emailHeadingFieldAtCampaignsetup);
    }

    discriptionFieldAtCampaignSetup(){
        return cy.xpath(discriptionFieldAtCampaignSetup);
    }

    saveButtonAtCampaignSetup(){
        return cy.xpath(saveButtonAtCampaignSetup);
    }

    //for emails text area
    emailFieldForSendingReviewRequest(){
        return cy.xpath(emailFieldForSendingReviewRequest);
    }

    //for feedback email input field
    emailInputFieldForReviewFeedback(){
        return cy.xpath(emailInputFieldForReviewFeedback);
    }

    //for importing emails from file
    uploadOwnFileCheckboxForEmails(){
        return cy.xpath(uploadOwnFileCheckboxForEmails);
    }

    startCampaignButton(){
        return cy.xpath(startCampaignAndGenerateQrCodeButton);
    }

    startCampaignPopupConfirmButton(){
        return cy.xpath(startCampaignPopupConfirmButton);
    }

    compaignCreatedSuccessToast(){
        return cy.xpath(compaignCreatedSuccessToast);
    }

    qrCode(){
        return cy.xpath(qrCode);
    }

    //for edit request button
    editReviewRequestButton(){
        return cy.xpath(editReviewRequestButton).eq(0);
    }

    //for more request button
    reviewRequestMoreButton(){
        return cy.xpath(reviewRequestMoreButton).eq(0);
    }

    //for private review button
    privateReviewButtonAfterMoreButton(){
        return cy.xpath(privateReviewButtonAfterMoreButton).eq(0);
    }

    //for QR code generation 
    generateQrCodeCheckbox(){
        return cy.xpath(generateQrCodeCheckbox);
    }

    //for get qr code button at compagin setup
    getQrCodeButton(){
        return cy.xpath(getQrCodeButton);
    }

    //browse file button
    browseFileButton(){
       return cy.xpath(browseFileButton).should('exist').click();
        // cy.get('input[type="file"]').attachFile(file);
    }

    //for checking language at overview of compaign setup during creation of compaign
    checkLanguageDuringCompaignSetup(){
        return cy.xpath(checkLanguageDuringCompaignSetup).eq(0).should('exist');
    }

}

export default reviewRequest; 