package com.example.virtual_snkrs.Controllers;

import com.example.virtual_snkrs.Config.IAuthentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

@Component
public class SecurityController {

    //to get the current user in the bean
    @Autowired
    private IAuthentication iauthentication;


    public String getCurrentUsername() {
        Authentication authentication = iauthentication.getAuthentication();
        return authentication.getName();
    }
}
