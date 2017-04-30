package com.TWNEDa.Earthquakes;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Valerio on 4/30/2017.
 */
public interface EarthquakesRepository extends JpaRepository<Earthquake,Integer> {

}
