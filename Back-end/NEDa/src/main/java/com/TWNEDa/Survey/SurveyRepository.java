package com.TWNEDa.Survey;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by eduar on 19-May-17.
 */

@Repository
public interface SurveyRepository extends JpaRepository<Survey,Integer> {

    List<Survey> findByDistrictIdAndQuestion(Integer districtId, String question);
    List<Survey> findByDistrictId(Integer districtId);
    List<Survey> findByQuestion(String question);

}
