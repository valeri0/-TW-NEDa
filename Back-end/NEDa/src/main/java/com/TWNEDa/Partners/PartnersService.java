package com.TWNEDa.Partners;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Valerio on 4/28/2017.
 */
@Service
public class PartnersService {
    @Autowired
    PartnersRepository partnersRepository;

    public List<Partners> getAllPartners(){
        List<Partners> partners= new ArrayList<>();
        partners.addAll(partnersRepository.findAll());
        return partners;
    }

    public List<Partners> getPartnersById(int districtId){
        List<Partners> partners = new ArrayList<>();
         partnersRepository.findByDistId(districtId).forEach(partners :: add);
         return partners;
    }

    public void addData(Partners partner){
        this.partnersRepository.save(partner);
    }

    public void deleteData(PartnersKey partnersKey){
        partnersRepository.delete(partnersKey);
    }

}
