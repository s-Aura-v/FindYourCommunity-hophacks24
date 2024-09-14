package com.Hop_Hacks2024.FindMyCommunityBackend.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@Document(collection = "Users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    private String id;
    private String name;
    private String email;
    private boolean isAdmin;
    private ArrayList<String> ownedEventIds;
    private ArrayList<String> userEventIds;

    public User(String name, String email) {
        this.name = name;
        this.email = email;
        this.isAdmin = false;
        this.ownedEventIds = new ArrayList<>();
        this.userEventIds = new ArrayList<>();
    }
}
