package hooks;

import com.microsoft.playwright.*;

import java.nio.file.Paths;

public class GlobalSetup {

    public static void main(String[] args) {

        try (Playwright playwright = Playwright.create()) {

            Browser browser = playwright.chromium().launch(
                    new BrowserType.LaunchOptions().setHeadless(false)
            );

            Page page = browser.newPage();

            page.navigate("https://www.saucedemo.com");

            page.locator("#user-name").fill("standard_user");
            page.locator("#password").fill("secret_sauce");
            page.locator("#login-button").click();

            page.waitForURL("**/inventory.html");

            // Save auth state (THIS CREATES auth.json)
            page.context().storageState(
                    new BrowserContext.StorageStateOptions()
                            .setPath(Paths.get("auth.json"))
            );

            browser.close();
        }
    }
}
