package com.Hop_Hacks2024.FindMyCommunityBackend.Service;

import com.Hop_Hacks2024.FindMyCommunityBackend.Model.User;
import com.Hop_Hacks2024.FindMyCommunityBackend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
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
}
