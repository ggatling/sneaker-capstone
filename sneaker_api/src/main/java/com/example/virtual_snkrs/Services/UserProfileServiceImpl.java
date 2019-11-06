package com.example.virtual_snkrs.Services;

import com.example.virtual_snkrs.Config.IAuthentication;
import com.example.virtual_snkrs.Models.User;
import com.example.virtual_snkrs.Models.UserProfile;
import com.example.virtual_snkrs.Repositories.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
public class UserProfileServiceImpl implements UserProfileService{
    @Autowired
    UserProfileRepository userProfileRepository;

    @Autowired
    UserService userService;

    @Autowired
    IAuthentication authImpl;

    @Override
    public UserProfile updateUserProfile(UserProfile newProfile) {
        Authentication auth = authImpl.getAuthentication();
        User user = userService.getUser(auth.getName());
        if(newProfile.getEmail()!=null){
            user.getUserProfile().setEmail(newProfile.getEmail().toString());
        }
        if(newProfile.getCity()!=null){
            user.getUserProfile().setCity(newProfile.getCity().toString());
        }
        if(newProfile.getState()!=null){
            user.getUserProfile().setState(newProfile.getState().toString());
        }
        if(newProfile.getZipcode()!=null){
            user.getUserProfile().setZipcode(newProfile.getZipcode().toString());
        }
        return userProfileRepository.save(user.getUserProfile());
    }

    @Override
    public UserProfile getUserProfile() {
        Authentication auth = authImpl.getAuthentication();
        User user = userService.getUser(auth.getName());
        return userProfileRepository.findById(user.getUserProfile().getId()).get();
    }
}
