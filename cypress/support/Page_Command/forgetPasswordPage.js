/// <reference types = "Cypress"/>



import forgetPassword from "../Page_Method/forgetPasswordPage";



const frgtpass = new forgetPassword();


/*
    All Element should be displayed in the forget Password page 
*/


Cypress.Commands.add('verifyAllElementPresentInForgetPasswordPage', () => {
    frgtpass.getForgetPasswordPage().url('contain', 'requestPasswordResetCode')
    frgtpass.getTitle().then(($TitleText) => {
        expect($TitleText.text()).to.be.deep.equal('Reset Password')
    });

    frgtpass.getForgetNote().then(($NoteText) => {
        expect($NoteText.text()).to.be.deep.equal('Please enter your username to identify your account to reset your password');

    });
    frgtpass.getUsername().then(($UserText) => {
        expect($UserText.text()).to.be.deep.equal('Username')
    });

    frgtpass.getUserInput().then(($UserInput) => {
        if ($UserInput.is(':visible')) {
            cy.wrap($UserInput).click()
        }
    });

    frgtpass.getCancelBtn().then(($CnclText) => {
        expect($CnclText.text()).to.be.deep.equal(' Cancel ')
        cy.wrap($CnclText).should('have.css', 'font-size', '14px')
    });

    frgtpass.getResetPassBtn().should('be.visible').then((ResetBtnText) => {
        expect(ResetBtnText.text()).to.be.deep.equal(' Reset Password ')

    });
});