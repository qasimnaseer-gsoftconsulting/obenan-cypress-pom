
//env credentials
const baseURL = Cypress.env('baseURL');
const email = Cypress.env('email');
const password = Cypress.env('password');
const apiLogionUrl = Cypress.env("apiURL");

let postDiscription = "test discription one";

const sidebarPostManagmentLink = "//span[normalize-space()='Post Management']";
const sidebarAutoGooglePostLink = "//span[normalize-space()='Auto Google Posts']";
const verifyGoogleAutoPostPageHeading = "//p[normalize-space()='All Posts']";
const postPageUrl = baseURL+"user/allposts";
const createPostButton = "//button[normalize-space()='Create Post']";
const popupTitleLocater = "#alert-dialog-slide-title";
const uploadImagePopup = '[data-testid="AddAPhotoOutlinedIcon"]';
const uploadImageBoxLabel = "#file";
const uploadButtonOnPopup = "//button[normalize-space()='Upload']";
const submitButtonOnPopup = "//button[normalize-space()='Submit']";
const cancelButtonOnPopup = "//button[normalize-space()='Cancel']";
const popupCrossIcon = "//button[normalize-space()='X']";
const imageInForm = "//img[@alt='userimg']";
const postCreationLocationField = '//input[@id="combo-box-demo"]';
const locationOption = "#combo-box-demo-option-1";
const googleBusinessPostCheckBox = "//input[@type='checkbox']";
const googleBusingPostTextForChekbox = "//span[normalize-space()='Also add image to the Photos section of Google My Business?']";
const dateTimeField = '//input[@placeholder="dd/mm/yyyy hh:mm (a|p)m"]';
const discriptionField = "//textarea[@placeholder='Enter Description']";
const currentDateTimeButton = "//button[@class='sc-hKwDye hcgaRp MuiButtonBase-root sc-eCImPb dxbdam MuiIconButton-root MuiIconButton-sizeLarge']//*[name()='svg']";
const imgUploadSuccessMSg = "//p[starts-with(normalize-space(), 'Uploaded successfully')]";
const imgUploadErrorMasg = "//p[starts-with(normalize-space(), 'Min: 250px/250px w/h')]";
const postPublishButton = "//button[normalize-space()='Publish']";
const postContainerDeleteButton = "//p[normalize-space()='Delete']";
const postContainerDeleteConfirmBtn = "//button[normalize-space()='Confirm']";
const postContainerPostStatusPosted = "//p[normalize-space()='"+postDiscription+"']/parent::div/parent::div//span[normalize-space()='Posted']";
const postContainerPostStatusHaveNotPosted ='//span[contains(text(),"Haven\'t Posted Yet")]';
const postContainerMoreButton = "//p[normalize-space()='"+postDiscription+"']/parent::div/parent::div/parent::div/parent::div//button"
const postContainerImage = "//p[normalize-space()='"+postDiscription+"']/parent::div/parent::div/parent::div/child::div[2]/span/img";
const postCreatedSuccessToastPath = "//div[@role='alert']//div[contains(text(),'Created successfully')]";
const postCreatedDeleteToastPath = "//div[@role='alert']//div[contains(text(),'Post Deleted Successfully')]";
const deleteIconAtPostCreationForm = "//button[@aria-label='delete']//*[name()='svg']";
const imageUploadFailedError = "//p[normalize-space()='Uploaded failed']";
const processedTabAtPost = "//button[normalize-space()='Processed']";
const imageMaxSizeError = "//p[starts-with(normalize-space(), 'Min size: 10 KB']";
//const checkUploadedImagNameOnPopup= "//p[contains(text(),'"+img+"')]";  //checkImageUploadedNameOnPopup()
//const checkImageIsDisplayingOnPopup = "//p[normalize-space()='test.jpg']/parent::div/preceding-sibling::div//img" //verifyImageDisplayingOnPopup()
// const imageDeleteBtnOnPopup = "//p[contains(text(), '"+imgName+"')]/parent::div/parent::div//button[@aria-label='delete']"; //imageDeleteButtonAtUploadPopup() , deleteAllUploadedImages()


class googleAutoPost{

    //for click on sidebar link post managment
    sidebarClickPostManagement(){
        cy.xpath(sidebarPostManagmentLink).click();
    }

    //for click on google auto post link
    sidebarClickAutoGooglePost(){
        cy.xpath(sidebarAutoGooglePostLink).click();
    }

    //Verify google auto post page
    verifyGoogleAutoPostPage(){
        cy.xpath(verifyGoogleAutoPostPageHeading).should('exist').should('be.visible');
        cy.url().should('include', postPageUrl);
    }

    //for click button Create Post
    clickCreatePostButton(){
        cy.xpath(createPostButton).click();
    }

    //verify popup title
    postCreationVerifyPopupTitle(text){
        cy.get(popupTitleLocater).contains(text).should('be.visible');
    }

    //check image upload
    postCreationUploadImage(images){
        cy.get(uploadImagePopup).click();
        cy.get(uploadImageBoxLabel).attachFile(images);
    }

    //check image name available in popup
    checkImageUploadedNameOnPopup(imgName){
        cy.xpath("//p[contains(text(),'"+imgName+"')]").should('exist').should('be.visible');
    }

    //Verify Image is displaying on popup
    verifyImageDisplayingOnPopup(imgName){
        cy.xpath("//p[normalize-space()='"+imgName+"']/parent::div/preceding-sibling::div//img").should('exist').should('be.visible');
    }

    //for popup upload button
    postCreationPopupUploadBtn(){
        return cy.xpath(uploadButtonOnPopup);
    }

    //for image upload success message
    imageUploadeSuccessMsg(){
        return cy.xpath(imgUploadSuccessMSg);
    }

    //for submit button
    popupSubmitButton(){
        return cy.xpath(submitButtonOnPopup).should('be.visible');
    }

    //for verify image displaying in form after uploading
    imageAvailableInForm(){
        return cy.xpath(imageInForm);
    }

    //for post creation form location field
    postCreationFormLocationField(){
        return cy.xpath(postCreationLocationField, { timeout: 10000 });
    }

    //for select location option after search
    locationOption(){
        return cy.get(locationOption);
    }

    //for current date and time
    currentDateTimeBtn(){
      return  cy.xpath(currentDateTimeButton);
    }

    //for google bussing post checkbox
    checkboxForGoogleBusinessPost(){
        return cy.xpath(googleBusinessPostCheckBox);
    }

    //for checking google business post checkbox text
    googleBusinessPostCheckBoxText(){
        return cy.xpath(googleBusingPostTextForChekbox).should('exist').should('be.visible');
    }

    //for changing time to crunnent time + plus 5 mint
    currentDateTimePlusFiveMint(){
        var newDate = new Date();

        var sMonth = this.padValue(newDate.getMonth() + 1);
        var sDay = this.padValue(newDate.getDate());
        var sYear = newDate.getFullYear();
        var sHour = newDate.getHours();
        var sMinute = newDate.getMinutes() + 5; // Adding 5 minutes
        var sAMPM = "AM";
        
        // Adjust hour and AM/PM if adding 5 minutes crosses into the next hour
        if (sMinute >= 60) {
            sHour += Math.floor(sMinute / 60);
            sMinute = sMinute % 60;
        }
        
        var iHourCheck = parseInt(sHour);
        
        if (iHourCheck > 12) {
            sAMPM = "PM";
            sHour = iHourCheck - 12;
        } else if (iHourCheck === 0) {
            sHour = "12";
        }
        
        sHour = this.padValue(sHour);
        sMinute = this.padValue(sMinute);
    
        var finalDate = sMonth + "/" + sDay + "/" + sYear + " " + sHour + ":" + sMinute + " " + sAMPM;

        
        cy.xpath(dateTimeField).clear().type(finalDate);
    }

    //for post creation form discription field
    postCreationFormDiscriptionFieldType(){
         return cy.xpath(discriptionField).click().type(postDiscription);
    }

    //for post publish button
    publishPostButton(){
        return cy.xpath(postPublishButton);
    }

    //for post published success alert
    postPublishSuccessToast(){
       return cy.xpath(postCreatedSuccessToastPath);
    }

    //for post creation status posted  network call
    postCreationCronJobNetworkCall(id){
        cy.clearAllCookies();
        cy.request({
            method: 'POST',
                url: apiLogionUrl+'user/login',
                body : {
                    "email": email,
                    "password": password
                }
        }).then((res)=>{
            expect(res.status).to.eq(200);
            const token = res.body.token;

            cy.request({
                method: 'GET',
                url: apiLogionUrl+'post/cronJobOneLocation/'+id,
                headers: {
                    'Authorization': `Bearer ${token}`, // Use the received token here                  // include more headers as needed
                }
              }).then((response) => {
                // do assertions here
                expect(response.status).to.eq(200);
              });
        })

        cy.reload();
        cy.reload();
        cy.reload();
        cy.reload();
    }

    //newly created post image
    postContainerImage(){
        return cy.xpath(postContainerImage);
    }

    //for post container posted status
    postContainerMoreButton(){
        return cy.xpath(postContainerMoreButton).eq(0);
    }

    //for post posted status
    postContainerPostStatus(){
        return cy.xpath(postContainerPostStatusPosted);
    }

    //for post container More > Delete button
    postContainerDeleteButton(){
        return cy.xpath(postContainerDeleteButton);
    }

    //for post delete popup confirm button
    postContainerPopupConfirmBtn(){
        return cy.xpath(postContainerDeleteConfirmBtn);
    }

    //for image upload error message
    imageUploadErrorMsg(){
        return cy.xpath(imgUploadErrorMasg);
    }

    //for delete button on popup for image 
    imageDeleteButtonAtUploadPopup(imgName){
       return cy.xpath("//p[contains(text(), '"+imgName+"')]/parent::div/parent::div//button[@aria-label='delete']").should('exist');
    }

    //for image upload popup cancel button
    postCreationPopupCancelButton(){
        return cy.xpath(cancelButtonOnPopup);
    }

    //for popup cross icon 
    popupCrossIcon(){
        return cy.xpath(popupCrossIcon);
    }

    //for post deleted toast
    postDeletedToastMsg(){
        return cy.xpath(postCreatedDeleteToastPath);
    }

    //for delete all uploaded images from popup during post creation process
    deleteAllUploadedImagesFromUploadPopup(images){
        for (let i = 0; i < images.length; i++) {
            const imageName = images[i].split('/').pop(); // Extract the image name from the path
            cy.xpath(`//p[contains(text(), '${imageName}')]/parent::div/parent::div//button[@aria-label='delete']`).click();
            // Add any additional confirmation or validation steps if required
          }
    }

    //for delete post from post creation form
    deletePostFromPostCreationForm(){
        return cy.xpath(deleteIconAtPostCreationForm);
    }

    //for verify post have not posted status
    postContainerPostStatusHaveNotPosted(){
        return cy.xpath(postContainerPostStatusHaveNotPosted);
    }

    //post creation image upload fail error
    imageUploadFailedErrorMsg(){
        return cy.xpath(imageUploadFailedError);
    }

    imageUploadMaxSizeErrorMsg(){
        return cy.xpath(imageMaxSizeError);
    }

    //for getting current date and time
    padValue(value) {
        return value < 10 ? "0" + value : value;
    }

    postCreationTypeCurrentDateTimePlusFiveMinute() {
        var newDate = new Date();

        var sMonth = this.padValue(newDate.getMonth() + 1);
        var sDay = this.padValue(newDate.getDate());
        var sYear = newDate.getFullYear();
        var sHour = newDate.getHours();
        var sMinute = newDate.getMinutes() + 60; // Adding 60 minutes
        var sAMPM = "";

        // Adjust hour and AM/PM if adding 5 minutes crosses into the next hour
        if (sMinute >= 60) {
            sHour += Math.floor(sMinute / 60);
            sMinute = sMinute % 60;
        }

        if (sHour >= 12) {
            sAMPM = "PM";
            if (sHour > 12) {
                sHour -= 12;
            }
        } else {
            sAMPM = "AM";
            if (sHour === 0) {
                sHour = 12;
            }
        }

        sHour = this.padValue(sHour);
        sMinute = this.padValue(sMinute);

        return sDay + "/" + sMonth + "/" + sYear + " " + sHour + ":" + sMinute + " " + sAMPM;
    }
    
    //For date time field
    postCreationDateTimeField(){
        return cy.xpath(dateTimeField);
    }

    //post discription field
    postCreationPostDiscriptionField(){
        return cy.xpath(discriptionField);
    }

    //for processed button at post
    processedTabAtPost(){
        return cy.xpath(processedTabAtPost);
    }


}

export default googleAutoPost;