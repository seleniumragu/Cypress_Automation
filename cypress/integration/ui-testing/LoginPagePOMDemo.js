import LoginPage from "../page_objects/LoginPage";

describe('Login Page POM Demo', () => {
    it('verify login page POM', () => {
        const login_page = new LoginPage();
        login_page.visit();
        login_page.user_icon_image_click();
        login_page.verify_url_text();
        login_page.enter_username("austin-test@mailinator.com");
        login_page.enter_password("testpass");
        login_page.sing_in_btn_click();
        login_page.verify_title("iHerb.com - Vitamins, Supplements & Natural Health Products")
    });
});