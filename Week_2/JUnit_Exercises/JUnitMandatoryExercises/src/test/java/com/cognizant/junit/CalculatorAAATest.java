package com.cognizant.junit;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class CalculatorAAATest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup completed before test");
    }

    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Cleanup completed after test");
    }

    @Test
    public void testAdditionUsingAAA() {

        // Arrange
        int number1 = 10;
        int number2 = 5;
        int expectedResult = 15;

        // Act
        int actualResult = calculator.add(number1, number2);

        // Assert
        assertEquals(expectedResult, actualResult);
    }

    @Test
    public void testSubtractionUsingAAA() {

        // Arrange
        int number1 = 10;
        int number2 = 5;
        int expectedResult = 5;

        // Act
        int actualResult = calculator.subtract(number1, number2);

        // Assert
        assertEquals(expectedResult, actualResult);
    }
}