package savemymoney.mobile.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Movimento")
public class Movimento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_MOVIMENTO", nullable = false)
    private Long id;


    @Column(name = "DATA", nullable = false)
    private Date data;

    @Column(name = "IMPORTO", nullable = false)
    private double importo;

    @ManyToOne
    @JoinColumn(name = "CATEGORIA_IDCATEGORIA", nullable = false)
    private Categoria categoria;

    @ManyToOne
    @JoinColumn(name = "UTENTE_IDUTENTE", nullable = false)
    private Utente utente;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id=id;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data=data;
    }

    public double getImporto() {
        return importo;
    }

    public void setImporto(double d) {
        this.importo=d;
    }


    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria=categoria;
    }

    public Utente getUtente() {
        return utente;
    }

    public void setUtente(Utente utente) {
        this.utente = utente;
    }



}
