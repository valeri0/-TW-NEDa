package com.TWNEDa.Earthquakes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Valerio on 4/30/2017.
 */
@Service
public class EarthquakesService {

    @Autowired
    EarthquakesRepository earthquakesRepository;

    public List<Earthquake> getAllEarthquakes(){
        List<Earthquake> earthquakes = new ArrayList<>();

        earthquakesRepository.findAll().forEach(earthquakes::add);

        return  earthquakes;

    }

}