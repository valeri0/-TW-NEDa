package com.TWNEDa.Population;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ovidiu on 22-Apr-17.
 */
@Repository
public interface PopulationRepository extends JpaRepository<Population,Integer> {

    public List<Population> findByZoneIgnoreCase (String zone);


    @Query("select sum(total_population), sum(tot_deaths), sum(total_injured) from Population where UPPER(zone) = UPPER(?1)")
    List<Object> findDeathsbyZone (String zone);

    @Query("select tot_deaths,total_injured from Population where lower(district) = lower (?1)")
    Object getDistrictStats(String districtName);
}
