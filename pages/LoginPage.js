export class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailField = 'input[type="email"]';
        this.passwordField = 'input[type="password"]';
        this.submitButton = 'button[type="submit"]';
    }

    async open() {
        await this.page.goto('https://sweetshop.netlify.app/login');
    }

    async login(email, password) {
        await this.page.fill(this.emailField, email);
        await this.page.fill(this.passwordField, password);
        await this.page.click(this.submitButton);
    }
}