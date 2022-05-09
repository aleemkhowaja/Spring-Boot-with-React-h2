package es.upm.dit.isst.tucomunidadapi.servicios;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.upm.dit.isst.tucomunidadapi.dao.VotacionesRepository;
import es.upm.dit.isst.tucomunidadapi.model.Votaciones;

@Service
public class VotacionesService { //registrar, modficar, baja, buscarPorId, alta

    @Autowired
    private VotacionesRepository votacionesRepository;
    private int nextID = 0;


    @Transactional
    public Votaciones crear(String titulo, String descripcion, String gestor) {

        Votaciones votacion = new Votaciones();
        nextID++;
        votacionesRepository.save(votacion);

        return votacion;
    }

    public Votaciones votarAFavor(int idVotacion, int numeroVotosFavor ) throws Error{

        Votaciones respuesta = votacionesRepository.findById(idVotacion);
        if (!respuesta.equals(null)) {
            Votaciones votacion = votacionesRepository.findById(idVotacion);
            votacion.setNumeroVotosFavor(numeroVotosFavor);
            return votacion;
        } else {
            throw new Error("No se encontro la votacion solicitada");
        }

    }

    public Votaciones votarEnContra(int idVotacion, int numeroVotosContra) throws Error{

        Votaciones respuesta = votacionesRepository.findById(idVotacion);
        if (!respuesta.equals(null)) {
            Votaciones votacion = votacionesRepository.findById(idVotacion);
            votacion.setNumeroVotosContra(numeroVotosContra);
            return votacion;
        } else {
            throw new Error("No se encontro la votacion solicitada");
        }

    }

    public Votaciones buscarPorId(int idVotacion) {
        Votaciones respuesta = votacionesRepository.findById(idVotacion);
        if (!respuesta.equals(null)) {;
            return respuesta;
        } else {
            throw new Error("No se encontro la votacion solicitada");
        }

    }

    public boolean resultadoVotacion(int idVotacion) {
        int cont1 = buscarPorId(idVotacion).getNumeroVotosFavor();
        int cont2 = buscarPorId(idVotacion).getNumeroVotosContra();;

        if (cont1 > cont2) {
            return true;
        } else {
            return false;
        }
    }
}
