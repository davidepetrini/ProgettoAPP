package savemymoney.mobile.business.impl.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import savemymoney.mobile.domain.Categoria;
import savemymoney.mobile.domain.Movimento;

import java.util.List;


public interface CategoriaRepository extends JpaRepository<Categoria, Long>{

}
