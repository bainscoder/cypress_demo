/// <reference types = "Cypress"/>



describe('Login page functionality', { tags: ['smoke', 'regression'] }, () => {
    beforeEach(() => {
        /*
        run before every it block to get the url of the login page
        */
        cy.URL()
    })
    /*
        All elements under Login page should be displayed properly
    */

    it('Verify All element visible under Login page', () => {
        cy.verifyAllElementVisibleUnderLoginPage()
    })

    /*
        Login page should functions properly
    */

    it('Verify the functionality of Login page', { tags: ['smoke', 'regression'] }, () => {
        cy.verifyFunctionalityOfLoginPage()
    })

    /*
        Forget link text should functions properly
    */

    it('Verify the functionality of forget password link text', { tags: ['smoke', 'regression'] }, () => {
        cy.functionalityOfForgetPasswordLink()
    })

    /*
        All element under Forget passwork should be displayed properly
    */

    it('Verify all element visible in the forget password page', { tags: 'regression' }, () => {
        cy.verifyAllElementPresentInForgetPasswordPage()
    })

    /*
        All tabs should be displayed properly in Home page  
    */

    it('Verify all tabs present on Home page', { tags: ['smoke', 'regression'] }, () => {
        cy.verifyAllTabVisible()
    })

})
describe('Functionality of the My Info page element', () => {
    
    
    /**
     * Before each block: Execution of Login functionality
     */
    beforeEach(() => {

        cy.Login()
        cy.MyInfoTab()
    })

    /**
     * Test script: To validate all tabs displayed in My Info page
     */
    it('Verify All tabs and Image is displayed on the My Info page', () => {
        cy.verifyAllTabsAndImageSectionInMyInfoPage()
    })

    /**
     * Test script: To validate all elements displayed and functions in Personal details apge
     */
    it('Verify all elemet visible and its functional under personal detail page', () => {
        cy.verifyAllTitleAndLabelDisplayed()
    })

    /**
     * Test script: To validate visibility and functionality of all Input fields
     */
    it('Verify all input field and its functionality', () => {
        // first, middle, last name
        cy.verifFunctionalityofInputNamefield()
        // Employ detail field
        cy.verifyFunctionalityOfEmployedDetail()
        // functionality of DOB
        cy.verifyFunctionalityOfDOB()
        // Other details of the Employe
        cy.verifyFunctionalityOfOtherDetails()
    })
})