package com.TWNEDa.Population;

import org.jsondoc.core.annotation.Api;
import org.jsondoc.core.annotation.ApiMethod;
import org.jsondoc.core.annotation.ApiPathParam;
import org.jsondoc.core.pojo.ApiStage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Ovidiu on 22-Apr-17.
 */
@CrossOrigin("http://localhost:7000")
@RestController
@Api(name = "Population API", description = "Provides information about affected population by the 2015 Nepal Earthquake (total population, deaths and injured)", stage = ApiStage.BETA)
public class PopulationController {

    @Autowired
    private PopulationService populationService;

    @RequestMapping("/population")
    @ApiMethod(description = "Get population info for all districts")
    public List<Population> getAllPopulation(){
        return populationService.getAllPopulation();
    }

    @RequestMapping("population/district/{districtId}")
    @ApiMethod(description = "Get population info regarding a particular district provided by ID")
    public Population getDataByDistrict(@ApiPathParam(name = "districtId", description = "Id of the district desired") @PathVariable int districtId){
        return populationService.getDataByDistrict(districtId);
    }

    @RequestMapping("population/zone/{zone}")
    @ApiMethod(description = "Get population info regarding a particular zone provided by name")
    public List<Population> getPopulationByZone(@ApiPathParam(name = "zone", description = "Name of a zone from Nepal") @PathVariable String zone){
        return populationService.getDataByZone(zone);
    }

    @RequestMapping("/population/deaths/{zone}")
    @ApiMethod(description = "Get info about deaths and injured in a particular zone provided by name")
    public List<Object> getDeathsByZone(@ApiPathParam(name = "zone", description = "Name of a zone from Nepal") @PathVariable String zone){
       return populationService.getDeathsbyZone(zone);
    }

    @RequestMapping("district/population/stats/{districtName}")
    @ApiMethod(description = "Get info about deaths and injured in a particular district provided by name")
    public Object getDistrictStats(@ApiPathParam(name = "districtName", description = "Name of a district from Nepal") @PathVariable String districtName){
        return populationService.getDistrictStats(districtName);
    }

    @RequestMapping("population/zone")
    @ApiMethod(description = "Get all population info grouped by every zone")
    public List<Object> getAllStatsByZone(){
        return populationService.getAllStatsByZone();
    }

    @RequestMapping("population/gender/{zone}")
    @ApiMethod(description = "Get all population info divided by gender in a particular zone")
    public Object getStatsBaseOnGender(@ApiPathParam(name = "zone", description = "Name of a zone from Nepal") @PathVariable String zone){return populationService.getStatsBasedOnGender(zone);}

    @RequestMapping(method = RequestMethod.POST, value = "/population")
    @ApiMethod(description = "Add population info to the database")
    public void addData(@RequestBody Population population){
        populationService.addData(population);
    }

    @RequestMapping(method=RequestMethod.POST, value ="population//district/{districtId}")
    @ApiMethod(description = "Update the population info for a district provided by ID")
    public void updateTopic(@RequestBody Population population, @ApiPathParam(name = "districtId", description = "Id of the district desired") @PathVariable int districtId){
        populationService.updateData(population,districtId);
    }

}
