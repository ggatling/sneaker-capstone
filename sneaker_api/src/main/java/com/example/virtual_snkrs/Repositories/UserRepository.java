package com.example.virtual_snkrs.Repositories;

import com.example.virtual_snkrs.Models.User;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    @Query("FROM User u WHERE u.username = ?1 and u.password = ?2")
    public User findByUsername(String username);
}
