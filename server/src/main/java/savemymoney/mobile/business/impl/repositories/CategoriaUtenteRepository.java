package savemymoney.mobile.business.impl.repositories;

import java.util.List;
import java.util.Set;
import org.springframework.data.jpa.repository.JpaRepository;

import savemymoney.mobile.domain.Categoria;
import savemymoney.mobile.domain.Categoria_has_Utente;
import savemymoney.mobile.domain.Utente;



public interface CategoriaUtenteRepository extends JpaRepository<Categoria_has_Utente, Long> {
    List<Categoria> findCategoriaByUtente(Utente utente);
}
