package com.TWNEDa.Survey;

import org.jsondoc.core.annotation.Api;
import org.jsondoc.core.annotation.ApiMethod;
import org.jsondoc.core.annotation.ApiPathParam;
import org.jsondoc.core.pojo.ApiStage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by eduar on 19-May-17.
 */

@CrossOrigin("http://localhost:7000")
@RestController
@Api(name = "Survey API", description = "Provides the answers of a survey on the effects of the 2015 Nepal Earthquake on the citizens. The questioner has the following questions\n" +
        "1.Are your main problems being addressed? -- Encoded with the string 'problems_addressed'\n" +
        "2.What is your biggest problem? -- Encoded with the string 'biggest_problem'\n" +
        "3.Are you satisfied with what the government is doing for you after the earthquake? -- Encoded with the string 'satisfied_government'\n" +
        "4.Are you satisfied with what NGOs are doing for you after the earthquake? -- Encoded with the string 'satisfied_ngos'\n" +
        "5.Is support provided in a fair way? -- Encoded with the string 'support_provided'\n" +
        "6.Do you need to rebuild, repair or retrofit your home because of damage caused by earthquakes? -- Encoded with the string 'rebuild_damage'"
        , stage = ApiStage.BETA)
public class SurveyController {

    @Autowired
    private SurveyService surveyService;

    @RequestMapping("/survey/{districtId}/{question}")
    @ApiMethod(description = "Return a list in a json format containing statistical information of the answers given to the question of the type provided and in the district defined by the Id")
    public List<Survey> getQuestionByDistrictId(@ApiPathParam(name = "districtId", description = "Id of a district from Nepal")
                                                    @PathVariable Integer districtId,
                                                @ApiPathParam(name = "question", description = "The encoding of a question from the survey. An element of the set" +
                                                        "{problems_addressed, support_provided, rebuild_damage, biggest_problem, satisfied_government, satisfied_ngos}")
                                                    @PathVariable String question){
        return surveyService.getQuestionByDistrictId(districtId, question);
    }

    @RequestMapping("/survey/district/{districtId}")
    @ApiMethod(description = "Return a list in a json format containing statistical information of the answers given to all questions in the district defined by the Id")
    public List<Survey> getSurveyByDistrict(@ApiPathParam(name = "districtId", description = "Id of a district from Nepal") @PathVariable Integer districtId){
        return surveyService.getSurveyByDistrict(districtId);
    }

    @RequestMapping("/survey/question/{question}")
    @ApiMethod(description = "Return a list in a json format containing statistical information of the answers given to the question of the type provided; answers from all districts are included")
    public List<Survey> getSurveyByQuestion(@ApiPathParam(name = "question", description = "The encoding of a question from the survey. An element of the set" +
                                                        "{problems_addressed, support_provided, rebuild_damage, biggest_problem, satisfied_government, satisfied_ngos}")
                                                @PathVariable String question){
        return surveyService.getSurveyByQuestion(question);
    }
}
