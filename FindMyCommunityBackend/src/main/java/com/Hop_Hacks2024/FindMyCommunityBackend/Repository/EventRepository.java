package com.Hop_Hacks2024.FindMyCommunityBackend.Repository;

import com.Hop_Hacks2024.FindMyCommunityBackend.Model.Event;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends MongoRepository<Event,String> {

}
