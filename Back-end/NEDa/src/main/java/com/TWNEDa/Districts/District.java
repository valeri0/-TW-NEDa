package com.TWNEDa.Districts;

import org.jsondoc.core.annotation.ApiObject;
import org.jsondoc.core.annotation.ApiObjectField;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by eduar on 27-May-17.
 */

@Entity
@Table(name = "District")
@ApiObject(name = "District", description = "Holds basic information about a particular district from Nepal")
public class District {
    @Id
    @Column(name = "dist_id")
    @ApiObjectField(description = "The id of the district")
    private Integer districtId;

    @ApiObjectField(description = "The name of the district", required = true)
    private String district;

    @ApiObjectField(description = "The name of the zone that the district is part of", required = true)
    private String zone;

    @Column(name = "reg_code")
    @ApiObjectField(description = "The region code of the district")
    private String regionCode;

    @Column(name = "zone_code")
    @ApiObjectField(description = "The administration code of the zone that the district is part of")
    private String zoneCode;

    public District() {}

    public District(Integer districtId, String district, String zone, String regionCode, String zoneCode) {
        this.districtId = districtId;
        this.district = district;
        this.zone = zone;
        this.regionCode = regionCode;
        this.zoneCode = zoneCode;
    }

    public Integer getDistrictId() {
        return districtId;
    }

    public String getDistrict() {
        return district;
    }

    public String getZone() {
        return zone;
    }

    public String getRegionCode() {
        return regionCode;
    }

    public String getZoneCode() {
        return zoneCode;
    }
}
