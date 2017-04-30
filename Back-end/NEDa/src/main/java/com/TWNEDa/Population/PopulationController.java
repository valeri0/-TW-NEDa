package com.TWNEDa.Population;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Ovidiu on 22-Apr-17.
 */
@CrossOrigin("http://localhost:63342")
@RestController
public class PopulationController {
    @Autowired
    private PopulationService populationService;

    @RequestMapping("/population")
    public List<Population> getAllPopulation(){
        return populationService.getAllPopulation();
    }

    @RequestMapping("population/district/{districtId}")
    public Population getDataByDistrict(@PathVariable int districtId){
        return populationService.getDataByDistrict(districtId);
    }

    @RequestMapping("population/zone/{zone}")
    public List<Population> getPopulationByZone(@PathVariable String zone){
        return populationService.getDataByZone(zone);
    }

    @RequestMapping("/population/deaths/{zone}")
    public List<Object> getDeathsbyZone(@PathVariable String zone){
       return populationService.getDeathsbyZone(zone);
    }

    @RequestMapping("district/population/stats/{districtName}")
    public Object getDistrictStats(@PathVariable String districtName){
        return populationService.getDistrictStats(districtName);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/population")
    public void addData(@RequestBody Population population){
        populationService.addData(population);
    }

    @RequestMapping(method=RequestMethod.POST, value ="population//district/{districtId}")
    public void updateTopic(@RequestBody Population population,@PathVariable int districtId){
        populationService.updateData(population,districtId);
    }



    @RequestMapping(method=RequestMethod.DELETE, value="population/district/{districtId}")
    public void  deleteTopic(@PathVariable int districtId){
        populationService.deleteData(districtId);
    }
}
