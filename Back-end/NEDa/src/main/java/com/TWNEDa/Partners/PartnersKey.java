package com.TWNEDa.Partners;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by Valerio on 4/28/2017.
 */
@Embeddable
public class PartnersKey implements Serializable{


    private String district;


    @Column(name="partner_organisation")
    private String partnerOrganisation;


    @Column(name="implementing_partner")
    private String implementingPartner;


    @Column(name="funding_organisation")
    private String fundingOrganisation;


    @Column(name="activity_type")
    private String activityType;


    @Column(name="activity_name")
    private String activityName;


    @Column(name="activity_status")
    private String activityStatus;


    @Column(name="total_planned")
    private String totalPlanned;

    @Column(name="total_reached")
    private String totalReached;


    private String zone;

    public PartnersKey() {}

    public PartnersKey(String district, String partnerOrganisation, String implementingPartner, String fundingOrganisation, String activityType, String activityName, String activityStatus, String totalPlanned, String totalReached, String zone) {
        this.district = district;
        this.partnerOrganisation = partnerOrganisation;
        this.implementingPartner = implementingPartner;
        this.fundingOrganisation = fundingOrganisation;
        this.activityType = activityType;
        this.activityName = activityName;
        this.activityStatus = activityStatus;
        this.totalPlanned = totalPlanned;
        this.totalReached = totalReached;
        this.zone = zone;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getPartnerOrganisation() {
        return partnerOrganisation;
    }

    public void setPartnerOrganisation(String partnerOrganisation) {
        this.partnerOrganisation = partnerOrganisation;
    }

    public String getImplementingPartner() {
        return implementingPartner;
    }

    public void setImplementingPartner(String implementingPartner) {
        this.implementingPartner = implementingPartner;
    }

    public String getFundingOrganisation() {
        return fundingOrganisation;
    }

    public void setFundingOrganisation(String fundingOrganisation) {
        this.fundingOrganisation = fundingOrganisation;
    }

    public String getActivityType() {
        return activityType;
    }

    public void setActivityType(String activityType) {
        this.activityType = activityType;
    }

    public String getActivityName() {
        return activityName;
    }

    public void setActivityName(String activityName) {
        this.activityName = activityName;
    }

    public String getActivityStatus() {
        return activityStatus;
    }

    public void setActivityStatus(String activityStatus) {
        this.activityStatus = activityStatus;
    }

    public String getTotalPlanned() {
        return totalPlanned;
    }

    public void setTotalPlanned(String totalPlanned) {
        this.totalPlanned = totalPlanned;
    }

    public String getTotalReached() {
        return totalReached;
    }

    public void setTotalReached(String totalReached) {
        this.totalReached = totalReached;
    }

    public String getZone() {
        return zone;
    }

    public void setZone(String zone) {
        this.zone = zone;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        PartnersKey that = (PartnersKey) o;

        if (!district.equals(that.district)) return false;
        if (!partnerOrganisation.equals(that.partnerOrganisation)) return false;
        if (!implementingPartner.equals(that.implementingPartner)) return false;
        if (!fundingOrganisation.equals(that.fundingOrganisation)) return false;
        if (!activityType.equals(that.activityType)) return false;
        if (!activityName.equals(that.activityName)) return false;
        if (!activityStatus.equals(that.activityStatus)) return false;
        if (!totalPlanned.equals(that.totalPlanned)) return false;
        if (!totalReached.equals(that.totalReached)) return false;
        return zone.equals(that.zone);
    }

    @Override
    public int hashCode() {
        int result = district.hashCode();
        result = 31 * result + partnerOrganisation.hashCode();
        result = 31 * result + implementingPartner.hashCode();
        result = 31 * result + fundingOrganisation.hashCode();
        result = 31 * result + activityType.hashCode();
        result = 31 * result + activityName.hashCode();
        result = 31 * result + activityStatus.hashCode();
        result = 31 * result + totalPlanned.hashCode();
        result = 31 * result + totalReached.hashCode();
        result = 31 * result + zone.hashCode();
        return result;
    }
}
