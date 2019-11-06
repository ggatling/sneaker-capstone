package com.example.virtual_snkrs.Services;

import com.example.virtual_snkrs.Models.UserProfile;
import org.springframework.stereotype.Service;

@Service
public interface UserProfileService {
    public UserProfile updateUserProfile(UserProfile newProfile);

    public UserProfile getUserProfile();
}
