package com.TWNEDa.Partners;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * Created by Valerio on 4/28/2017.
 */
public interface PartnersRepository extends JpaRepository<Partners,PartnersKey> {

}
