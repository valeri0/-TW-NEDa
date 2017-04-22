package com.TWNEDa.Households;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Ovidiu on 22-Apr-17.
 */
@Service
public class HouseholdsService {
    @Autowired
    private HouseholdsRepository householdsRepository;

    public List<Household> getAllHouseholds(){
        List<Household> households = new ArrayList<>();
        householdsRepository.findAll().forEach(households :: add);
        return households;
    }

    public Household getDataByDistrict(int districtID){
        return householdsRepository.findOne(districtID);
    }

    public List<Household> getDataByZone(String zone){
        List<Household> population = new ArrayList<>();
        householdsRepository.findByZone(zone).forEach(population :: add);
        return population;
    }

    public void addData(Household household){
        householdsRepository.save(household);
    }

    public void updateData(Household household, int districtId){
        householdsRepository.save(household);
    }

    public void deleteData(int districtId){
        householdsRepository.delete(districtId);
    }

}
