package tests.utils;

import com.microsoft.playwright.*;

import java.nio.file.Paths;

public class AuthSetup {

    public static void main(String[] args) {

        try (Playwright playwright = Playwright.create()) {

            Browser browser = playwright.chromium().launch(
                    new BrowserType.LaunchOptions().setHeadless(false)
            );

            BrowserContext context = browser.newContext();
            Page page = context.newPage();

            // Navigate to login page
            page.navigate("https://www.saucedemo.com/");

            // Login
            page.fill("#user-name", "standard_user");
            page.fill("#password", "secret_sauce");
            page.click("#login-button");

            // Wait until dashboard loads
            page.waitForURL("**/inventory.html");

            // Save auth state
            context.storageState(
                    new BrowserContext.StorageStateOptions()
                            .setPath(Paths.get("auth.json"))
            );

            System.out.println("auth.json created successfully ✅");

            browser.close();
        }
    }
}
