package Model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;


import java.time.LocalDateTime;
@Data
@Document(collection = "Events")
@NoArgsConstructor
@AllArgsConstructor

public class Event{

    @Id
    private String id;
    private String name;
    private int max_participants;
    private String location;
    @DateTimeFormat(pattern="dd-MM-yyyy HH:mm")
    private LocalDateTime date;
}
