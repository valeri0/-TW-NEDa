package com.TWNEDa.Survey;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by eduar on 19-May-17.
 */

@Entity
@Table(name="SURVEY")
public class Survey {
    @Id
    private int id;

    @Column(name="dist_id")
    private Integer districtId;

    private String district;

    @Column(name="question_type")
    private String question;

    private String answer;

    @Column(name="answers_count")
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
