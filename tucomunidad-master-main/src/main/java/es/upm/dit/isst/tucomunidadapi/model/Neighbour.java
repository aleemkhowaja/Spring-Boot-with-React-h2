package es.upm.dit.isst.tucomunidadapi.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "neighbour")
public class Neighbour {
    @Id
    @GeneratedValue
    @Column(name = "id_neighbour", nullable = false)
    private int idNeighbour;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "name")
    private String name;

    @Column(name = "identification")
    private String identification;

    @Column(name = "floor")
    private String floor;

    @Column(name = "is_login")
    private boolean isLogin;


}
