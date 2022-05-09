package es.upm.dit.isst.tucomunidadapi.controllers;


import es.upm.dit.isst.tucomunidadapi.model.*;
import es.upm.dit.isst.tucomunidadapi.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/dashboard")
@CrossOrigin(origins = "http://localhost:3000")
public class DashboardController {

    @Autowired
    VoteRepository voteRepository;

    @Autowired
    PackageRepository packageRepository;

    @Autowired
    ReservedFacilitiesRepository reservedFacilitiesRepository;

    @Autowired
    FacilitiesRepository facilitiesRepository;

    @GetMapping("/findAll")
    public DashboardDTO findAll() {

        DashboardDTO dashboardDetails = new DashboardDTO();

        int votesSize = 0;
        int packagesSize = 0;

        List<Vote> votes = (List<Vote>)voteRepository.findAll();
        if(votes != null) votesSize = votes.size();
        dashboardDetails.setVotes(votesSize);

        List<Packages> packages = (List<Packages>)packageRepository.findAll();
        if(packages != null) packagesSize = packages.size();
        dashboardDetails.setPackagesSize(packagesSize);

        /**
         * get All Facility and Reserved Facilities
         * */
        List<ReservedFacilityDTO> reservedFacilityDTOS = new ArrayList<>();
        List<Facilities> facilities = (List<Facilities>)facilitiesRepository.findAll();
        if(facilities != null) {

            for(int i=0; i<facilities.size(); i++) {
                if(i >= 5) break;

                ReservedFacilityDTO reservedFacilityDTO = new ReservedFacilityDTO();
                List<ReservedFacilities> reservedFacilities = reservedFacilitiesRepository
                        .findAllReservedFacilities(facilities.get(i).getIdFacilities());
                int size = 0;
                if(reservedFacilities != null)
                {
                    size = reservedFacilities.size();
                }
                reservedFacilityDTO.setFacilityName(facilities.get(i).getName());
                reservedFacilityDTO.setTotalReserved(size);
                reservedFacilityDTO.setAllReserved(reservedFacilityDTO.getAllReserved()+size);
                reservedFacilityDTOS.add(reservedFacilityDTO);
            }
        }
        dashboardDetails.setReservedFacilityDTOS(reservedFacilityDTOS);
        return dashboardDetails;
    }


}
