export class HomePage {
    constructor(page) {
        this.page = page;
        this.browseSweetsButton = 'a.sweets';
        this.basketLink = 'a[href="/basket"]';
        this.loginLink = 'a[href="/login"]';
    }

    async open() {
        await this.page.goto('https://sweetshop.netlify.app/');
    }

    async clickBrowseSweets() {
        await this.page.click(this.browseSweetsButton);
    }

    async goToBasket() {
        await this.page.click(this.basketLink);
    }

    async goToLogin() {
        await this.page.click(this.loginLink);
    }
}