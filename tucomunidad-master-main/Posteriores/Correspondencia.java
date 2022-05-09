package es.upm.dit.isst.tucomunidadapi.model;

import java.sql.Date;

import javax.persistence.*;

@Entity
@Table(name="CORRESPONDENCIA")
public class Correspondencia {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id_correspondencia;

    @Column(name = "vecino")
    private String vecino;
    @Column(name = "fecha_llegada")
    private Date fecha_llegada;
    @Column(name = "fecha_recogida")
    private Date fecha_recogida;
    @Column(name = "recogido")
    private Boolean recogido;

    public Correspondencia() {
    }
    
    public Correspondencia(int id_correspondencia, String vecino, Date fecha_llegada, Date fecha_recogida,
            Boolean recogido) {
        this.id_correspondencia = id_correspondencia;
        this.vecino = vecino;
        this.fecha_llegada = fecha_llegada;
        this.fecha_recogida = fecha_recogida;
        this.recogido = recogido;
    }

    public int getId_correspondencia() {
        return id_correspondencia;
    }
    public void setId_correspondencia(int id_correspondencia) {
        this.id_correspondencia = id_correspondencia;
    }
    public String getVecino() {
        return vecino;
    }
    public void setVecino(String vecino) {
        this.vecino = vecino;
    }
    public Date getFecha_llegada() {
        return fecha_llegada;
    }
    public void setFecha_llegada(Date fecha_llegada) {
        this.fecha_llegada = fecha_llegada;
    }
    public Date getFecha_recogida() {
        return fecha_recogida;
    }
    public void setFecha_recogida(Date fecha_recogida) {
        this.fecha_recogida = fecha_recogida;
    }
    public Boolean getrecogido() {
        return recogido;
    }
    public void setrecogido(Boolean recogido) {
        this.recogido = recogido;
    }
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((fecha_llegada == null) ? 0 : fecha_llegada.hashCode());
        result = prime * result + ((fecha_recogida == null) ? 0 : fecha_recogida.hashCode());
        result = prime * result + id_correspondencia;
        result = prime * result + ((recogido == null) ? 0 : recogido.hashCode());
        result = prime * result + ((vecino == null) ? 0 : vecino.hashCode());
        return result;
    }
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Correspondencia other = (Correspondencia) obj;
        if (fecha_llegada == null) {
            if (other.fecha_llegada != null)
                return false;
        } else if (!fecha_llegada.equals(other.fecha_llegada))
            return false;
        if (fecha_recogida == null) {
            if (other.fecha_recogida != null)
                return false;
        } else if (!fecha_recogida.equals(other.fecha_recogida))
            return false;
        if (id_correspondencia != other.id_correspondencia)
            return false;
        if (recogido == null) {
            if (other.recogido != null)
                return false;
        } else if (!recogido.equals(other.recogido))
            return false;
        if (vecino == null) {
            if (other.vecino != null)
                return false;
        } else if (!vecino.equals(other.vecino))
            return false;
        return true;
    }
    @Override
    public String toString() {
        return "Correspondencia [fecha_llegada=" + fecha_llegada + ", fecha_recogida=" + fecha_recogida + ", recogido="
                + recogido + ", vecino=" + vecino + "]";
    }
    
}
