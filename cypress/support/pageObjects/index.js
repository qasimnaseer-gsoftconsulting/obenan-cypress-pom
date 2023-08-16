//import module from support/pageObjects
import desktopLoginPageObject  from "./desktop/login_page/desktopLoginPage";
import autoGooglePost from "./desktop/post-management/googleAutoPost";
import listing from "./desktop/listings/listing";
import reviewRequest from "./desktop/review_management/reviewRequest";
import adddLocation from './desktop/manage-locations/addLocation';
import desktopCommonObject from './desktop/desktopCommonObject';

//initialize from imports
const desktopLoginPageObjects = new desktopLoginPageObject();
const autoGooglePosts = new autoGooglePost();
const listings = new listing();
const reviewRequests = new reviewRequest();
const addLocations = new adddLocation();
const desktopCommonObjects = new desktopCommonObject();

//exporting from initialize
export {
    desktopLoginPageObjects,
    autoGooglePosts,
    listings,
    reviewRequests,
    addLocations,
    desktopCommonObjects
}