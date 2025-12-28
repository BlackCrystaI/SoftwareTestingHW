export class BasketPage {
    constructor(page) {
        this.page = page;
        this.checkoutButton = 'button:has-text("Continue to checkout")';
    }

    async open() {
        await this.page.goto('https://sweetshop.netlify.app/basket');
    }
}