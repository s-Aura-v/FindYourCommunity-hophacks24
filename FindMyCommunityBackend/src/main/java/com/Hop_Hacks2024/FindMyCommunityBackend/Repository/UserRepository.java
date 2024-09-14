package com.Hop_Hacks2024.FindMyCommunityBackend.Repository;

import com.Hop_Hacks2024.FindMyCommunityBackend.Model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByEmail(String email);
}
