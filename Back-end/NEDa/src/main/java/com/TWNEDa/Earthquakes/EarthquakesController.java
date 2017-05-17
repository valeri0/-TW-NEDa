package com.TWNEDa.Earthquakes;

import org.jsondoc.core.annotation.Api;
import org.jsondoc.core.annotation.ApiMethod;
import org.jsondoc.core.pojo.ApiStage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;
import java.util.List;

/**
 * Created by Valerio on 4/30/2017.
 */

@CrossOrigin("http://localhost:63342")
@RestController
@Api(name = "Earthquakes API", description = "Provides a list of reported Nepal earthquakes", stage = ApiStage.ALPHA)
public class EarthquakesController {

    @Autowired
    EarthquakesService earthquakesService;

    @RequestMapping(value = "earthquakes")
    @ApiMethod(description = "Gets an earthquake that has the provided id passed in the query string")
    public Earthquake getEarthquakeById(@Param(value = "id") int id,@Param(value="foo") String foo){
        System.out.println(foo);
        return earthquakesService.getEarthquakeById(id);
    }

    @RequestMapping(value="earthquakes/search",method = RequestMethod.GET)
    @ApiMethod(description = "Get the earthquake that fits the filter (minFatalities, maxFatalities, minMagnitude, maxMagnitude) passed in the query string")
    public List<Earthquake> getFilteredEarthquakes(@Param(value="minFatalities") Long minFatalities,
                                                   @Param(value="maxFatalities") Long maxFatalities,
                                                   @Param(value = "minMagnitude") Double minMagnitude,
                                                   @Param(value="maxMagnitude") Double maxMagnitude){

        return earthquakesService.getFilteredEarthquakes(minFatalities,maxFatalities,minMagnitude,maxMagnitude);

    }

}
