package es.upm.dit.isst.tucomunidadapi.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.Instant;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "package")
public class Packages {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_package", nullable = false)
    private Long idPackage;

    @Column(name = "title")
    private String title;

    @Column(name = "date_of_pickup")
    private Instant reservationDate;

    @Column(name = "description")
    private String description;

}
