package es.upm.dit.isst.tucomunidadapi.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "community")
public class Community {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_community", nullable = false)
    private Long idCommunity;

    @Column(name = "address")
    private String address;

    @Column(name = "address_code")
    private String addressCode;

    @Column(name = "name")
    private String name;

    @Column(name = "identification")
    private String identification;

    @Column(name = "floor")
    private String floor;

    @Column(name = "is_login")
    private boolean isLogin;


}
