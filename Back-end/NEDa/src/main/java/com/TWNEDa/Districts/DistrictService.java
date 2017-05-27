package com.TWNEDa.Districts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by eduar on 27-May-17.
 */
@Service
public class DistrictService {

    @Autowired
    private DistrictRepository districtRepository;

    public List<District> getAllDistricts(){
        List<District> districts = new ArrayList<>();
        districts.addAll(districtRepository.findAll());
        return districts;
    }

    public District getDistrictById(Integer districtId){
        District district = districtRepository.findByDistrictId(districtId);
        return district;
    }

    public List<District> getDistrictsFromZone(String zone){
        List<District> districts = new ArrayList<>();
        districts = districtRepository.findByZoneIgnoreCase(zone);
        return districts;
    }

    public List<District> getDistrictByName(String district){
        List<District> districts = new ArrayList<>();
        districts = districtRepository.findByDistrictIgnoreCase(district);
        return districts;
    }
}
