package es.upm.dit.isst.tucomunidadapi.controllers;

import es.upm.dit.isst.tucomunidadapi.model.Packages;
import es.upm.dit.isst.tucomunidadapi.repository.PackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/package")
@CrossOrigin(origins = "http://localhost:3000")
public class PackageController {

    @Autowired
    private PackageRepository packageRepository;


    @GetMapping("/findAll")
    public List<Packages> findAll() {
        return (List<Packages>) packageRepository.findAll();
    }

    @GetMapping("/findbyId/{id}")
    public Optional<Packages> findbyId(@PathVariable int id) {
        return packageRepository.findById(id);
    }

    @PostMapping("/save")
    public Packages save(@RequestBody Packages packages) {
        return packageRepository.save(packages);
    }


}
