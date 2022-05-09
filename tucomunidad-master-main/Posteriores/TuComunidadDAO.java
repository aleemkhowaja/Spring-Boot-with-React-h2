package es.upm.dit.isst.tucomunidadapi.dao;

import java.util.Date;
import java.util.List;

import es.upm.dit.isst.tucomunidadapi.model.TuComunidad;
import es.upm.dit.isst.tucomunidadapi.model.Votaciones;

public interface TuComunidadDAO extends CrudRepository<Votaciones, Integer> {
    
    //PARTE DE VOTACIONES
    public Votaciones create (String titulo, String descripcion, int votoFavor, int votoContra, int id_votaciones, String gestor);
	
	public List<Votaciones> readByIdVotaciones (int id_votaciones);
	public List<Votaciones> readAllVotaciones ();
	
	public boolean updateVotaciones (Votaciones voto);
	
	public boolean deleteVotaciones (int id_votaciones);

    List<Votaciones> findByIdVotaciones(int id_votaciones);

    //PARTE DE ENVIOS
    public Correspondencia create (Date fecha_llegada, Date fecha_recogida, int id_correspondencia, String vecino, Boolean recogido);
	
	public List<Correspondencia> readByIdEnvios (int id_correspondencia);
	public List<Correspondencia> readAllEnvios ();
	
	public boolean updateEnvios (Correspondencia envio);
	
	public boolean deleteEnvios (int id_votaciones);

    List<Correspondencia> findByIdEnvios(int id_votaciones);
}
