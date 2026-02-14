package tests.utils;

import com.google.gson.*;
import java.io.FileReader;

public class JsonUtils {

    public static JsonArray users() throws Exception {
        return JsonParser.parseReader(
                new FileReader("src/test/resources/data/users.json")
        ).getAsJsonArray();
    }
}
