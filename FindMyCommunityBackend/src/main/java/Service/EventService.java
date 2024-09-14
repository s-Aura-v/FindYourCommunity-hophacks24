package Service;

import Model.Event;
import Repository.EventRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;



@Service
public class EventService {
    private EventRepository eventRepository;

    @Autowired
    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public Event saveEvent(Event reservation){
        return eventRepository.save(reservation);
    }

    public Iterable<Event> getAllEvents(){
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

}

