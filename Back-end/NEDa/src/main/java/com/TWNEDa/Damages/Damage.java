package com.TWNEDa.Damages;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by eduar on 01-May-17.
 */
@Entity
@Table(name="DAMAGES")
public class Damage {

    private String name;
    private String risk;
    private String description;
    private Double longitude;
    private Double latitude;

    @Id
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
