package com.example.virtual_snkrs.Controllers;

import com.example.virtual_snkrs.Models.Sneakers;
import com.example.virtual_snkrs.Repositories.SneakersRepository;
import com.example.virtual_snkrs.Repositories.UserRepository;
import com.example.virtual_snkrs.Services.SneakersService;
import com.example.virtual_snkrs.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class SneakersController {

    @Autowired
    SneakersService sneakersService;

    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepository;

    @Autowired
    SneakersRepository sneakersRepository;

    @GetMapping("/sneakers/list/all")
    public Iterable<Sneakers> listAllSneakers(){ return sneakersService.listAllSneakers(); }

    @PostMapping("/sneakers")
    public Sneakers createSneakers(@RequestBody Sneakers newSneakers){
        return sneakersService.createSneakers(newSneakers);
    }

    //List sneakers by user
    @GetMapping("/sneakers/list")
    public Iterable<Sneakers> listSneakersByUser(){
        return sneakersService.listUsersSneakers();
    }

    //Delete sneakers
    @DeleteMapping("/sneakers/{sneakersId}")
    public ResponseEntity deletePostById(@PathVariable Long sneakersId) {
        return sneakersService.deleteSneakersById(sneakersId);
    }

}
