package com.TWNEDa.Earthquakes;

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
public class Earthquake {

    @Id
    private int id;

    @Column(name="earthquake_date")
    private Date earthquakeDate;

    private String place;

    private Double latitude;

    private Double longitude;

    private int fatalities;

    private Double magnitude;

    public Earthquake(){}

    public Earthquake(int id, Date earthquakeDate, String place, Double latitude, Double longitude, int fatalities, Double magnitude) {
        this.id = id;
        this.earthquakeDate = earthquakeDate;
        this.place = place;
        this.latitude = latitude;
        this.longitude = longitude;
        this.fatalities = fatalities;
        this.magnitude = magnitude;
    }

    public int getId() {
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

    public int getFatalities() {
        return fatalities;
    }

    public Double getMagnitude() {
        return magnitude;
    }
}