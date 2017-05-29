package com.neda.NEDaviews;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;


@EnableAutoConfiguration
@ComponentScan("controllers")
@SpringBootApplication
public class NeDaViewsApplication {

	public static void main(String[] args) {
		SpringApplication.run(NeDaViewsApplication.class, args);
	}
}
