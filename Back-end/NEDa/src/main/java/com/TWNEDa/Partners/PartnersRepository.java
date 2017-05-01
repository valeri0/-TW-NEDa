package com.TWNEDa.Partners;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Valerio on 4/28/2017.
 */
@Repository
public interface PartnersRepository extends JpaRepository<Partners,PartnersKey> {
    public List<Partners> findByDistId (int distId);

}
