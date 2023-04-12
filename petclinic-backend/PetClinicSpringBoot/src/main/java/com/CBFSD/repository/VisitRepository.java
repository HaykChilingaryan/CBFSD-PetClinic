package com.CBFSD.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.CBFSD.entity.Visit;

@Repository
public interface VisitRepository extends JpaRepository<Visit, Integer>{

}
