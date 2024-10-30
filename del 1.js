// LibraryRoyaltyCalculator.java
import java.util.ArrayList;
import java.util.List;

public class LibraryRoyaltyCalculator {

    public static void main(String[] args) {
    // Create an author
    Author author = new Author("Sussi Bech");

    // Add some books (PrintedBook and AudioBook)
    author.addTitle(new PrintedBook("Comic Book", "TE", 140, 72));
    author.addTitle(new AudioBook("Romantic Audiobook", "SKØN", 10, 400));

    // Calculate total pay for the author
    double totalPay = author.calculateTotalPay();

    // Print result formatted to 2 decimal places
    System.out.printf("%s: %.2f kr%n", author.getName(), totalPay);
}
}
