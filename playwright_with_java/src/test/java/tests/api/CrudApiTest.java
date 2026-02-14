package tests.api;

import com.microsoft.playwright.*;
import com.microsoft.playwright.options.RequestOptions;
import org.junit.jupiter.api.*;

import java.util.Base64;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

public class CrudApiTest {

    static APIRequestContext api;
    static final String BASE = "https://postman-echo.com";

    @BeforeAll
    static void setup() {

        Playwright pw = Playwright.create();

        api = pw.request().newContext(
                new APIRequest.NewContextOptions()
                        .setIgnoreHTTPSErrors(true)   // <=== IMPORTANT
        );
    }


    @AfterAll
    static void tearDown() {
        api.dispose();
    }

    @Test
    void basicAuth() {
        String creds = Base64.getEncoder()
                .encodeToString("postman:password".getBytes());

        APIResponse res = api.get(BASE + "/basic-auth",
                RequestOptions.create()
                        .setHeader("Authorization", "Basic " + creds));

        assertEquals(200, res.status());
    }

    @Test
    void bearerAuth() {
        APIResponse res = api.get(BASE + "/headers",
                RequestOptions.create()
                        .setHeader("Authorization", "Bearer token"));

        assertEquals(200, res.status());
    }

    @Test
    void postJson() {
        APIResponse res = api.post(BASE + "/post",
                RequestOptions.create()
                        .setData(Map.of("key","value")));

        assertEquals(200, res.status());
    }

    @Test
    void unauthorized() {
        APIResponse res = api.get(BASE + "/basic-auth",
                RequestOptions.create().setFailOnStatusCode(false));

        assertEquals(401, res.status());
    }
}
