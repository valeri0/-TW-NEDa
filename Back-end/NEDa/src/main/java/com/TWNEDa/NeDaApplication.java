package com.TWNEDa;

import org.jsondoc.spring.boot.starter.EnableJSONDoc;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan("com.TWNEDa")
@EnableJSONDoc
public class NeDaApplication {

	public static void main(String[] args) {
		SpringApplication.run(NeDaApplication.class, args);
	}

}
