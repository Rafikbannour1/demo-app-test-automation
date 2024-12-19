describe('Test pour cliquer sur le bouton menu et vérifier Catalog', () => {
    it('Devrait cliquer sur le bouton menu et afficher Catalog', async () => {
        // XPath pour le bouton menu
        const MENU_BUTTON = '//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView';

        // XPath pour l'élément contenant "Catalog"
        const CATALOG_ELEMENT = '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]';

        // Étape 1 : Attendre que le bouton menu soit affiché
        const menuButton = await $(MENU_BUTTON);
        await menuButton.waitForDisplayed({ timeout: 10000 });
        console.log('Bouton menu trouvé.');

        // Étape 2 : Cliquer sur le bouton menu
        await menuButton.click();
        console.log('Le bouton menu a été cliqué.');

        // Étape 3 : Attendre que l'élément "Catalog" soit affiché
        const catalogElement = await $(CATALOG_ELEMENT);
        await catalogElement.waitForDisplayed({ timeout: 10000 }); // Timeout de 10 secondes pour attendre l'affichage
        console.log('L\'élément "Catalog" est affiché.');

        // Étape 4 : Vérifier que l'élément contient bien le texte "Catalog"
        const catalogText = await catalogElement.getText(); // Récupérer le texte de l'élément
        if (catalogText === 'Catalog') {
            console.log('Validation réussie : L\'élément affiche bien le texte "Catalog".');
        } else {
            console.error(`Validation échouée : Texte attendu "Catalog", mais obtenu "${catalogText}".`);
        }
    });
});
