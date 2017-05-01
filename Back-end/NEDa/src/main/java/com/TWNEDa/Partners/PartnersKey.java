package com.TWNEDa.Partners;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by Valerio on 4/28/2017.
 */
@Embeddable
public class PartnersKey implements Serializable{


    private String partner;

    private String district;

    public PartnersKey(){}

    public PartnersKey(String partner, String district) {
        this.partner = partner;
        this.district = district;
    }

    public String getPartner() {
        return partner;
    }

    public String getDistrict() {
        return district;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        PartnersKey that = (PartnersKey) o;

        if (partner != null ? !partner.equals(that.partner) : that.partner != null) return false;
        return district != null ? district.equals(that.district) : that.district == null;
    }

    @Override
    public int hashCode() {
        int result = partner != null ? partner.hashCode() : 0;
        result = 31 * result + (district != null ? district.hashCode() : 0);
        return result;
    }
}
