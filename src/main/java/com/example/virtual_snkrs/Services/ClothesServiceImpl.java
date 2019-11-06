package com.example.virtual_snkrs.Services;

import com.example.virtual_snkrs.Controllers.SecurityController;
import com.example.virtual_snkrs.Config.IAuthentication;
import com.example.virtual_snkrs.Models.Clothes;
import com.example.virtual_snkrs.Models.User;
import com.example.virtual_snkrs.Repositories.ClothesRepository;
import com.example.virtual_snkrs.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class ClothesServiceImpl implements ClothesService {
    @Autowired
    ClothesRepository clothesRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    private IAuthentication authImpl;

    @Autowired
    UserService userService;

    @Autowired
    SecurityController securityController;

    @Override
    public Iterable<Clothes> listAllClothes(){
        return clothesRepository.findAll();
    }

    @Override
    public Iterable<Clothes> listUsersClothes() {
        Long userId = userRepository.findByUsername(securityController.getCurrentUsername()).getId();
        return clothesRepository.findByUserId(userId);
    }

    @Override
    public Clothes createClothes(Clothes newClothes){
        Authentication auth = authImpl.getAuthentication();
        User user = userService.getUser(auth.getName());
        newClothes.setUser(user);
        user.addClothes(newClothes);
        return clothesRepository.save(newClothes);
    }

    @Override
    @Transactional
    public ResponseEntity deleteClothesById(Long clothesId){

        Clothes clothes = clothesRepository.findById(clothesId).get();
        Authentication auth = authImpl.getAuthentication();
        Long currUserId = userService.getUser(auth.getName()).getId();
        Long clothesUserId = clothes.getUser().getId();
        User user = userRepository.findById(clothes.getUser().getId()).get();

        if(currUserId==clothesUserId){
            user.getClothes().remove(clothes);
        }else {
            return new ResponseEntity(HttpStatus.NOT_ACCEPTABLE);
        }
        return new ResponseEntity(HttpStatus.OK);

    }
}
