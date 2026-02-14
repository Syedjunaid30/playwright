plugins {
    java
}

repositories {
    mavenCentral()
}

dependencies {
    testImplementation("com.microsoft.playwright:playwright:1.42.0")
    testImplementation("org.junit.jupiter:junit-jupiter:5.10.0")
    implementation("com.google.code.gson:gson:2.10.1")
}

tasks.test {
    useJUnitPlatform()
}
