package com.example.virtual_snkrs.Controllers;

import com.example.virtual_snkrs.Config.IAuthentication;
import com.example.virtual_snkrs.Config.JwtResponse;
import com.example.virtual_snkrs.Models.Clothes;
import com.example.virtual_snkrs.Models.Sneakers;
import com.example.virtual_snkrs.Models.User;
import com.example.virtual_snkrs.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    private IAuthentication authImpl;

    @GetMapping("/hello")
    public String helloWorld(){ return "Hello World!"; }

    @GetMapping("/username")
    @ResponseBody
    public String getCurrentUsername(){
        Authentication auth = authImpl.getAuthentication();
        return auth.getName();
    }
    @GetMapping("/user/list")
    public Iterable<User> listUsers(){ return userService.listUsers(); }

    @GetMapping("/user/{username}/sneakers")
    public Iterable<Sneakers> listUserSneakers(@PathVariable String username){ return userService.listUserSneakers(username); }

    @GetMapping("/user/{username}/clothes")
    public Iterable<Clothes> listUserClothes(@PathVariable String username){ return userService.listUserClothes(username); }

    @PostMapping("/signup")
    public ResponseEntity<?> createUser(@RequestBody User newUser){
        return ResponseEntity.ok(new JwtResponse(userService.createUser(newUser)));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        return ResponseEntity.ok(new JwtResponse(userService.login(user)));
    }
}
