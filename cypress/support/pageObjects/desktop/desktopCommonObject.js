const locationSelectField = "//input[@id='combo-box-demo']";
const locationSelectFieldFirstOption = "#combo-box-demo-option-0";
const tableFirstRow = "//tbody/tr";
const deleteTableData = "//li[normalize-space()='Delete']";
const popupConfirmButton = "//button[normalize-space()='Confirm']";
const reviewRequestDelete = "//div[contains(text(),'Campaigns deleted successfully')]";
const checkboxCheckedState = '.Mui-checked';
const cancelButton = "//*[normalize-space()='Cancel']";
const reviewRequestCompaignImageUploaded = ".lazy-load-image-background > img";
const selectLanguageSelector = "//div[@id='demo-simple-select']";

class desktopCommonObject {
    locationSelectField(param){
        if(param === 'review_request' || param === "review_request_campaign"){
            return cy.xpath(locationSelectField);
        }
    }

    locationSelectFieldFirstOption(param){
        if(param === 'review_request' || param === "review_request_campaign"){
            return cy.get(locationSelectFieldFirstOption);
        }
    }

    //for table data first row
    tableFirstRow(param){
        if(param === 'locations'){
            return cy.xpath(tableFirstRow).eq(0);
        }else if(param === 'review_request'){
            return cy.xpath(tableFirstRow).eq(0);
        }
    }

    //for delete table data 
    deleteTableData(param){
        if(param === 'review_request'){
            return cy.xpath(deleteTableData).eq(0);
        }
    }

    //for popup confirm button
    popupConfirmButton(){
        return cy.xpath(popupConfirmButton).eq(0);
    }

    //for toast message
    toastMessage(param){
        if(param === "review_request_delete"){
            return cy.xpath(reviewRequestDelete);
        }
    }

    checkboxCheckedState(param){
        if(param === 'review_request_campaign'){
            return cy.get(checkboxCheckedState);
        }
    }

    //for cancel button 
    cancelButton(){
        return cy.xpath(cancelButton);
    }

    verifyImageUploaded(param){
        if(param === 'review_request_campaign'){
            return cy.get(reviewRequestCompaignImageUploaded);
        }
    }

    chooseLanguage(lang){
        cy.xpath(selectLanguageSelector).click();
        cy.contains(lang).click().then(()=>{
            cy.contains(lang).should('exist').and('be.visible');
        });
    }

}

export default desktopCommonObject;