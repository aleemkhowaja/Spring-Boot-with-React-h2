package es.upm.dit.isst.tucomunidadapi.controllers;

import es.upm.dit.isst.tucomunidadapi.model.Facilities;
import es.upm.dit.isst.tucomunidadapi.model.ReservedFacilities;
import es.upm.dit.isst.tucomunidadapi.repository.FacilitiesRepository;
import es.upm.dit.isst.tucomunidadapi.repository.ReservedFacilitiesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/facilites")
@CrossOrigin(origins = "http://localhost:3000")
public class FacilitiesController {

    @Autowired
    private ReservedFacilitiesRepository reservedFacilitiesRepository;

    @Autowired
    private FacilitiesRepository facilitiesRepository;


    @GetMapping("/findAllFacilities")
    public List<Facilities> findAllFacilities() {
        return (List<Facilities>) facilitiesRepository.findAllFacilitiesNotReserved();
    }

    @GetMapping("/findAll")
    public List<ReservedFacilities> findAll() {
        return (List<ReservedFacilities>) reservedFacilitiesRepository.findAll();
    }

    @GetMapping("/findbyId/{id}")
    public ReservedFacilities findbyId(@PathVariable Integer idconserje) {
        return (ReservedFacilities) reservedFacilitiesRepository.findAll();
    }

    @PostMapping("/save")
    public ReservedFacilities save(@RequestBody ReservedFacilities facilities) {
        return (ReservedFacilities) reservedFacilitiesRepository.save(facilities);
    }


}
