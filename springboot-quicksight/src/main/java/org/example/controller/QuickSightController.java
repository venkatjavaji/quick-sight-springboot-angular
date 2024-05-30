package org.example.controller;


import org.example.service.QuickSightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QuickSightController {

    @Autowired
    QuickSightService quickSightService;
    @GetMapping("/api/quicksight/dashboard/{dashBoardName}")
    public ResponseEntity<?> getQuickSightDashBoardEmbedUrl(@PathVariable("dashBoardName") String dashBoardName, @RequestParam String userName) {
        try {
            // {dashBoardName, dashboardHashKey should be part of configuration and send it to the service method TODO
            return ResponseEntity.status(HttpStatus.OK).body(quickSightService.getQuickSightAnalyticsEmbedUrl(dashBoardName, userName));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @GetMapping("/api/quicksight/console")
    public ResponseEntity<?> getQuickSightConsoleEmbedUrl(@RequestParam String userName) {

        try {
            return ResponseEntity.status(HttpStatus.OK).body(quickSightService.getQuickSightConsoleEmbedUrl(userName));
        } catch (Exception e) {
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

}
