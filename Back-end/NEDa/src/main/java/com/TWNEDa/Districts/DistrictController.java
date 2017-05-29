package com.TWNEDa.Districts;

import org.jsondoc.core.annotation.Api;
import org.jsondoc.core.annotation.ApiMethod;
import org.jsondoc.core.annotation.ApiPathParam;
import org.jsondoc.core.pojo.ApiStage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by eduar on 27-May-17.
 */
@CrossOrigin("http://localhost:7000")
@RestController
@Api(name = "Districts API", description = "Provides basic information about districts from Nepal", stage = ApiStage.BETA)
public class DistrictController {
    @Autowired
    private DistrictService districtService;

    @RequestMapping("/districts")
    @ApiMethod(description = "Returns all districts")
    public List<District> getAllDistricts(){
        return districtService.getAllDistricts();
    }

    @RequestMapping("/districts/{id}")
    @ApiMethod(description = "Returns information for the district with the id provided")
    public District getDistrictById(@ApiPathParam(name = "id", description = "The id of the district") @PathVariable Integer id){
        return districtService.getDistrictById(id);
    }

    @RequestMapping("/districts/zone/{zoneName}")
    @ApiMethod(description = "Returns a list of districts from the zone provided by name")
    public List<District> getDistrictsFromZone(@ApiPathParam(name = "zoneName", description = "The name of the zone") @PathVariable String zoneName){
        return districtService.getDistrictsFromZone(zoneName);
    }

    @RequestMapping("/districts/name/{districtName}")
    @ApiMethod(description = "Returns information for the district with the name provided")
    public List<District> getDistrictByName(@ApiPathParam(name = "districtName", description = "The name of the district") @PathVariable String districtName){
        return districtService.getDistrictByName(districtName);
    }
}
