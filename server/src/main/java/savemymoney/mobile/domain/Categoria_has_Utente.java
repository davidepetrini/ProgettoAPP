package savemymoney.mobile.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "CATEGORIA_HAS_UTENTE")
public class Categoria_has_Utente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_CATUTE", nullable = false)
    private Long id;

    @Column(name="Budget",length = 255)
    private float budget;

    @ManyToOne
    @JoinColumn(name="CATEGORIA_IDCATEGORIA")
    private Categoria categoria;

    @ManyToOne
    @JoinColumn(name="ID_UTENTE")
    private Utente utente;

    public Categoria_has_Utente() {}

    public Categoria_has_Utente(float budget,Categoria categoria,Utente utente) {
        this.budget=budget;
        this.categoria=categoria;
        this.utente=utente;
    }

    public void setId(Long id) {
        this.id=id;
    }

    public Long getId() {
        return this.id;
    }

    public void setBudget (float budget) {
        this.budget=budget;
    }

    public float getBudget() {
        return this.budget;
    }

    public Utente getUtente() {
        return this.utente;
    }

    public void setUtente(Utente utente) {
        this.utente = utente;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria= categoria;
    }

    public Categoria getCategoria() {
        return this.categoria;
    }
}
