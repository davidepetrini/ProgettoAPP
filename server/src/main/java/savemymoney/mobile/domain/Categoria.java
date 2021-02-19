package savemymoney.mobile.domain;

import javax.persistence.*;

@Entity
@Table(name = "Categoria")
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_CATEGORIA", nullable = false)
    private Long id;

    @Enumerated(EnumType.STRING)
    private TipoMovimento segno;

    @Column(name = "NOME", nullable = false, length = 255)
    private String nome;

    @Column(name = "BUDGET", length = 255)
    private float budget;

    @ManyToOne
    @JoinColumn(name = "UTENTE_IDUTENTE", nullable = false)
    private Utente utente;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public TipoMovimento getSegno() {
        return segno;
    }

    public void setSegno(TipoMovimento segno) {
        this.segno = segno;
    }

    public float getBudget() {
        return budget;
    }

    public void setBudget(float budget) {
        this.budget = budget;
    }

    public Utente getUtente() {
        return utente;
    }

    public void setUtente(Utente utente) {
        this.utente = utente;
    }

}

