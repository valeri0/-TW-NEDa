package com.TWNEDa.Partners;

import org.jsondoc.core.annotation.ApiObject;
import org.jsondoc.core.annotation.ApiObjectField;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Created by Valerio on 4/28/2017.
 */
@Entity
@Table(name="USEFUL_PARTNERS")
@ApiObject(name = "Partners", description = "Holds information about the organisations that helped with reconstruction following the 2015 Nepal Earthquake")
public class Partners {

    @EmbeddedId
    @ApiObjectField(description = "The id of the partner")
    private PartnersKey partnersKey;

    @ApiObjectField(description = "The zone that the partner is holding his activity", required = true)
    private String zone;

    @ApiObjectField(description = "The number of building reconstructions that are currently ongoing", required = true)
    private int ongoing;

    @ApiObjectField(description = "The number of completed building reconstructions")
    private int completed;

    @ApiObjectField(description = "The number of planned building reconstructions")
    private int planned;

    @Column(name = "DIST_ID")
    @ApiObjectField(description = "The id of the district that the partner is holding his activity")
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
