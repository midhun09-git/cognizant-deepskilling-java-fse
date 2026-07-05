package com.cognizant.springlearn.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import com.cognizant.springlearn.Country;

@Service
public class CountryService {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryService.class);

    public Country getCountry(String code) {
        LOGGER.info("START");

        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");

        List<Country> countryList = context.getBean("countryList", List.class);

        Country country = null;

        for (Country c : countryList) {
            if (c.getCode().equalsIgnoreCase(code)) {
                country = c;
                break;
            }
        }

        ((ClassPathXmlApplicationContext) context).close();

        LOGGER.debug("Country : {}", country);
        LOGGER.info("END");

        return country;
    }
}