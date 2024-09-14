package Controller;
import Model.Event;
import Service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.time.Month;

@RestController

public class EventController {
    private final EventService eventService;

    @Autowired
    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("/events")
    public Iterable<Event> getAllEvents() {
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
