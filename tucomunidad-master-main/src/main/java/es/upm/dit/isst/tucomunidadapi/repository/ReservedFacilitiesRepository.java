package es.upm.dit.isst.tucomunidadapi.repository;

import es.upm.dit.isst.tucomunidadapi.model.ReservedFacilities;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservedFacilitiesRepository extends CrudRepository<ReservedFacilities, Integer> {

    @Query("select rf from ReservedFacilities rf where rf.facility.idFacilities =:facilityId")
    List<ReservedFacilities> findAllReservedFacilities(int facilityId);
}
