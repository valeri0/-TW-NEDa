package com.TWNEDa.Survey;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by eduar on 19-May-17.
 */

@Service
public class SurveyService {

    @Autowired
    private SurveyRepository surveyRepository;

    public List<Survey> getEntireSurvey(){
        List<Survey> surveyList = new ArrayList<>();
        surveyList.addAll(surveyRepository.findAll());
        return surveyList;
    }

    public List<Survey> getQuestionByDistrictId(Integer districtId, String question){
        List<Survey> surveyList = new ArrayList<>();
        surveyList = surveyRepository.findByDistrictIdAndQuestion(districtId, question);
        return surveyList;
    }

    public List<Survey> getSurveyByQuestion(String question){
        List<Survey> surveyList = new ArrayList<>();
        surveyList = surveyRepository.findByQuestion(question);
        return surveyList;
    }

    public List<Survey> getSurveyByDistrict(Integer districtId){
        List<Survey> surveyList = new ArrayList<>();
        surveyList = surveyRepository.findByDistrictId(districtId);
        return surveyList;
    }
}
