
const selectLocationField = "//div[normalize-space()='Select...']";
const locationFieldOptionAtAddLocations = '#combo-box-demo-option-0';
const locatioNameField = "//input[@name='accountName']";
const postalCodeField = "//input[@name='postalCode']";
const cityNameField = "//input[@name='city']";
const addLocationButton = "//button[normalize-space()='Add Location']";
const sidebarLinkManageLocations = "//span[normalize-space()='Manage locations']";
const sidebarChildLinkAddLocation = "//span[normalize-space()='Add Location']";
const locationAddedSuccessToast = "//div[contains(text(),'Your request for adding a location on Obenan has been sent to the Admin. You will be informed via email once the request is processed')]";
const cancelButtonAtAddLocations = "//button[normalize-space()='Cancel']";
const locationMoreButton = "//td//button[3]";
const deleteLocationButton = "//li//p[@aria-label='delete'][normalize-space()='Delete']";
const popupConfirmButton = "//button[normalize-space()='Confirm']";

class addLocation {
    //for location field
    locationSelectFieldAtAddLocationsPage(){
        return cy.xpath(selectLocationField);
    }

    //for location name field
    locationNameField(){
        return cy.xpath(locatioNameField);
    }

    //for postal code field
    postalCodeField(){
        return cy.xpath(postalCodeField);
    }

    //for city field
    cityNameField(){
        return cy.xpath(cityNameField);
    }
    
    //for add location button
    addLocationButton(){
        return cy.xpath(addLocationButton);
    }

    //for sidebar link manage locations
    sidebarLinkManageLocations(){
        return cy.xpath(sidebarLinkManageLocations);
    }

    //for sidebar child link
    sidebarChildLinkAddLocation(){
        return cy.xpath(sidebarChildLinkAddLocation);
    }
    
    //for location field first option
    locationFieldFirstOptionAtAddLocations(){
        return cy.get(locationFieldOptionAtAddLocations);
    }

    //for location added success toast
    locationAddedSuccessToast(){
        return cy.xpath(locationAddedSuccessToast,{timeout : 10000});
    }

    //for cancel button at add location
    cancelButtonAtAddLocations(){
        return cy.xpath(cancelButtonAtAddLocations);
    }
    
    //for location more button
    locationMoreButton(){
        return cy.xpath(locationMoreButton).eq(0);
    }

    //for location delete button
    deleteLocationButton(){
        return cy.xpath(deleteLocationButton);
    }

    popupConfirmButton(){
        return cy.xpath(popupConfirmButton);
    }
    
}

export default addLocation;