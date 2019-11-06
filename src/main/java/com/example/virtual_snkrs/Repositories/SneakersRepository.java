package com.example.virtual_snkrs.Repositories;

import com.example.virtual_snkrs.Models.Sneakers;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SneakersRepository extends CrudRepository<Sneakers, Long> {
    @Query("FROM Sneakers s WHERE s.user_id = ?1")
    public Iterable<Sneakers> findByUserId(Long userId);
}
