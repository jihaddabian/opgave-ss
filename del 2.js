// Author.java
import java.util.ArrayList;
import java.util.List;

public class Author {
    private String name;
    private List<Title> titles = new ArrayList<>();

    public Author(String name) {
    this.name = name;
}

public void addTitle(Title title) {
    titles.add(title);
}

public double calculateTotalPay() {
    double total = 0;
    for (Title title : titles) {
        total += title.calculateRoyalties();
    }
    return total;
}

public String getName() {
    return name;
}
}
