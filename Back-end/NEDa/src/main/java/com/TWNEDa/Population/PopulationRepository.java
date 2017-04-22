package com.TWNEDa.Population;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by Ovidiu on 22-Apr-17.
 */
public interface PopulationRepository extends CrudRepository<Population,Integer> {

    public List<Population> findByZone (String zone);
}
