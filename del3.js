// Title.java
public abstract class Title {
    protected String title;
    protected String literatureType;
    protected int copies;
    protected static final double RATE = 0.067574;

    public Title(String title, String literatureType, int copies) {
    this.title = title;
    this.literatureType = literatureType;
    this.copies = copies;
}

public abstract double calculatePoints();

public double calculateRoyalties() {
    return calculatePoints() * RATE;
}

protected double getLiteratureTypeMultiplier() {
    switch (literatureType) {
        case "BI":
            return 3.0;
        case "TE":
            return 3.0;
        case "LYRIK":
            return 6.0;
        case "SKØN":
            return 1.7;
        case "FAG":
            return 1.0;
        default:
            return 1.0;  // Default if literatureType doesn't match
    }
}
}
