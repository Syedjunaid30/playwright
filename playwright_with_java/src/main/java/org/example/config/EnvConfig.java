package org.example.config;

import java.io.FileInputStream;
import java.util.Properties;

public class EnvConfig {

    public static String get(String key) {
        try {
            Properties prop = new Properties();
            prop.load(new FileInputStream("src/test/resources/env/qa.properties"));
            return prop.getProperty(key);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
