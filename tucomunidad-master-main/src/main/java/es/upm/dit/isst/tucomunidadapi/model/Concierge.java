package es.upm.dit.isst.tucomunidadapi.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "concierge")
public class Concierge {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_concierge", nullable = false)
    private int idConcierge;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "name")
    private String name;

    @Column(name = "identification")
    private String identification;

    @Column(name = "is_login")
    private boolean isLogin;



}
