package com.TWNEDa.Earthquakes;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Date;
import java.util.List;

/**
 * Created by Valerio on 4/30/2017.
 */
public interface EarthquakesRepository extends JpaRepository<Earthquake,Integer>{


    @Query("SELECT e from Earthquake e where (e.fatalities between ?1 and ?2) and (e.magnitude between ?3 and ?4) order by e.earthquakeDate")
    public List<Earthquake> getFilteredEarthquakes(Long minFatalities,Long maxFatalities,Double minMagnitude,Double maxMagnitude);

}
