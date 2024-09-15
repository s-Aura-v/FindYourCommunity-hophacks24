package com.Hop_Hacks2024.FindMyCommunityBackend.Service;

import com.Hop_Hacks2024.FindMyCommunityBackend.Model.User;
import com.Hop_Hacks2024.FindMyCommunityBackend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    private MongoTemplate mongoTemplate;


    @Autowired
    public UserService(UserRepository userRepository, MongoTemplate mongoTemplate) {
        this.userRepository = userRepository;
        this.mongoTemplate = mongoTemplate;
    }

    public User findUserByEmail(HashMap<String, String> user) {
        Optional<User> checkUser = userRepository.findByEmail(user.get("email"));
        System.out.println(user);
        if (checkUser.isPresent()){
            return checkUser.get();
        } else {
            return userRepository.save(new User(user.get("name"), user.get("email")));
        }
    }

    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    public User changePermissions(String userId) {

        System.out.println(userId);
        User user = userRepository.findById(userId).orElse(null);


        assert user != null;
        mongoTemplate.update(User.class)
                    .matching(Criteria.where("id").is(userId))
                    .apply(new Update().set("isAdmin", !user.isAdmin()))
                    .first();

        return null;
    }

    public User getAdminStatus(String userEmail) {
        return userRepository.findByEmail(userEmail).orElse(null);
    }
}
