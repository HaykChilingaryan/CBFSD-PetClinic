package com.CBFSD.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.CBFSD.entity.Visit;
import com.CBFSD.service.VisitService;

@RestController
@RequestMapping("visit")
@CrossOrigin(origins = "http://localhost:4200/")
public class VisitController {

	@Autowired
	VisitService visitService;
	
	@PostMapping(value = "storeVisit",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String storeVisit(@RequestBody Visit visit) {
		return visitService.storeVisit(visit);
	}
	
	@GetMapping(value = "findAllVisits",produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Visit> findAllVisits() {
		return visitService.findVisits();
	}
}
