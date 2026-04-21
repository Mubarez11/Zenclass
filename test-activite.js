const { chromium } = require('playwright-core');

async function testPage(url, name) {
    console.log(`\n=== TEST: ${name} ===`);
    console.log(`URL: ${url}`);
    
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    
    const errors = [];
    page.on('console', msg => {
        if (msg.type() === 'error') {
            errors.push(`[${msg.type()}] ${msg.text()}`);
        }
    });
    
    page.on('pageerror', error => {
        errors.push(`[PAGE ERROR] ${error.message}`);
    });
    
    try {
        await page.goto(url, { waitUntil: 'networkidle' });
        await page.waitForTimeout(3000);
        
        // Screenshot
        const screenshotPath = `C:/Users/moham/Desktop/zenclass2/test-${name}.png`;
        await page.screenshot({ path: screenshotPath, fullPage: true });
        console.log(`Screenshot saved: ${screenshotPath}`);
        
        // Vérifier le hero
        const hero = await page.$('.hero-activite, .hero, [class*="hero"]');
        console.log(`Hero found: ${hero ? 'YES' : 'NO'}`);
        
        // Vérifier badge
        const badge = await page.$('.badge, [class*="badge"]');
        console.log(`Badge found: ${badge ? 'YES' : 'NO'}`);
        
        // Vérifier pills
        const pills = await page.$$('.pill, [class*="pill"]');
        console.log(`Pills found: ${pills.length}`);
        
        // Vérifier illustration
        const illustration = await page.$('.illustration, [class*="illustration"], img');
        console.log(`Illustration found: ${illustration ? 'YES' : 'NO'}`);
        
        // Vérifier hover-slat-btn
        const hoverBtn = await page.$('.hover-slat-btn, [class*="hover-slat-btn"]');
        console.log(`Hover-slat-btn found: ${hoverBtn ? 'YES' : 'NO'}`);
        
        // Vérifier stepper
        const stepper = await page.$('.stepper, [class*="stepper"]');
        console.log(`Stepper found: ${stepper ? 'YES' : 'NO'}`);
        
        // Vérifier pager
        const pager = await page.$('.pager, [class*="pager"]');
        console.log(`Pager found: ${pager ? 'YES' : 'NO'}`);
        
        // Vérifier modules
        const modules = await page.$$('.module, [class*="module"], .activity-module');
        console.log(`Modules found: ${modules.length}`);
        
        // Tester le clic sur un module
        if (modules.length > 0) {
            try {
                await modules[0].click();
                await page.waitForTimeout(500);
                console.log('Module click: SUCCESS');
            } catch (e) {
                console.log(`Module click: FAILED - ${e.message}`);
            }
        }
        
        // Erreurs console
        if (errors.length > 0) {
            console.log(`\nConsole errors (${errors.length}):`);
            errors.forEach(err => console.log(`  - ${err}`));
        } else {
            console.log('\nConsole errors: NONE');
        }
        
        console.log(`\nStatus: ${errors.length === 0 ? 'OK' : 'ERREUR'}`);
        
    } catch (e) {
        console.log(`\nNavigation error: ${e.message}`);
        console.log(`Status: ERREUR`);
    }
    
    await browser.close();
}

(async () => {
    await testPage(
        'file:///C:/Users/moham/Desktop/zenclass2/activite.html?axe=axe-2&objectif=obj-3&activite=1',
        'module-pathway'
    );
    
    await testPage(
        'file:///C:/Users/moham/Desktop/zenclass2/activite.html?axe=axe-2&objectif=obj-2&activite=1',
        'module-sort'
    );
})();
