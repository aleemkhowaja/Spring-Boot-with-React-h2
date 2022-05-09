package es.upm.dit.isst.tucomunidadapi.model;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class DashboardDTO {

    private int votes;
    private int packagesSize;
    List<ReservedFacilityDTO> reservedFacilityDTOS = new ArrayList<>();

}
