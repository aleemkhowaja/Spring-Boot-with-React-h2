package es.upm.dit.isst.tucomunidadapi.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "vote")
public class Vote {

    @Id
    @GeneratedValue
    @Column(name = "id_vote")
    private Integer idVote;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @OneToOne
    @JoinColumn(name = "id_manager")
    private Manager manager;

    @Column(name = "number_of_votes_in_favour")
    private Integer numberOfVotesInFavour;

    @Column(name = "number_of_votes_against")
    private Integer numberOfVotesAgainst;
}
