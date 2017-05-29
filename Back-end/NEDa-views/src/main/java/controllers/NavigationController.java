package controllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Valerio on 5/24/2017.
 */
@Controller
public class NavigationController {

    @RequestMapping("/")
    public String getHomepage(){
        return "SlideShow";
    }

    @RequestMapping("/Contact")
    public String getContactPage(){
        return "Contact";
    }

    @RequestMapping("/About")
    public String getAboutPage(){
        return "About";
    }

    @RequestMapping("/Districts")
    public String getDistrictsPage(){
        return "Districts";
    }

    @RequestMapping("/Earthquakes")
    public String getEarthquakesPage(){
        return "Line";
    }

    @RequestMapping("/Casualties")
    public String getCasualtiesPage(){
        return "MapChart";
    }

    @RequestMapping("/Damages")
    public String getDamagesPage(){
        return "InteractiveMap";
    }

    @RequestMapping("/Households")
    public String getHouseholdsPage(){
        return "ColumnView";
    }

    @RequestMapping("/Survey")
    public String getSurveyPage(){
        return "Survey";
    }
}
