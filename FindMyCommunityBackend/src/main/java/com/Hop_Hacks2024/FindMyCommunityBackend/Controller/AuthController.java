package com.Hop_Hacks2024.FindMyCommunityBackend.Controller;

import com.Hop_Hacks2024.FindMyCommunityBackend.Model.User;
import com.Hop_Hacks2024.FindMyCommunityBackend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private UserService userService;

    @Autowired
    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/checkUser")
    public ResponseEntity<User> checkUser(@RequestBody HashMap<String, String> user) {
        System.out.println("checking User");
        User userOutput = userService.findUserByEmail(user);
        System.out.println(userOutput);
        return ResponseEntity.ok(userOutput);
    }



}
