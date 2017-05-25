package com.TWNEDa.Households;

import com.TWNEDa.Population.Population;
import org.jsondoc.core.annotation.ApiObject;
import org.jsondoc.core.annotation.ApiObjectField;

import javax.persistence.*;

/**
 * Created by Ovidiu on 22-Apr-17.
 */
@Entity
@Table(name ="HOUSEHOLDS")
@ApiObject(name = "Household", description = "Holds info about the condition of a district's household after the 2015 Nepal Earthquake")
public class Household {
    @Id
    @ApiObjectField(description = "The id of the district")
    private int dist_id;

    @ApiObjectField(description = "The name of the district", required = true)
    private String district;

    @ApiObjectField(description = "The name of the zone that the district is part of", required = true)
    private String zone;

    @ApiObjectField(description = "The district's region code", required = true)
    private String reg_code;

    @ApiObjectField(description = "The zone's administration code", required = true)
    private String zone_code;

    @ApiObjectField(description = "Total number of buildings damages by the earthquake", required = true)
    private int total_household;

    @ApiObjectField(description = "Total number of government buildings fully damaged", required = true)
    private int govtbuild_damage;

    @ApiObjectField(description = "Total number of government buildings partially damaged", required = true)
    private int govtbuild_partdamage;

    @ApiObjectField(description = "Total number of public buildings fully damaged", required = true)
    private int publicbuild_damage;

    @ApiObjectField(description = "Total number of public buildings partially damaged", required = true)
    private int publicbuild_partdamage;


    public Household(){};

    public Household(String district, String zone, String reg_code, String zone_code, int total_household, int govtbuild_damage, int govtbuild_partdamage, int publicbuild_damage, int publicbuild_partdamage) {
        this.district = district;
        this.zone = zone;
        this.reg_code = reg_code;
        this.zone_code = zone_code;
        this.total_household = total_household;
        this.govtbuild_damage = govtbuild_damage;
        this.govtbuild_partdamage = govtbuild_partdamage;
        this.publicbuild_damage = publicbuild_damage;
        this.publicbuild_partdamage = publicbuild_partdamage;
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

    public String getReg_code() {
        return reg_code;
    }

    public void setReg_code(String reg_code) {
        this.reg_code = reg_code;
    }

    public String getZone_code() {
        return zone_code;
    }

    public void setZone_code(String zone_code) {
        this.zone_code = zone_code;
    }

    public int getTotal_household() {
        return total_household;
    }

    public void setTotal_household(int total_household) {
        this.total_household = total_household;
    }

    public int getGovtbuild_damage() {
        return govtbuild_damage;
    }

    public void setGovtbuild_damage(int govtbuild_damage) {
        this.govtbuild_damage = govtbuild_damage;
    }

    public int getGovtbuild_partdamage() {
        return govtbuild_partdamage;
    }

    public void setGovtbuild_partdamage(int govtbuild_partdamage) {
        this.govtbuild_partdamage = govtbuild_partdamage;
    }

    public int getPublicbuild_damage() {
        return publicbuild_damage;
    }

    public void setPublicbuild_damage(int publicbuild_damage) {
        this.publicbuild_damage = publicbuild_damage;
    }

    public int getPublicbuild_partdamage() {
        return publicbuild_partdamage;
    }

    public void setPublicbuild_partdamage(int publicbuild_partdamage) {
        this.publicbuild_partdamage = publicbuild_partdamage;
    }
}

