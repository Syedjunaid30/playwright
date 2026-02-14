
package pages;

import com.microsoft.playwright.Page;

import static org.junit.jupiter.api.Assertions.*;

public class LoginPage {

    private final Page page;

    public LoginPage(Page page) {
        this.page = page;
    }

    public void open(String url) {
        page.navigate(url);
        assertTrue(page.locator("#user-name").isVisible());
    }

    public void login(String user, String pass) {
        page.fill("#user-name", user);
        page.fill("#password", pass);
        page.click("#login-button");

        assertTrue(page.url().contains("inventory"));
    }
}
