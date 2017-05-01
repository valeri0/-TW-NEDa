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


}
