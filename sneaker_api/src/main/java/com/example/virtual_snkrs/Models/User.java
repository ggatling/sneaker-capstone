package com.example.virtual_snkrs.Models;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="users")
public class User {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    @Column(unique = true)
    private String username;

    @Column
    private String password;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name ="user_profile_id")
    private UserProfile userProfile;

    @OneToMany(
            mappedBy = "user",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    @JsonIgnore
    private List<Sneakers> sneaker;

    @OneToMany(
            mappedBy = "user",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )

    @JsonIgnore
    private List<Clothes> clothing;

    @OneToMany(
            mappedBy = "user",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )



    public Long getId(){
        return id;
    }

    public void setId(Long id){
        this.id =id;
    }
    public String getUsername(){
        return username;
    }
    public void setUsername(String username){
        this.username =username;
    }

    public String getPassword(){
        return password;
    }

    public void setPassword(String password){
        this.password = password;
    }

    public List<Sneakers> getSneakers() {
        return sneaker;
    }

    public List<Clothes> getClothes() {
        return clothing;
    }
    public UserProfile getUserProfile() {
        return userProfile;
    }

    public void setUserProfile(UserProfile userProfile) {
        this.userProfile = userProfile;
    }

    public List<Sneakers> addSneakers(Sneakers sneakers){
        if (sneaker==null ){
            sneaker = new ArrayList<>();
        }
        sneaker.add(sneakers);

        return sneaker;
    }

    public List<Clothes> addClothes(Clothes clothes){
        if (clothing==null ){
            clothing = new ArrayList<>();
        }
        clothing.add(clothes);

        return clothing;
    }
}
