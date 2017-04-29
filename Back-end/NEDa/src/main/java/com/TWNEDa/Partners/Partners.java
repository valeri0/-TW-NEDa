package com.TWNEDa.Partners;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Created by Valerio on 4/28/2017.
 */
@Entity
@Table(name="PARTNERS")
public class Partners {
    @EmbeddedId
    private PartnersKey id;

    public Partners() {
    }

    public Partners(PartnersKey id) {
        this.id = id;
    }

    public PartnersKey getId() {
        return id;
    }

    public void setId(PartnersKey id) {
        this.id = id;
    }
}
