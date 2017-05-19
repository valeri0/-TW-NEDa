package com.TWNEDa.Survey;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by eduar on 19-May-17.
 */

@CrossOrigin("http://localhost:63342")
@RestController
public class SurveyController {

    @Autowired
    private SurveyService surveyService;

    @RequestMapping("/survey/{districtId}/{question}")
    public List<Survey> getQuestionByDistrictId(@PathVariable Integer districtId, @PathVariable String question){
        return surveyService.getQuestionByDistrictId(districtId, question);
    }

    @RequestMapping("/survey/district/{districtId}")
    public List<Survey> getSurveyByDistrict(@PathVariable Integer districtId){
        return surveyService.getSurveyByDistrict(districtId);
    }

    @RequestMapping("/survey/question/{question}")
    public List<Survey> getSurveyByQuestion(@PathVariable String question){
        return surveyService.getSurveyByQuestion(question);
    }
}
