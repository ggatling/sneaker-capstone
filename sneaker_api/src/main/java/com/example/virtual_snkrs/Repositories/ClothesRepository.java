package com.example.virtual_snkrs.Repositories;

import com.example.virtual_snkrs.Models.Clothes;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClothesRepository extends CrudRepository<Clothes, Long> {
    @Query("FROM Clothes c WHERE c.user_id = ?1")
    public Iterable<Clothes> findByUserId(Long userId);
}
