package es.upm.dit.isst.tucomunidadapi.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "facilities")
public class Facilities {

    @Id
    @GeneratedValue
    @Column(name = "id_facilities", nullable = false)
    private Integer idFacilities;

    @Column(name = "name", nullable = false)
    private String name;


}
