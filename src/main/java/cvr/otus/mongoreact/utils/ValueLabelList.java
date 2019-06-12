package cvr.otus.mongoreact.utils;

import java.util.ArrayList;
import java.util.List;

public class ValueLabelList extends ArrayList<ValueLabel> {
    List<String> list = new ArrayList<>();

    public void add(String item) {
        if(item==null)
            return;
        String[] split = item.split(",");
        for (String str : split) {
            if (list.contains(str))
                continue;
            list.add(str);
            super.add(new ValueLabel(str));
        }
    }
}
