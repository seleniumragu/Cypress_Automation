

class LoginPage {
    visit(){
        cy.visit('https://www.iherbtest.com/');
    }
    user_icon_image_click(){
        cy.get('#iherb-account > div.iherb-header-account-sign-in > span > svg.icon.iherb-header-signed-out.icon-header_signed-out.sign-in.tablet-icon-login-link.my-account-button').click();
    }
    verify_url_text(){
        cy.url().should('include', 'iherb');
    }
    enter_username(value){
        const username = cy.get('input[id=username_input]');
        username.clear();
        username.type(value);
        return this
    }
    enter_password(value){
        const password = cy.get('input[id=Password]');
        password.clear();
        password.type(value);
        return this
    }
     sing_in_btn_click(){
        cy.get('button[id=sign_in_button').click();
    }
    verify_title(value){
        cy.title().should('eq', value)
    }
}

export default LoginPage