package com.TWNEDa.Earthquakes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Valerio on 4/30/2017.
 */
@RestController
public class EarthquakesController {

    @Autowired
    EarthquakesService earthquakesService;

    @RequestMapping("earthquakes")
    public List<Earthquake> getAllEarthquakes(){
        return earthquakesService.getAllEarthquakes();
    }



}
