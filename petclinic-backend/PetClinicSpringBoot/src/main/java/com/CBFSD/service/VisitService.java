package com.CBFSD.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.CBFSD.entity.Visit;
import com.CBFSD.repository.VisitRepository;

@Service
public class VisitService {

	@Autowired
	VisitRepository visitRepository;
	
	public List<Visit> findVisits() {
		return visitRepository.findAll();
	}
	
	public String storeVisit(Visit visit) {
		Optional<Visit> result = visitRepository.findById(visit.getVisitId());
		if(result.isPresent()) {
			return "Visit id must be unique";
		}else {
			visitRepository.save(visit);
			return "Record stored";
		}
	}
}
