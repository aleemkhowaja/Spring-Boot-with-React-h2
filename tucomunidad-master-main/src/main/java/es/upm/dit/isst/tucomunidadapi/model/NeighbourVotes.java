package es.upm.dit.isst.tucomunidadapi.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "neighbour_votes")
public class NeighbourVotes {

    @Id
    @GeneratedValue
    @Column(name = "id_neighbour_votes")
    private Integer idNeighbourVote;

    @ManyToOne
    @JoinColumn(name = "id_neighbour")
    private Neighbour neighbour;

    @ManyToOne
    @JoinColumn(name = "id_vote")
    private Vote vote;

}
