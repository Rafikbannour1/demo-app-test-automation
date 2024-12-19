const { Given, When, Then } = require('@cucumber/cucumber');
const MenuPage = require('../../pages/menu.page');

// Définition des étapes
Given("l'application est lancée et que je suis sur la page d'accueil", async () => {
    await MenuPage.launchApp();
});

When("je clique sur le bouton menu", async () => {
    await MenuPage.clickMenuButton();
   
});


