package com.cognizant.dsa.forecasting;

public class FinancialForecastTest {

    public static double calculateFutureValue(double currentValue, double growthRate, int years) {

        if (years == 0) {
            return currentValue;
        }

        return calculateFutureValue(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {

        double currentValue = 10000;
        double growthRate = 0.10;
        int years = 3;

        double futureValue = calculateFutureValue(currentValue, growthRate, years);

        System.out.println("Financial Forecasting Result");
        System.out.println("Current Value: " + currentValue);
        System.out.println("Growth Rate: " + (growthRate * 100) + "%");
        System.out.println("Years: " + years);
        System.out.println("Future Value: " + futureValue);

        System.out.println();
        System.out.println("Analysis:");
        System.out.println("This program uses recursion to calculate future value.");
        System.out.println("Time Complexity: O(n), where n is the number of years.");
        System.out.println("Space Complexity: O(n), due to recursive function calls.");
        System.out.println("Optimization: We can use iteration or formula-based calculation to reduce extra recursive call memory.");
    }
}