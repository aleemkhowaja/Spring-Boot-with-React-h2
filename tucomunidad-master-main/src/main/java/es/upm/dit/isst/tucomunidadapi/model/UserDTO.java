package es.upm.dit.isst.tucomunidadapi.model;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Data
public class UserDTO {

    private int id;

    private String email;

    private String password;

    private String name;

    private String identification;

    private String floor;

    private String type;
}
