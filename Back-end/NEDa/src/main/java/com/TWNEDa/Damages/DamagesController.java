package com.TWNEDa.Damages;

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
 * Created by eduar on 01-May-17.
 */
@CrossOrigin("http://localhost:7000")
@RestController
@Api(name = "Damages API", description = "Provides a list of reported damages after the 2015 Nepal Earthquake", stage = ApiStage.BETA)
public class DamagesController {

    @Autowired
    private DamagesService damagesService;

    @RequestMapping("/damages")
    @ApiMethod(description = "Get all damages from the database")
    public List<Damage> getAllDamages(){
        return damagesService.getAllDamages();
    }

    @RequestMapping("/damages/{risk}")
    @ApiMethod(description = "Get all damages with provided risk value")
    public List<Damage> getAllDamagesByRisk(@ApiPathParam(name = "risk", description = "A value of this set (low, med, high)") @PathVariable String risk){
        return damagesService.getAllDamagesByRisk(risk);
    }

    @RequestMapping("/damages/description/noDescription")
    @ApiMethod(description = "Get all damages from database that have NO description assigned")
    public List<Damage> getAllDamagesNoDescription(){
        return damagesService.getAllDamagesNoDescription("No description available");
    }

    @RequestMapping("/damages/description")
    @ApiMethod(description = "Get all damages from database that have a description assigned")
    public List<Damage> getAllDamagesWithDescription(){
        return damagesService.getAllDamagesWithDescription("No description available"); // description that is not "No description available"
    }

    @RequestMapping("/damages/{risk}/noDescription")
    @ApiMethod(description = "Get all damages from database with NO description and provided risk value (low, med, high)")
    public List<Damage> getAlldamagesWithRiskAndNoDescription(@ApiPathParam(name = "risk", description = "A value of this set (low, med, high)") @PathVariable String risk){
        return damagesService.getAllDamagesByRiskAndNoDescription(risk, "No description available");
    }

    @RequestMapping("/damages/{risk}/description")
    @ApiMethod(description = "Get all damages from database with description and provided risk value (low, med, high)")
    public List<Damage> getAllDamagesByRiskWithDescription(@ApiPathParam(name = "risk", description = "A value of this set (low, med, high)") @PathVariable String risk){
        return damagesService.getAllDamagesByRiskWithDescription(risk, "No description available"); // description that is not "No description available"
    }

    @RequestMapping("/damages/name/{name}")
    @ApiMethod(description = "Get damages that were reported in the location with the name provided")
    public List<Damage> getAllDamagesByName(@ApiPathParam(name = "name", description = "String with the name of a district") @PathVariable String name){
        return damagesService.getAllDamagesByName(name);
    }
}
