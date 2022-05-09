package es.upm.dit.isst.tucomunidadapi.model;

import lombok.Data;

import java.util.HashMap;

@Data
public class ReservedFacilityDTO {

    private String facilityName;
    private int allReserved;
    private int totalReserved;

}
