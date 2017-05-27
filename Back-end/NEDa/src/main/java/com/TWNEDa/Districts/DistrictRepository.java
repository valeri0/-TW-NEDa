package com.TWNEDa.Districts;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by eduar on 27-May-17.
 */
@Repository
public interface DistrictRepository extends JpaRepository<District, Integer> {

    District findByDistrictId(Integer districtId);
    List<District> findByZoneIgnoreCase(String zone);
    List<District> findByDistrictIgnoreCase(String district);
}
