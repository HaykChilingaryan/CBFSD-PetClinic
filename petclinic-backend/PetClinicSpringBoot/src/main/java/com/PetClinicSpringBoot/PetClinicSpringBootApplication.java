package com.PetClinicSpringBoot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "com")
@EntityScan(basePackages = "com.CBFSD.entity")
@EnableJpaRepositories(basePackages = "com.CBFSD.repository")
public class PetClinicSpringBootApplication {

	public static void main(String[] args) {
		SpringApplication.run(PetClinicSpringBootApplication.class, args);
	}

}
