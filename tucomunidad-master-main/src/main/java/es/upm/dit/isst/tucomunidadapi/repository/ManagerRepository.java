package es.upm.dit.isst.tucomunidadapi.repository;

import es.upm.dit.isst.tucomunidadapi.model.Facilities;
import es.upm.dit.isst.tucomunidadapi.model.Manager;
import es.upm.dit.isst.tucomunidadapi.model.Neighbour;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface ManagerRepository extends JpaRepository<Manager, Integer> {

    Manager findByEmail(String username);
}
