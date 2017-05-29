package com.TWNEDa.Households;


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
@Api(name = "Households API", description = "Provides a list of Nepal's household information by district", stage = ApiStage.BETA)
public class HouseholdsController {

    @Autowired
    private HouseholdsService householdsService;

    @RequestMapping("/households")
    @ApiMethod(description = "Get all household information for all districts")
    public List<Household> getAllHouseholds(){
        return householdsService.getAllHouseholds();
    }

    @RequestMapping("households/district/{districtId}")
    @ApiMethod(description = "Get the household information for the district with provided ID")
    public Household getDataByDistrict(@ApiPathParam(name = "districtId", description = "Id of the district desired") @PathVariable int districtId){
        return householdsService.getDataByDistrict(districtId);
    }

    @RequestMapping("households/zone/{zone}")
    @ApiMethod(description = "Get population info from a zone provided by name")
    public List<Household> getPopulationByZone(@ApiPathParam(name = "zone", description = "Name of a zone from Nepal") @PathVariable String zone){
        return householdsService.getDataByZone(zone);
    }

    @RequestMapping("district/household/stats/{districtId}")
    @ApiMethod(description = "Get the number of public and private buildings destroyed in a district provided by ID")
    public Object getDistrictStats(@ApiPathParam(name = "districtId", description = "Id of the district desired") @PathVariable int districtId){
        return householdsService.getDistrictStats(districtId);
    }


    @RequestMapping("/households/houses/{zone}")
    @ApiMethod(description = "Get the number of public and private buildings destroyed in a zone provided by name")
    public List<Object> getHousesByZone(@ApiPathParam(name = "zone", description = "Name of a zone from Nepal") @PathVariable String zone){
        return householdsService.getHousesByZone(zone);
    }

    @RequestMapping(method = RequestMethod.POST, value = "households")
    @ApiMethod(description = "Create a household and add it to the database")
    public void addData(@RequestBody Household household){
        householdsService.addData(household);
    }

    @RequestMapping(method=RequestMethod.POST, value ="households/district/{districtId}")
    @ApiMethod(description = "Update existing household info in a district provided by ID")
    public void updateTopic(@RequestBody Household household,@ApiPathParam(name = "districtId") @PathVariable int districtId){
        householdsService.updateData(household,districtId);
    }

}
