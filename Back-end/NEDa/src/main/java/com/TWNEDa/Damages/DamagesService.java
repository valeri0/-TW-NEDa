package com.TWNEDa.Damages;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by eduar on 01-May-17.
 */
@Service
public class DamagesService {

    @Autowired
    private DamagesRepository damagesRepository;

    public List<Damage> getAllDamages(){
        List<Damage> damages = new ArrayList<>();
        damages.addAll(damagesRepository.findAll());
        return damages;
    }

    public List<Damage> getAllDamagesByRisk(String risk){
        List<Damage> damages = new ArrayList<>();
        damages = damagesRepository.findByRisk(risk);
        return damages;
    }

    public List<Damage> getAllDamagesNoDescription(String description){
        List<Damage> damages = new ArrayList<>();
        damages = damagesRepository.findByDescriptionEquals(description);
        return damages;
    }

    public List<Damage> getAllDamagesWithDescription(String description){
        List<Damage> damages = new ArrayList<>();
        damages = damagesRepository.findByDescriptionIsNot(description);
        return damages;
    }

    public List<Damage> getAllDamagesByRiskAndNoDescription(String risk, String description){
        List<Damage> damages = new ArrayList<>();
        damages = damagesRepository.findByRiskAndDescriptionEquals(risk, description);
        return damages;
    }

    public List<Damage> getAllDamagesByRiskWithDescription(String risk, String description){
        List<Damage> damages = new ArrayList<>();
        damages = damagesRepository.findByRiskAndDescriptionIsNot(risk, description);
        return damages;
    }

    public List<Damage> getAllDamagesByName(String name){
        List<Damage> damages = new ArrayList<>();
        damages = damagesRepository.findByNameIgnoreCase(name);
        return damages;
    }
}
