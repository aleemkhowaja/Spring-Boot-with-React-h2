package es.upm.dit.isst.tucomunidadapi.repository;

import es.upm.dit.isst.tucomunidadapi.model.Facilities;
import es.upm.dit.isst.tucomunidadapi.model.Vote;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface VoteRepository extends CrudRepository<Vote, Integer> {

}
