package com.cognizant.dsa.search;

public class SearchTest {

    public static Product linearSearch(Product[] products, int targetId) {
        for (Product product : products) {
            if (product.getProductId() == targetId) {
                return product;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, int targetId) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;

            if (products[mid].getProductId() == targetId) {
                return products[mid];
            } else if (products[mid].getProductId() < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Shoes", "Fashion"),
                new Product(103, "Mobile Phone", "Electronics"),
                new Product(104, "Book", "Education"),
                new Product(105, "Headphones", "Electronics")
        };

        System.out.println("Linear Search Result:");
        Product linearResult = linearSearch(products, 103);

        if (linearResult != null) {
            linearResult.displayProduct();
        } else {
            System.out.println("Product not found");
        }

        System.out.println();

        System.out.println("Binary Search Result:");
        Product binaryResult = binarySearch(products, 104);

        if (binaryResult != null) {
            binaryResult.displayProduct();
        } else {
            System.out.println("Product not found");
        }

        System.out.println();

        System.out.println("Time Complexity Analysis:");
        System.out.println("Linear Search: O(n)");
        System.out.println("Binary Search: O(log n), but array must be sorted by productId");
    }
}