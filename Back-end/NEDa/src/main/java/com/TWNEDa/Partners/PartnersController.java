package com.TWNEDa.Partners;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Valerio on 4/28/2017.
 */
@RestController
public class PartnersController {

    @Autowired
    private PartnersService partnersService;

    @RequestMapping("partners")
    public List<Partners> getAllPartners(){
        return partnersService.getAllPartners();
    }
  }
