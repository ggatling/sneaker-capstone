package com.example.virtual_snkrs.Services;

import com.example.virtual_snkrs.Models.Clothes;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public interface ClothesService {
    //List all clothes
    public Iterable<Clothes> listAllClothes();

    //List clothes by user
    public Iterable<Clothes> listUsersClothes();

    //create clothes
    public Clothes createClothes(Clothes newClothes);

    //delete clothes
    public ResponseEntity deleteClothesById(Long clothesId);
}
