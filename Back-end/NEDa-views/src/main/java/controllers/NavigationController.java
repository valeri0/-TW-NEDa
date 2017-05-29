package controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by Valerio on 5/24/2017.
 */
@Controller
public class NavigationController {

    @RequestMapping(value = "/",method = RequestMethod.GET)
    public String getHomepage(HttpServletRequest request, HttpServletResponse response){
        return "forwardL/resources/static/SlideShow.html";
    }
}
