package com.Hop_Hacks2024.FindMyCommunityBackend.Controller;

import com.Hop_Hacks2024.FindMyCommunityBackend.Model.User;
import com.Hop_Hacks2024.FindMyCommunityBackend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

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

    @GetMapping("/getAllUsers")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.findAllUsers());
    }

    @PostMapping("/changingAdminPermission")
    public ResponseEntity<User> changingAdminPermission(@RequestBody HashMap<String, String> user) {

        return ResponseEntity.ok(userService.changePermissions(user.get("userId")));

    }

    @PostMapping("/getAdminStatus")
    public ResponseEntity<User> getAdminStatus(@RequestBody HashMap<String, String> user) {
        return ResponseEntity.ok(userService.getAdminStatus(user.get("userEmail")));
    }

}
