package es.upm.dit.isst.tucomunidadapi.controllers;

import es.upm.dit.isst.tucomunidadapi.model.Concierge;
import es.upm.dit.isst.tucomunidadapi.model.Manager;
import es.upm.dit.isst.tucomunidadapi.model.Neighbour;
import es.upm.dit.isst.tucomunidadapi.model.UserDTO;
import es.upm.dit.isst.tucomunidadapi.repository.ConciergeRepository;
import es.upm.dit.isst.tucomunidadapi.repository.ManagerRepository;
import es.upm.dit.isst.tucomunidadapi.repository.NeighbourRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private NeighbourRepository neighbourRepository;

    @Autowired
    private ManagerRepository managerRepository;

    @Autowired
    private ConciergeRepository conciergeRepository;


    @GetMapping("/findAll")
    public List<Neighbour> findAll() {
        return (List<Neighbour>) neighbourRepository.findAll();
    }

    @GetMapping("/findbyId/{id}")
    public Optional<Neighbour> findbyId(@PathVariable int id) {
        return neighbourRepository.findById(id);
    }

    @PostMapping("/save")
    public UserDTO save(@RequestBody UserDTO userDTO) {
         if(userDTO.getType().equalsIgnoreCase("manager"))
         {
             Manager manager = new Manager();
             manager.setEmail(userDTO.getEmail());
             manager.setIdentification(userDTO.getIdentification());
             manager.setName(userDTO.getName());
             manager.setPassword(userDTO.getPassword());
             if(managerRepository.findByEmail(userDTO.getEmail()) != null)
                 throw new RuntimeException("Manager with this email already exist!");
             managerRepository.save(manager);
             userDTO.setId(manager.getIdManager());

         } else if(userDTO.getType().equalsIgnoreCase("neighbour")){
             Neighbour neighbour = new Neighbour();
             neighbour.setEmail(userDTO.getEmail());
             neighbour.setIdentification(userDTO.getIdentification());
             neighbour.setName(userDTO.getName());
             neighbour.setPassword(userDTO.getPassword());
             neighbour.setFloor(userDTO.getFloor());
             if(neighbourRepository.findByEmail(userDTO.getEmail()) != null)
                 throw new RuntimeException("Neighbour with this email already exist!");
             neighbourRepository.save(neighbour);
             userDTO.setId(neighbour.getIdNeighbour());

         } else if(userDTO.getType().equalsIgnoreCase("concierge")){
             Concierge concierge  = new Concierge();
             concierge.setEmail(userDTO.getEmail());
             concierge.setIdentification(userDTO.getIdentification());
             concierge.setName(userDTO.getName());
             concierge.setPassword(userDTO.getPassword());
             if(conciergeRepository.findByEmail(userDTO.getEmail()) != null)
                 throw new RuntimeException("Concierge with this email already exist!");
             conciergeRepository.save(concierge);
             userDTO.setId(concierge.getIdConcierge());
         }

         return  userDTO;
    }


}
