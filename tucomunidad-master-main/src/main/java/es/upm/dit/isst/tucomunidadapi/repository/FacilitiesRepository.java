package es.upm.dit.isst.tucomunidadapi.repository;

import es.upm.dit.isst.tucomunidadapi.model.Facilities;
import es.upm.dit.isst.tucomunidadapi.model.ReservedFacilities;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FacilitiesRepository extends CrudRepository<Facilities, Integer> {

    @Query("select f from Facilities f where f.idFacilities not in (select rf.facility.idFacilities from ReservedFacilities rf)")
    List<Facilities> findAllFacilitiesNotReserved();



}
