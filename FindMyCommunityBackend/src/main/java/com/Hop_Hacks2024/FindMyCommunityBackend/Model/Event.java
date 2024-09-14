package com.Hop_Hacks2024.FindMyCommunityBackend.Model;
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
    private String ownerSub;

    public Event(String name, int max_participants, String location, LocalDateTime date, String ownerSub) {
        this.name = name;
        this.max_participants = max_participants;
        this.location = location;
        this.date = date;
        this.ownerSub = ownerSub;
    }
}
