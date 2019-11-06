package com.example.virtual_snkrs.Services;

import com.example.virtual_snkrs.Config.IAuthentication;
import com.example.virtual_snkrs.Controllers.SecurityController;
import com.example.virtual_snkrs.Models.Sneakers;
import com.example.virtual_snkrs.Models.User;
import com.example.virtual_snkrs.Repositories.SneakersRepository;
import com.example.virtual_snkrs.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class SneakersServiceImpl implements SneakersService{

    @Autowired
    SneakersRepository sneakersRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;

    @Autowired
    private IAuthentication authImpl;

    @Autowired
    SecurityController securityController;

    @Override
    public Iterable<Sneakers> listAllSneakers(){
        return sneakersRepository.findAll();
    }

    @Override
    public Iterable<Sneakers> listUsersSneakers() {
        Long userId = userRepository.findByUsername(securityController.getCurrentUsername()).getId();
        return sneakersRepository.findByUserId(userId);
    }

    @Override
    public Sneakers createSneakers(Sneakers newSneakers){
        Authentication auth = authImpl.getAuthentication();
        User user = userService.getUser(auth.getName());
        newSneakers.setUser(user);
        user.addSneakers(newSneakers);
        return sneakersRepository.save(newSneakers);
    }

    @Override
    @Transactional
    public ResponseEntity deleteSneakersById(Long sneakersId){

        Sneakers sneakers = sneakersRepository.findById(sneakersId).get();
        Authentication auth = authImpl.getAuthentication();
        Long currUserId = userService.getUser(auth.getName()).getId();
        Long sneakUserId = sneakers.getUser().getId();
        User user = userRepository.findById(sneakers.getUser().getId()).get();

        if(currUserId==sneakUserId){
            user.getSneakers().remove(sneakers);
        }else {
            return new ResponseEntity(HttpStatus.NOT_ACCEPTABLE);
        }
        return new ResponseEntity(HttpStatus.OK);
    }
}
