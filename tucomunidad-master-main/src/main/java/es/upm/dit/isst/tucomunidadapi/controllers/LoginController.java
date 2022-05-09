package es.upm.dit.isst.tucomunidadapi.controllers;


import es.upm.dit.isst.tucomunidadapi.model.Concierge;
import es.upm.dit.isst.tucomunidadapi.model.Manager;
import es.upm.dit.isst.tucomunidadapi.model.Neighbour;
import es.upm.dit.isst.tucomunidadapi.repository.ConciergeRepository;
import es.upm.dit.isst.tucomunidadapi.repository.ManagerRepository;
import es.upm.dit.isst.tucomunidadapi.repository.NeighbourRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {

    @Autowired
    ManagerRepository managerRepository;

    @Autowired
    NeighbourRepository neighbourRepository;

    @Autowired
    ConciergeRepository conciergeRepository;

    @PostMapping("/login")
    public HashMap<String, Object> login(@RequestParam(value = "email") String email,
                         @RequestParam(value = "password") String password,
                         @RequestParam(value = "loginBy") String loginBy) {

        HashMap<String, Object> response = new HashMap<>();
        if (loginBy.equalsIgnoreCase("manager")) {
            Manager manager = managerRepository.findByEmail(email);
            if (manager != null && password.equals(manager.getPassword())) {
                response.put("id",manager.getIdManager());
                response.put("name", manager.getName());
                return response;
            } else {
                return null;
            }
        } else if (loginBy.equalsIgnoreCase("neighbour")) {
            Neighbour neighbour = neighbourRepository.findByEmail(email);
            if (neighbour != null && password.equals(neighbour.getPassword())) {
                response.put("id",neighbour.getIdNeighbour());
                response.put("name", neighbour.getName());
                return response;
            } else {
                return null;
            }
        } else {
            Concierge concierge = conciergeRepository.findByEmail(email);
            if (concierge != null && password.equals(concierge.getPassword())) {
                response.put("id",concierge.getIdConcierge());
                response.put("name", concierge.getName());
                return response;
            } else {
                return null;
            }
        }

    }
}
