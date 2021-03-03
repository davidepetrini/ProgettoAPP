package savemymoney.mobile.business.impl.repositories;

import org.springframework.data.jpa.domain.JpaSort;
import org.springframework.data.jpa.repository.JpaRepository;
import savemymoney.mobile.domain.Movimento;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;



import java.util.List;

public interface MovimentoRepository extends JpaRepository<Movimento, Long>{
    List<Movimento> findAllMovimentiByCategoriaId(Long idCategoria);
    List<Movimento> findAllMovimentiByUtenteId(Long idUtente, JpaSort data);
    //List<Movimento> findAllMovimenti();

    void deleteMovimentiByCategoria(Long idCategoria);
    //void createMovimentiByUtente(Long idUtente);

}