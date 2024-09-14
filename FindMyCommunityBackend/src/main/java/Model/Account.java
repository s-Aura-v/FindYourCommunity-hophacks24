package Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@Document(collection = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Account {
    @Id
    public String id;
    public String name;
    public double showUpRate;
    public ArrayList<Events> upcomingEvents;
    public ArrayList<Events> completedEvents;
}
