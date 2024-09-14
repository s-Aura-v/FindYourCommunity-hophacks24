package com.Hop_Hacks2024.FindMyCommunityBackend.Controller;
import com.Hop_Hacks2024.FindMyCommunityBackend.Model.Event;
import com.Hop_Hacks2024.FindMyCommunityBackend.Service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
public class EventController {
    private final EventService eventService;

    @Autowired
    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("/events")
    public Iterable<Event> getAllEvents() {
        System.out.println("Get all events");
        return eventService.getAllEvents();
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerEvent(String test) {
        Event event = new Event("2134","Daily Review", 20, "Oswego, NY", LocalDateTime.of(2024, 7,3, 15, 5));
        try{
            eventService.saveEvent(event);
            return ResponseEntity.ok("Event registered successfully");

        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Something went wrong");
        }
    }

}
