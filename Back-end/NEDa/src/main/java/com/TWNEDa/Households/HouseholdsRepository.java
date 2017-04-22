package com.TWNEDa.Households;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by Ovidiu on 22-Apr-17.
 */
public interface HouseholdsRepository extends CrudRepository<Household, Integer> {
    public List<Household> findByZone (String zone);
}
