package com.example.virtual_snkrs.Services;

import com.example.virtual_snkrs.Models.Sneakers;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public interface SneakersService {

    //Get All sneakers
    public Iterable<Sneakers> listAllSneakers();

    //Get All sneakers by user
    public Iterable<Sneakers> listUsersSneakers();

    //Add a new sneaker
    public Sneakers createSneakers(Sneakers newSneakers);

    //Delete sneakers
    public ResponseEntity deleteSneakersById(Long sneakersId);
}
