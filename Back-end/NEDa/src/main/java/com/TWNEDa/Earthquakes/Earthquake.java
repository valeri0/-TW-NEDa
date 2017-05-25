package com.TWNEDa.Earthquakes;

import org.jsondoc.core.annotation.ApiObject;
import org.jsondoc.core.annotation.ApiObjectField;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

/**
 * Created by Valerio on 4/30/2017.
 */
@Entity
@Table(name="EARTHQUAKES")
@ApiObject(name = "Earthquake", description = "Holds info about a specific earthquake in Nepal")
public class Earthquake {

    @Id
    @ApiObjectField(description = "The id of the earthquake")
    private Integer id;

    @Column(name="earthquake_date")
    @ApiObjectField(description = "The date of the earthquake in an encoded format", required = true)
    private Date earthquakeDate;

    @ApiObjectField(description = "The place where the earthquake had his epicenter", required = true)
    private String place;

    @ApiObjectField(description = "The value of epicenter's latitude", required = true)
    private Double latitude;

    @ApiObjectField(description = "The value of epicenter's longitude", required = true)
    private Double longitude;

    @ApiObjectField(description = "The number of fatalities that the earthquake left behind", required = true)
    private Long fatalities;

    @ApiObjectField(description = "The magnitude of the earthquake", required = true)
    private Double magnitude;

    public Earthquake(){}

    public Earthquake(Integer id, Date earthquakeDate, String place, Double latitude, Double longitude, Long fatalities, Double magnitude) {
        this.id = id;
        this.earthquakeDate = earthquakeDate;
        this.place = place;
        this.latitude = latitude;
        this.longitude = longitude;
        this.fatalities = fatalities;
        this.magnitude = magnitude;
    }

    public Integer getId() {
        return id;
    }

    public Date getEarthquakeDate() {
        return earthquakeDate;
    }

    public String getPlace() {
        return place;
    }

    public Double getLatitude() {
        return latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public Long getFatalities() {
        return fatalities;
    }

    public Double getMagnitude() {
        return magnitude;
    }
}
