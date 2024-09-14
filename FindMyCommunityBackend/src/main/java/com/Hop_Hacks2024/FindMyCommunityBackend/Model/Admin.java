package com.Hop_Hacks2024.FindMyCommunityBackend.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@Document(collection = "Admins")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Admin {
    @Id
    public String id;
    public String name;
    public double showUpRate;
    public ArrayList<Event> upcomingEvents;
    public ArrayList<Event> completedEvents;
}
