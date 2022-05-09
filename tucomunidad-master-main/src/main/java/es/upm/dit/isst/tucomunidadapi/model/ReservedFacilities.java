package es.upm.dit.isst.tucomunidadapi.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.annotation.Generated;
import javax.persistence.*;
import java.time.Instant;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "reserved_facilities")
public class ReservedFacilities {

    @Id
    @GeneratedValue
    @Column(name = "id_reserved_facilities", nullable = false)
    private Integer idReservedFacilities;

    @ManyToOne
    @JoinColumn(name = "id_facilities")
    private Facilities facility;

    @OneToOne
    @JoinColumn(name = "id_neighbour")
    private Neighbour neighbour;

    @Column(name = "reservation_date")
    private Instant reservationDate;




}
