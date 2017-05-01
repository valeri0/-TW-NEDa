package com.TWNEDa.Damages;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by eduar on 01-May-17.
 */
@CrossOrigin("http://localhost:63342")
@RestController
public class DamagesController {

    @Autowired
    private DamagesService damagesService;

    @RequestMapping("/damages")
    public List<Damage> getAllDamages(){
        return damagesService.getAllDamages();
    }

    @RequestMapping("/damages/{risk}")
    public List<Damage> getAllDamagesByRisk(@PathVariable String risk){
        return damagesService.getAllDamagesByRisk(risk);
    }

    @RequestMapping("/damages/description/noDescription")
    public List<Damage> getAllDamagesNoDescription(){
        return damagesService.getAllDamagesNoDescription("No description available");
    }

    @RequestMapping("/damages/description")
    public List<Damage> getAllDamagesWithDescription(){
        return damagesService.getAllDamagesWithDescription("No description available"); // description that is not "No description available"
    }

    @RequestMapping("/damages/{risk}/noDescription")
    public List<Damage> getAlldamagesWithRiskAndNoDescription(@PathVariable String risk){
        return damagesService.getAllDamagesByRiskAndNoDescription(risk, "No description available");
    }

    @RequestMapping("/damages/{risk}/description")
    public List<Damage> getAllDamagesByRiskWithDescription(@PathVariable String risk){
        return damagesService.getAllDamagesByRiskWithDescription(risk, "No description available"); // description that is not "No description available"
    }

    @RequestMapping("/damages/name/{name}")
    public List<Damage> getAllDamagesByName(@PathVariable String name){
        return damagesService.getAllDamagesByName(name);
    }
}
