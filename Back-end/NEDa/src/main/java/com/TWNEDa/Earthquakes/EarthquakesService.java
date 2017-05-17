package com.TWNEDa.Earthquakes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
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

        earthquakes.addAll(earthquakesRepository.findAll());

        return  earthquakes;

    }

    public Earthquake getEarthquakeById(int id){
        return earthquakesRepository.findOne(id);
    }

    public List<Earthquake> getFilteredEarthquakes(Long minFatalities,Long maxFatalities,Double minMagnitude,Double maxMagnitude){


        return earthquakesRepository.getFilteredEarthquakes(minFatalities,maxFatalities,minMagnitude,maxMagnitude);
    }

}
