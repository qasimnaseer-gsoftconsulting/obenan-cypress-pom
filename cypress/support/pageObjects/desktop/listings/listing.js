
import { desktopLoginPageObjects } from "../../index";

//env credentials
const baseURL = Cypress.env('baseURL');
const email = Cypress.env('email');
const password = Cypress.env('password');
const apiLogionUrl = Cypress.env("apiURL");


//Selectors
const listingTechnology = "//span[normalize-space()='Listing Technology']";
const listingsLink = "//span[normalize-space()='Listings']";
const dashboardCheck = "//p[normalize-space()='View Listings']";
const connectToGoogleButton = "//button[normalize-space()='Connect with Google']";
const locationDetailTab = "//button[normalize-space()='Location Details']";
const resultTab = "//button[normalize-space()='Results']";
const companyDetailsBlockHeading = "//p[normalize-space()='Company Details']";
const autoSyncCheckbox = "//p[normalize-space()='Auto-sync']/*/*//input[@type='checkbox']";
const syncNowButton = "//button[normalize-space()='Sync now']";
const moreButton = "//span[@aria-label='Sync now']/following-sibling::button";
const fetchDataFromSocialAccontsButton = "//li//p[normalize-space()='Fetch data from social accounts']";
const locationFilterInputField = "//input[@placeholder='Filter Location']";
// const locationMatch = "//p[normalize-space()='obenan testing automation']";
const addLocationButton = "//button[normalize-space()='Add Location']";
const locationPageHeading = "//p[normalize-space()='Add Location']";
const sidebarManageLocationLink = "//span[normalize-space()='Manage locations']";
const sidebarChildAddLocationLink = "//span[normalize-space()='Add Location']"
const selectLocationFieldAtAddLocationPage = "//div[normalize-space()='Select...']";
const addLocationButon = "//button[normalize-space()='Add Location']";
const locationSuccessToast = "//div[@role='alert']//div[contains(text(),'Location Registered Successfully')]";
const locationMoreVertIconAtMyLocationPage = "//button[3]";
const sidebarChildMyLocationLink = "//span[normalize-space()='My Locations']";
const deleteLocationLink = "//p[normalize-space()='Delete']";
const deleteLocationPopupConfirmButton = "//button[normalize-space()='Confirm']";
const fetchDataConfirmPopup = "//button[normalize-space()='Confirm']";
const fetchDataSuccessToast = "//div[contains(text(),'Successfully synced with google')]";
const editCompanyDetails = "//p[normalize-space()='Company Details']/parent::div/parent::div//p[contains(text(),'Edit')]";
const locationNameField = "//input[@name='locationName']";
const listingsDetailFormSaveButton = "//button[normalize-space()='Save']";
const listingsDetailFormCloseButton = "//button[normalize-space()='Close']";
const listingEditFormSaveToast = "//div[contains(text(),'Updated Successfully')]";
// const forSpecificLocationDelete = "//tr//td[normalize-space()="449"]/following-sibling::td/div/button[3]";
// const connectLocationToGoogle = "//tr//td[normalize-space()="449"]/following-sibling::td/div/button[2]";



//class
class listing {
    //Required Login for google auto post
    loginForListings() {
        desktopLoginPageObjects.setViewPortForDesktop();
        desktopLoginPageObjects.visitLoginPage();
        desktopLoginPageObjects.setEmailAddress();
        desktopLoginPageObjects.setPasswrod();
        desktopLoginPageObjects.rememberMeCheckbox().check('remember');
        desktopLoginPageObjects.signInButton().click();
        desktopLoginPageObjects.verifyDashboard();
        this.sidebarClickListingTechnology();
        this.sidebarClickListings();
        this.verifyListingsPage();
    }

    sidebarClickListingTechnology() {
        cy.xpath(listingTechnology).should('exist').and('be.visible').click();
        cy.xpath(listingsLink).should('be.visible');
    }

    sidebarClickListings() {
        cy.xpath(listingsLink).should('exist').and('be.visible').click();
    }

    verifyListingsPage(text) {
        cy.url().should('eq', baseURL);
        cy.xpath(dashboardCheck).should('exist').and('be.visible')
            .contains(text || 'View Listings');
    }

    verifyConnectToGoogleButton() {
        cy.wait(4000);
        cy.xpath(connectToGoogleButton).should('exist').and('be.visible');
    }

    clickOnConnectToGoogleButton() {
        cy.xpath(connectToGoogleButton).should('exist').click();
    }

    verifyRedirectAfterClickOnConnectToGoogleButton() {
        cy.wait(4000);
        cy.url().then(url => {
            expect(url.includes('https://betaapi.obenan.com/api/v1/googleConnect/auth-url')).to.be.true;
            expect(url.includes('obenan.com')).to.be.true;
        });
    }

    clickOnLocationDetailsTab() {
        cy.xpath(locationDetailTab).click();
    }

    clickResultTab() {
        cy.xpath(resultTab).click();
    }

    verifyCompanyDetailsBlockByHeading() {
        cy.xpath(companyDetailsBlockHeading).should('exist').and('be.visible');
    }

    verfiyAutoSyncCheckbox() {
        cy.xpath(autoSyncCheckbox).should('exist');
    }

    autoSyncCheckboxClick(){
        return cy.xpath(autoSyncCheckbox).should('exist').click();
    }

    verifySyncNowButton() {
        cy.xpath(syncNowButton).should('exist');
    }

    clickOnMoreButtonForFethcingData() {
        cy.xpath(moreButton).click();
    }

    verifyMoreButtonForFethcingData() {
        cy.xpath(moreButton).click().then(() => {
            cy.xpath(fetchDataFromSocialAccontsButton).should('exist').and('be.visible');
        });
    }

    fetchDataFromSocialAccontsButton(){
        return cy.xpath(fetchDataFromSocialAccontsButton).should('exist').and('be.visible');
    }

    fetchDataConfirmButtonOnPopup(){
       return cy.xpath(fetchDataConfirmPopup);
    }

    fetchDataSuccessToast(){
        cy.xpath(fetchDataSuccessToast,{timeout : 20000}).should('be.visible');
    }

    editCompanyDetails(){
        return cy.xpath(editCompanyDetails,{timeout : 20000});
    }

    companyDetailsLocationNameField(){
        return cy.xpath(locationNameField);
    }

    listingsDetailFormSaveButton(){
        return cy.xpath(listingsDetailFormSaveButton);
    }

    listingsDetailFormCloseButton(){
        return cy.xpath(listingsDetailFormCloseButton);
    }

    listingEditFormSaveToastMessage(){
        cy.xpath(listingEditFormSaveToast).should('be.visible');
    }

    verifyLocationInputField() {
        cy.xpath(locationFilterInputField).should('exist').and('be.visible');
    }

    vefiyLocationIsAvailable(location) {
        cy.xpath("//p[normalize-space()='" + location + "']").should('exist').and('be.visible');
    }

    verifyAddLocationButton() {
        cy.xpath(addLocationButton).should('exist').should('be.visible');
    }

    clickOnAddLocationButtonForListings() {
        cy.xpath(addLocationButton).should('be.visible').click().then(() => {
            cy.xpath(locationPageHeading).should('exist').should('be.visible');
        });
    }

//we will refactor when we have api for addNewLocationForListing, deleteAllLocationsForListing, deleteLocationForlistings, connectLocationWithGoogleForListings
    addNewLocationForListing(location) {
        cy.xpath(sidebarManageLocationLink).should('be.visible').click();
        cy.xpath(sidebarChildAddLocationLink).should('be.visible').click();
        cy.xpath(selectLocationFieldAtAddLocationPage).eq(0).click().type(location).wait(2000).type('{Enter}');
        cy.wait(4000);
        cy.xpath(addLocationButon).click();
        cy.wait(3000);
        cy.xpath(locationSuccessToast).should('be.visible');
    }

    deleteAllLocationsForListing() {
        cy.xpath(sidebarManageLocationLink).should('be.visible').click();
        cy.xpath(sidebarChildMyLocationLink).should('be.visible').click();
        cy.wait(4000);
        const deleteLocation = () => {
            cy.document().then(doc => {
                const exists = Boolean(doc.evaluate(locationMoreVertIconAtMyLocationPage, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue);
                if (exists) {
                    cy.xpath(locationMoreVertIconAtMyLocationPage).then(($els) => {
                        // If no more elements, return
                        if ($els.length === 0 || !$els) {
                            return;
                        }

                        // Otherwise, delete first location and recursively call deleteLocation
                        cy.wrap($els[0]).as('svgbutton');
                        cy.get('@svgbutton').should('be.visible').click({ force: true }).then(() => {
                            // Get the elements after the click, to ensure they are not stale
                            cy.xpath(deleteLocationLink).eq(0).click({ force: true }).then(() => {
                                cy.xpath(deleteLocationPopupConfirmButton).should('be.visible').as('confirmButton');
                                cy.get('@confirmButton').click();
                                cy.wait(5000); // consider replacing with a more deterministic wait

                                deleteLocation(); // Recursive call
                            });
                        });
                    });
                } else {
                    return;
                }
            });

        }

        deleteLocation(); // Initial call
    }

    deleteLocationForlistings(id) {
        cy.xpath(sidebarManageLocationLink).should('be.visible').click();
        cy.xpath(sidebarChildMyLocationLink).click();
        cy.xpath("//tr//td[normalize-space()='" + id + "']/following-sibling::td/div/button[3]").click()
        cy.xpath(deleteLocationLink).click();
        cy.xpath(deleteLocationPopupConfirmButton).click();
    }
    
    connectLocationWithGoogleForListings(location) {
        cy.xpath(sidebarManageLocationLink).should('be.visible').click();
        cy.xpath(sidebarChildMyLocationLink).click();
    }

}

export default listing;