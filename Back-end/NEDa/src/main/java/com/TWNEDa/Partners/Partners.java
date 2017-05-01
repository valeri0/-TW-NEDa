package com.TWNEDa.Partners;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Created by Valerio on 4/28/2017.
 */
@Entity
@Table(name="USEFUL_PARTNERS")
public class Partners {

    @EmbeddedId
    private PartnersKey partnersKey;

    private String zone;

    private int ongoing;

    private int completed;

    private int planned;

    @Column(name = "DIST_ID")
    private Integer distId;

    public Partners() {}

    public Partners(PartnersKey partnersKey, String zone, int ongoing, int completed, int planned, Integer distId) {
        this.partnersKey = partnersKey;
        this.zone = zone;
        this.ongoing = ongoing;
        this.completed = completed;
        this.planned = planned;
        this.distId = distId;
    }

    public PartnersKey getPartnersKey() {
        return partnersKey;
    }

    public String getZone() {
        return zone;
    }

    public int getOngoing() {
        return ongoing;
    }

    public int getCompleted() {
        return completed;
    }

    public int getPlanned() {
        return planned;
    }

    public Integer getDistId() {
        return distId;
    }
}
