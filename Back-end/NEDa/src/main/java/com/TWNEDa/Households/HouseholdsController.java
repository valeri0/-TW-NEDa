package com.TWNEDa.Households;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Ovidiu on 22-Apr-17.
 */
@RestController
public class HouseholdsController {
    @Autowired
    private HouseholdsService householdsService;

    @ApiOperation(value="getAllHouseholds",nickname = "getAllHouseholds")
    @RequestMapping("neda/households")
    @ApiResponses(value={

            @ApiResponse(code = 200, message = "Success", response = Household.class),
            @ApiResponse(code = 401, message = "Unauthorized"),
            @ApiResponse(code = 403, message = "Forbidden"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")
            }
    )

    public List<Household> getAllHouseholds(){
        return householdsService.getAllHouseholds();
    }

    @RequestMapping("households/district/{districtId}")
    public Household getDataByDistrict(@PathVariable int districtId){
        return householdsService.getDataByDistrict(districtId);
    }

    @RequestMapping("households/zone/{zone}")
    public List<Household> getPopulationByZone(@PathVariable String zone){
        return householdsService.getDataByZone(zone);
    }

    @RequestMapping("district/household/stats/{districtName}")
    public Object getDistrictStats(@PathVariable String districtName){
        return householdsService.getDistrictStats(districtName);
    }


    @RequestMapping("/households/houses/{zone}")
    public List<Object> getDeathsbyZone(@PathVariable String zone){
        return householdsService.getHousesByZone(zone);
    }

    @RequestMapping(method = RequestMethod.POST, value = "households")
    public void addData(@RequestBody Household household){
        householdsService.addData(household);
    }

    @RequestMapping(method=RequestMethod.POST, value ="households/district/{districtId}")
    public void updateTopic(@RequestBody Household household,@PathVariable int districtId){
        householdsService.updateData(household,districtId);
    }

    @RequestMapping(method=RequestMethod.DELETE, value="households/district/{districtId}")
    public void  deleteTopic(@PathVariable int districtId){
        householdsService.deleteData(districtId);
    }

}
