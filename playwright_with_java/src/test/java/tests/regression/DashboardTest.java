
package tests.regression;

import com.microsoft.playwright.*;
import org.example.config.EnvConfig;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class DashboardTest {

    @Test
    void dashboard() {

        try (Playwright playwright = Playwright.create()) {

            Browser browser = playwright.chromium().launch();
            Page page = browser.newPage();

            page.navigate(EnvConfig.get("BASE_URL"));

            page.fill("#user-name", "standard_user");
            page.fill("#password", "secret_sauce");
            page.click("#login-button");

            assertTrue(page.url().contains("inventory"));

            assertEquals(6, page.locator(".inventory_item").count());
        }
    }
}
