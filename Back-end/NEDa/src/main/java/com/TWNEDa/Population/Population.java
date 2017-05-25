package com.TWNEDa.Population;

import org.jsondoc.core.annotation.ApiObject;
import org.jsondoc.core.annotation.ApiObjectField;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

/**
 * Created by Ovidiu on 22-Apr-17.
 */
@Entity
@Table(name = "POPULATION")
@ApiObject(name = "Population", description = "Holds info about affected population in Nepal")
public class Population {
    @Id
    @ApiObjectField(description = "The id of the Nepal district that the population info refers")
    private int dist_id;

    @ApiObjectField(description = "The name of the district", required = true)
    private String district;

    @ApiObjectField(description = "The name of the zone that the district is part of", required = true)
    private String zone;

    @ApiObjectField(description = "District's regional code", required = true)
    private String reg_code;

    @ApiObjectField(description = "The zone's administration code", required = true)
    private String zone_code;

    @ApiObjectField(description = "Total number of population in the district", required = true)
    private int total_population;

    @ApiObjectField(description = "The number of female deaths", required = true)
    private int death_female;

    @ApiObjectField(description = "The number of male deaths", required = true)
    private int death_male;

    @ApiObjectField(description = "Total number of casualties reported in the district", required = true)
    private int tot_deaths;

    @ApiObjectField(description = "The number of injured females", required = true)
    private int injured_female;

    @ApiObjectField(description = "The number of injured males", required = true)
    private int injured_male;

    @ApiObjectField(description = "Total number of injures in the district", required = true)
    private int total_injured;

    public Population(){};

    public Population(int dist_id, String district, String zone, String reg_zone, String zone_code, int total_population, int death_female, int death_male, int tot_deaths, int injured_female, int injured_male, int total_injured) {
        this.dist_id = dist_id;
        this.district = district;
        this.zone = zone;
        this.reg_code = reg_zone;
        this.zone_code = zone_code;
        this.total_population = total_population;
        this.death_female = death_female;
        this.death_male = death_male;
        this.tot_deaths = tot_deaths;
        this.injured_female = injured_female;
        this.injured_male = injured_male;
        this.total_injured = total_injured;
    }

    public int getDist_id() {
        return dist_id;
    }

    public void setDist_id(int dist_id) {
        this.dist_id = dist_id;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getZone() {
        return zone;
    }

    public void setZone(String zone) {
        this.zone = zone;
    }

    public String getReg_zone() {
        return reg_code;
    }

    public void setReg_zone(String reg_zone) {
        this.reg_code = reg_zone;
    }

    public String getZone_code() {
        return zone_code;
    }

    public void setZone_code(String zone_code) {
        this.zone_code = zone_code;
    }

    public int getTotal_population() {
        return total_population;
    }

    public void setTotal_population(int total_population) {
        this.total_population = total_population;
    }

    public int getDeath_female() {
        return death_female;
    }

    public void setDeath_female(int death_female) {
        this.death_female = death_female;
    }

    public int getDeath_male() {
        return death_male;
    }

    public void setDeath_male(int death_male) {
        this.death_male = death_male;
    }

    public int getTot_deaths() {
        return tot_deaths;
    }

    public void setTot_deaths(int tot_deaths) {
        this.tot_deaths = tot_deaths;
    }

    public int getInjured_female() {
        return injured_female;
    }

    public void setInjured_female(int injured_female) {
        this.injured_female = injured_female;
    }

    public int getInjured_male() {
        return injured_male;
    }

    public void setInjured_male(int injured_male) {
        this.injured_male = injured_male;
    }

    public int getTotal_injured() {
        return total_injured;
    }

    public void setTotal_injured(int total_injured) {
        this.total_injured = total_injured;
    }
}
