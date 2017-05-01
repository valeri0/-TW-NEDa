package com.TWNEDa.Partners;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Valerio on 4/28/2017.
 */
@RestController
public class PartnersController {

    @Autowired
    private PartnersService partnersService;

    @RequestMapping("/partners")
    public List<Partners> getAllPartners(){
        return partnersService.getAllPartners();
    }

    @RequestMapping(method = RequestMethod.POST,value="partners")
    public void addData(@RequestBody Partners partner){
        partnersService.addData(partner);
    }

    @RequestMapping(method=RequestMethod.DELETE, value="partners")
    public void  deleteTopic(@Param(value = "partnerKey")PartnersKey partnerKey){
        partnersService.deleteData(partnerKey);
    }

  }
