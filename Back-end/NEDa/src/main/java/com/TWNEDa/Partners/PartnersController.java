package com.TWNEDa.Partners;

import org.jsondoc.core.annotation.Api;
import org.jsondoc.core.annotation.ApiMethod;
import org.jsondoc.core.annotation.ApiPathParam;
import org.jsondoc.core.pojo.ApiStage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Valerio on 4/28/2017.
 */
@CrossOrigin("http://localhost:7000")
@RestController
@Api(name = "Partners API", description = "Provides a list of organisations that are helping with building reconstruction", stage = ApiStage.ALPHA)
public class PartnersController {

    @Autowired
    private PartnersService partnersService;

    @RequestMapping("/partners")
    @ApiMethod(description = "Get a list of all organisations")
    public List<Partners> getAllPartners(){
        return partnersService.getAllPartners();
    }

    @RequestMapping("/partners/district/{distId}")
    @ApiMethod(description = "Get a list of all organisations activating in a particular district provided by ID")
    public List<Partners> getPartnersByDistrict(@ApiPathParam(name = "distId", description = "Id of the district desired") @PathVariable int distId){
        return partnersService.getPartnersById(distId);
    }

    @RequestMapping(method = RequestMethod.POST, value="partners")
    @ApiMethod(description = "Add a particular organisation to the database")
    public void addData(@RequestBody Partners partner){
        partnersService.addData(partner);
    }

  }
