package com.TWNEDa.Damages;

import org.jsondoc.core.annotation.ApiObject;
import org.jsondoc.core.annotation.ApiObjectField;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by eduar on 01-May-17.
 */
@Entity
@Table(name="DAMAGES")
@ApiObject(name = "Damage", description = "Holds info about a specific reported damage made by the 2015 Nepal Earthquake")
public class Damage {

    @ApiObjectField(description = "The name of the location where the damage was reported", required = true)
    private String name;

    @ApiObjectField(description = "The risk of the damage", required = true)
    private String risk;

    @ApiObjectField(description = "The description of the damage")
    private String description;

    @ApiObjectField(description = "The longitude of the place where the damage was reported", required = true)
    private Double longitude;

    @ApiObjectField(description = "The latitude of the place where the damage was reported", required = true)
    private Double latitude;

    @Id
    @ApiObjectField(description = "The id of the damage")
    private int id;

    public Damage(){}

    public Damage(int id, String name, String risk, String description, Double longitude, Double latitude){
        this.id = id;
        this.name = name;
        this.risk = risk;
        this.description = description;
        this.longitude = longitude;
        this.latitude = latitude;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getRisk() {
        return risk;
    }

    public String getDescription() {
        return description;
    }

    public Double getLongitude() {
        return longitude;
    }

    public Double getLatitude() {
        return latitude;
    }
}
