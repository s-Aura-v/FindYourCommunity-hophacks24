package com.Hop_Hacks2024.FindMyCommunityBackend.Service;

import com.Hop_Hacks2024.FindMyCommunityBackend.Model.Event;
import com.Hop_Hacks2024.FindMyCommunityBackend.Repository.EventRepository;
import com.Hop_Hacks2024.FindMyCommunityBackend.Repository.UserRepository;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;



@Service
public class EventService {
    private final MongoTemplate mongoTemplate;
    private EventRepository eventRepository;
    private UserRepository userRepository;

    @Autowired
    public EventService(EventRepository eventRepository, UserRepository userRepository, MongoTemplate mongoTemplate) {
        this.eventRepository = eventRepository;
        this.userRepository = userRepository;
        this.mongoTemplate = mongoTemplate;
    }

    public List<Event> getAllEvents(){

        LocalDate today = LocalDate.now();
        Query query = new Query()
                .with(Sort.by(Sort.Direction.DESC, "dateField"));

        List<Event> events10 =  mongoTemplate.find(query, Event.class);

        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        // Sort events based on the date field
        List<Event> futureEvents = events10.stream()
                .filter(event -> {
                    LocalDate eventDate = LocalDate.parse(event.getDate(), dateFormatter);
                    return !eventDate.isBefore(today); // Only include events from today onwards
                })
                .sorted((e1, e2) -> {
                    LocalDate date1 = LocalDate.parse(e1.getDate(), dateFormatter);
                    LocalDate date2 = LocalDate.parse(e2.getDate(), dateFormatter);
                    return date1.compareTo(date2); // Sort events by date
                })
                .collect(Collectors.toList());

        return futureEvents;
    }

    public void deleteAllEvents(){
        eventRepository.deleteAll();
    }

    public void deleteEventById(String id){
        eventRepository.deleteById(id);
    }

    public Optional<Event> findEventById(String id){
        return eventRepository.findById(id);
    }

    public Event createEvent(HashMap<String, String> body) {
        System.out.println(body);
        Event event = new Event(
                body.get("eventName"),
                body.get("description"),
                Integer.parseInt(body.get("maxParticipants")),
                body.get("date"),
                body.get("timeStart"),
                body.get("timeEnd"),
                userRepository.findByEmail(body.get("email")).get().getId(),
                body.get("tag"),
                body.get("latitude"),
                body.get("longitude")
        );

        eventRepository.save(event);
        return event;
    }

}

