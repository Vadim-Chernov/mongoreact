package cvr.otus.mongoreact.utils;

public class ValueLabel{
    private final String value;
    private final String label;

    public ValueLabel(String value) {
        this.value = value;
        this.label = value;
    }

    public String getValue() {
        return value;
    }

    public String getLabel() {
        return label;
    }
}
