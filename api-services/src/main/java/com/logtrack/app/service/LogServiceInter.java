package com.logtrack.app.service;


public interface LogServiceInter  {
	public void LogInfo(String message);
	public void log(String level, String message, String service);

}
