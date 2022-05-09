package es.upm.dit.isst.tucomunidadapi.controllers;

import es.upm.dit.isst.tucomunidadapi.model.*;
import es.upm.dit.isst.tucomunidadapi.repository.FacilitiesRepository;
import es.upm.dit.isst.tucomunidadapi.repository.NeighbourVotesRepository;
import es.upm.dit.isst.tucomunidadapi.repository.ReservedFacilitiesRepository;
import es.upm.dit.isst.tucomunidadapi.repository.VoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/votes")
@CrossOrigin(origins = "http://localhost:3000")
public class VoteController {

    @Autowired
    private VoteRepository voteRepository;

    @Autowired
    private NeighbourVotesRepository neighbourVotesRepository;


    @GetMapping("/findAll")
    public List<Vote> findAll() {
        return (List<Vote>) voteRepository.findAll();
    }

    @GetMapping("/findbyId/{id}")
    public Optional<Vote> findbyId(@PathVariable int id) {
        return voteRepository.findById(id);
    }

    @GetMapping("/findNeighbourVotesByNeighbourId/{neighbourId}/{voteId}")
    public Optional<NeighbourVotes> findNeighbourVotesByNeighbourId(@PathVariable int neighbourId, @PathVariable int voteId) {
        return neighbourVotesRepository.findAllNeighbourVotesByNeighbourId(neighbourId, voteId);
    }

    @PostMapping("/save")
    public NeighbourVotes save(@RequestBody NeighbourVotes neighbourVotes) {
        Vote vote = neighbourVotes.getVote();
        voteRepository.save(vote);
        neighbourVotesRepository.save(neighbourVotes);
        return neighbourVotes;
    }

    @PostMapping("/saveVote")
    public Vote save(@RequestBody Vote vote) {
        return voteRepository.save(vote);
    }



}
