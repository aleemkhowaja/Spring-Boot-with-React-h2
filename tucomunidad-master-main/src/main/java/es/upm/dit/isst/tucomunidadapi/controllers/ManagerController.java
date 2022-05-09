package es.upm.dit.isst.tucomunidadapi.controllers;

import es.upm.dit.isst.tucomunidadapi.model.Manager;
import es.upm.dit.isst.tucomunidadapi.repository.ManagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/manager")
@CrossOrigin(origins = "http://localhost:3000")
public class ManagerController {

    @Autowired
    private ManagerRepository managerRepository;


    @GetMapping("/findAll")
    public List<Manager> findAll() {
        return (List<Manager>) managerRepository.findAll();
    }

    @GetMapping("/findbyId/{id}")
    public Optional<Manager> findbyId(@PathVariable int id) {
        return managerRepository.findById(id);
    }

    @PostMapping("/save")
    public Manager save(@RequestBody Manager neighbour) {
        return managerRepository.save(neighbour);
    }


}
