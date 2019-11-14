package com.example.virtual_snkrs.Services;
import com.example.virtual_snkrs.Models.Clothes;
import com.example.virtual_snkrs.Models.Sneakers;
import com.example.virtual_snkrs.Models.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
public interface UserService extends UserDetailsService {
    public Iterable<User> listUsers();

    public Iterable<Sneakers> listUserSneakers(String username);

    public Iterable<Clothes> listUserClothes(String username);

    public User getUser(String username);

    public String createUser(User newUser);

    public String login(User user);

}
