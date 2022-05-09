package es.upm.dit.isst.tucomunidadapi.controllers;

import es.upm.dit.isst.tucomunidadapi.model.Neighbour;
import es.upm.dit.isst.tucomunidadapi.model.Packages;
import es.upm.dit.isst.tucomunidadapi.repository.NeighbourRepository;
import es.upm.dit.isst.tucomunidadapi.repository.PackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/neighbour")
@CrossOrigin(origins = "http://localhost:3000")
public class NeighbourController {

    @Autowired
    private NeighbourRepository neighbourRepository;


    @GetMapping("/findAll")
    public List<Neighbour> findAll() {
        return (List<Neighbour>) neighbourRepository.findAll();
    }

    @GetMapping("/findbyId/{id}")
    public Optional<Neighbour> findbyId(@PathVariable int id) {
        return neighbourRepository.findById(id);
    }

    @PostMapping("/save")
    public Neighbour save(@RequestBody Neighbour neighbour) {
        return neighbourRepository.save(neighbour);
    }


}
