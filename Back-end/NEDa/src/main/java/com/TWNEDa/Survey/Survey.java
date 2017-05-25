package com.TWNEDa.Survey;

import org.jsondoc.core.annotation.ApiObject;
import org.jsondoc.core.annotation.ApiObjectField;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by eduar on 19-May-17.
 */

@Entity
@Table(name="SURVEY")
@ApiObject(name = "Survey", description = "Holds statistical info on the answers given in a district during a survey")
public class Survey {
    @Id
    @ApiObjectField(description = "The id of the object")
    private int id;

    @Column(name="dist_id")
    @ApiObjectField(description = "The id of the district surveyed", required = true)
    private Integer districtId;

    @ApiObjectField(description = "The name of the district surveyed", required = true)
    private String district;

    @Column(name="question_type")
    @ApiObjectField(description = "The type of the question. An element of the set {problems_addressed, support_provided, rebuild_damage, biggest_problem, satisfied_government, satisfied_ngos}", required = true)
    private String question;

    @ApiObjectField(description = "The answer given to the question", required = true)
    private String answer;

    @Column(name="answers_count")
    @ApiObjectField(description = "The number of people that gave the answer defined in the 'answer' field above")
    private Integer answersCount;

    public Survey(){}

    public Survey(int id, Integer districtId, String district, String question, String answer, Integer answersCount){
        this.id = id;
        this.districtId = districtId;
        this.district = district;
        this.question = question;
        this.answer = answer;
        this.answersCount = answersCount;
    }

    public int getId() {
        return id;
    }

    public Integer getDistrictId() {
        return districtId;
    }

    public String getDistrict() {
        return district;
    }

    public String getQuestion() {
        return question;
    }

    public String getAnswer() {
        return answer;
    }

    public Integer getAnswersCount() {
        return answersCount;
    }
}
