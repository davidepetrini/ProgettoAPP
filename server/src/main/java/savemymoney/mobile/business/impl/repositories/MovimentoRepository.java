package savemymoney.mobile.business.impl.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import savemymoney.mobile.domain.Movimento;

import java.util.List;

public interface MovimentoRepository extends JpaRepository<Movimento, Long>{
    List<Movimento> findAllMovimentiByCategoriaId(Long idCategoria);
    List<Movimento> findAllMovimentiByUtenteId(Long idUtente);
    void deleteMovimentiByCategoria(Long idCategoria);

}