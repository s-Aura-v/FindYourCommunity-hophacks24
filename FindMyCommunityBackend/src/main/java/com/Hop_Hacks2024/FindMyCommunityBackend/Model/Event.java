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
    private String description;
    private int max_participants;
    private String date;
    private String timeStart;
    private String timeEnd;
    private String ownerId;
    private String tag;
    private String latitude;
    private String longitude;


    public Event(String name, String description, int max_participants, String date, String timeStart, String timeEnd, String ownerId, String tag, String latitude, String longitude) {
        this.name = name;
        this.description = description;
        this.tag = tag;
        this.date = date;
        this.max_participants = max_participants;
        this.timeStart = timeStart;
        this.timeEnd = timeEnd;
        this.ownerId = ownerId;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
