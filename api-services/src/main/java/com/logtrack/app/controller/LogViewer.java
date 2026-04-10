package com.logtrack.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.logtrack.app.model.LogEntity;
import com.logtrack.app.repositry.LogRepo;

;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class LogViewer {
	@Autowired
	private LogRepo repo;
	 @GetMapping("/data")
	    public List<LogEntity> getAllLogs() {
	        return repo.findAll();
	    }

}
