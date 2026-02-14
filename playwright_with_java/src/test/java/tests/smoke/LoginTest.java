package tests.smoke;

import com.microsoft.playwright.*;
import org.example.config.EnvConfig;
import org.junit.jupiter.api.Test;

import java.nio.file.Paths;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class LoginTest {

    @Test
    void loginSmoke() {

        try (Playwright playwright = Playwright.create()) {

            Browser browser = playwright.chromium().launch(
                    new BrowserType.LaunchOptions().setHeadless(false)
            );

            // Absolute path for auth.json (VERY IMPORTANT)
            BrowserContext context = browser.newContext(
                    new Browser.NewContextOptions()
                            .setStorageStatePath(
                                    Paths.get(System.getProperty("user.dir"), "auth.json")
                            )
            );

            Page page = context.newPage();

            // Directly open inventory page (already logged in)
            page.navigate(EnvConfig.get("BASE_URL") + "/inventory.html");

            // Assertion – confirm successful login
            assertTrue(page.url().contains("inventory"));

            // Screenshot
            page.screenshot(new Page.ScreenshotOptions()
                    .setPath(Paths.get("screenshots/login.png")));

            browser.close();
        }
    }
}
