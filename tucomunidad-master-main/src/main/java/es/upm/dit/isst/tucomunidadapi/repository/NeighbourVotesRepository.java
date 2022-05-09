package es.upm.dit.isst.tucomunidadapi.repository;

import es.upm.dit.isst.tucomunidadapi.model.NeighbourVotes;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface NeighbourVotesRepository extends CrudRepository<NeighbourVotes, Integer> {

    @Query("select nv from NeighbourVotes nv where nv.neighbour.idNeighbour =:neighbourId AND nv.vote.idVote =:voteId")
    Optional<NeighbourVotes> findAllNeighbourVotesByNeighbourId(@Param("neighbourId") int neighbourId, @Param("voteId") int voteId);

}
