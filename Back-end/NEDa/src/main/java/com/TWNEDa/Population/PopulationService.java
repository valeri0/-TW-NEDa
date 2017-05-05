package com.TWNEDa.Population;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Ovidiu on 22-Apr-17.
 */
@Service
public class PopulationService {
    @Autowired
    private PopulationRepository populationRepository;

    public List<Population> getAllPopulation(){
        List<Population> population = new ArrayList<>();
        population.addAll(populationRepository.findAll());
        return population;
    }

    public Population getDataByDistrict(int districtID){
        return populationRepository.findOne(districtID);
    }

    public List<Population> getDataByZone(String zone){
        List<Population> population = new ArrayList<>();
        population.addAll(populationRepository.findByZoneIgnoreCase(zone));
        return population;
    }

    public List<Object> getDeathsbyZone(String zone){
        List<Object> zones = new ArrayList<>();
        return zones=populationRepository.findDeathsbyZone(zone);
    }

    public List<Object> getAllStatsByZone(){
        List<Object> zones = new ArrayList<>();
        return zones = populationRepository.getAllStatsByZone();
    }

    public Object getStatsBasedOnGender(String zone){
        return populationRepository.getStatsBasedOnGender(zone);
    }

    public Object getDistrictStats(String districtName){
        return populationRepository.getDistrictStats(districtName);
    }


    public void addData(Population population){
        populationRepository.save(population);
    }

    public void updateData(Population population, int districtId){
        populationRepository.save(population);
    }

    public void deleteData(int districtId){
        populationRepository.delete(districtId);
    }
}
