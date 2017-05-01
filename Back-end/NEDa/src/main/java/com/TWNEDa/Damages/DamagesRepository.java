package com.TWNEDa.Damages;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by eduar on 01-May-17.
 */
@Repository
public interface DamagesRepository extends JpaRepository<Damage,Integer> {

    List<Damage> findByRisk(String risk);
    List<Damage> findByDescriptionEquals(String description);
    List<Damage> findByDescriptionIsNot(String description);
    List<Damage> findByRiskAndDescriptionEquals(String risk, String description);
    List<Damage> findByRiskAndDescriptionIsNot(String risk, String description);
    List<Damage> findByNameIgnoreCase(String name);
}
