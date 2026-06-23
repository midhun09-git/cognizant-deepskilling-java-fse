package com.cognizant.slf4j;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {

    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {

        logger.info("Application started");

        int age = 15;

        if (age < 18) {
            logger.warn("User age is below 18. Access may be restricted.");
        }

        try {
            int result = 10 / 0;
            System.out.println(result);
        } catch (ArithmeticException exception) {
            logger.error("An error occurred: Division by zero", exception);
        }

        logger.info("Application ended");
    }
}