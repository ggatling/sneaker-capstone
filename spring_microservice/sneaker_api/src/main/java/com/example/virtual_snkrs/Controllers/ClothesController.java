package com.example.virtual_snkrs.Controllers;

import com.example.virtual_snkrs.Models.Clothes;
import com.example.virtual_snkrs.Repositories.ClothesRepository;
import com.example.virtual_snkrs.Repositories.UserRepository;
import com.example.virtual_snkrs.Services.ClothesService;
import com.example.virtual_snkrs.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
public class ClothesController {
    @Autowired
    ClothesService clothesService;

    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ClothesRepository clothesRepository;

    //List all clothes
    @GetMapping("/clothes/list/all")
    public Iterable<Clothes> listAllClothes(){ return clothesService.listAllClothes(); }

    //Create new clothes
    @PostMapping("/clothes")
    public Clothes createClothes(@RequestBody Clothes newClothes){
        return clothesService.createClothes(newClothes);
    }

    //List clothes by user
    @GetMapping("/clothes/list")
    public Iterable<Clothes> listClothesByUser(){
        return clothesService.listUsersClothes();
    }

    @DeleteMapping("/clothes/{clothesId}")
    public ResponseEntity deletePostById(@PathVariable Long clothesId) {
        return clothesService.deleteClothesById(clothesId);
    }
}
