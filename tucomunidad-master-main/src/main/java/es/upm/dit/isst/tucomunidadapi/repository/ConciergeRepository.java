package es.upm.dit.isst.tucomunidadapi.repository;

import es.upm.dit.isst.tucomunidadapi.model.Concierge;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConciergeRepository extends JpaRepository<Concierge, Integer> {

    Concierge findByEmail(String username);
}
