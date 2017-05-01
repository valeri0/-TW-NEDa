package com.TWNEDa.Earthquakes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;

/**
 * Created by Valerio on 4/30/2017.
 */
@RestController
public class EarthquakesController {

    @Autowired
    EarthquakesService earthquakesService;


}
