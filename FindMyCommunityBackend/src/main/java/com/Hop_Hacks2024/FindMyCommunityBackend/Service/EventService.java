package com.Hop_Hacks2024.FindMyCommunityBackend.Service;

import com.Hop_Hacks2024.FindMyCommunityBackend.Model.Event;
import com.Hop_Hacks2024.FindMyCommunityBackend.Repository.EventRepository;
import com.Hop_Hacks2024.FindMyCommunityBackend.Repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;



@Service
public class EventService {
    private EventRepository eventRepository;
    private UserRepository userRepository;

    @Autowired
    public EventService(EventRepository eventRepository, UserRepository userRepository) {
        this.eventRepository = eventRepository;
        this.userRepository = userRepository;
    }

    public List<Event> getAllEvents(){
        return eventRepository.findAll();
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

