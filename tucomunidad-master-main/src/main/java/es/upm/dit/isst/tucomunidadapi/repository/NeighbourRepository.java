package es.upm.dit.isst.tucomunidadapi.repository;

import es.upm.dit.isst.tucomunidadapi.model.Manager;
import es.upm.dit.isst.tucomunidadapi.model.Neighbour;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface NeighbourRepository extends JpaRepository<Neighbour, Integer> {

    /**
     * find By Username for login
     * @param username
     * @return
     */
    Neighbour findByEmail(String username);
}
