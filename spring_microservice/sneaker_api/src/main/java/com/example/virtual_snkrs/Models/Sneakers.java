package com.example.virtual_snkrs.Models;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import javax.persistence.*;

@Entity
@Table(name="sneakers")
public class Sneakers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String brand;

    @Column
    private String name;

    @Column
    private String gender;

    @Column
    private String size;

    @Column
    private String condition;

    @Column
    private String releaseDate;

    @Column
    private int retailPrice;

    @Column
    private String forSale;

    @Column
    private int resalePrice;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name= "user_id", nullable = false)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private User user;

    public Sneakers(){};

    public Long getId(){
        return id;
    }

    public void setId(Long id) {
        this.id=id;
    }
    public String getBrand(){
        return brand;
    }
    public void setBrand(String brand){
        this.brand = brand;
    }
    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name = name;
    }
    public String getGender(){
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getCondition(){
        return condition;
    }
    public void setCondition(String condition){
        this.condition = condition;
    }
    public String getReleaseDate(){
        return releaseDate;
    }
    public void setReleaseDate(String releaseDate){
        this.releaseDate = releaseDate;
    }
    public int getRetailPrice(){
        return retailPrice;
    }

    public void setRetailPrice(int retailPrice) {
        this.retailPrice = retailPrice;
    }

    public String getForSale() {
        return forSale;
    }

    public void setForSale(String forSale) {
        this.forSale = forSale;
    }

    public int getResalePrice(){
        return resalePrice;
    }
    public void setResalePrice(int resalePrice){
        this.resalePrice = resalePrice;
    }

    @JsonIgnore
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }

}