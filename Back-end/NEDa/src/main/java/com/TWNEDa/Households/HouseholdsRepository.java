package com.TWNEDa.Households;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ovidiu on 22-Apr-17.
 */
@Repository
public interface HouseholdsRepository extends JpaRepository<Household, Integer> {

    public List<Household> findByZoneIgnoreCase (String zone);

    @Query("select  sum(total_household), sum(govtbuild_damage)+sum(publicbuild_damage), sum(govtbuild_partdamage)+sum(publicbuild_partdamage) from Household  where UPPER(zone) = UPPER(?1)")
    public List<Object> findHousesByZone (String zone);

    @Query("select total_household, govtbuild_damage + publicbuild_damage ,govtbuild_partdamage+publicbuild_partdamage,district from Household where dist_id=?1")
    public Object getDistrictStats(int district);

}
