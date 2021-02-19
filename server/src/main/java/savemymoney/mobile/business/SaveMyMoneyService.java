package savemymoney.mobile.business;

import java.util.List;
import java.util.Set;

import savemymoney.mobile.domain.Categoria;
import savemymoney.mobile.domain.Movimento;
import savemymoney.mobile.domain.Utente;


public interface SaveMyMoneyService {

	Utente findUtenteByUsername(String username) throws BusinessException;

	Utente updateProfilo(Utente utente) throws BusinessException;

	List<Categoria> findAllCategorie() throws BusinessException;

	Categoria findCategoriaById(Long id) throws BusinessException;

	void updateCategoria(Categoria categoria) throws BusinessException;

	void deleteCategoriaById(Long id) throws BusinessException;

	void insertCategoria(Categoria categoria) throws BusinessException;






	List<Movimento> findAllMovimenti() throws BusinessException;

	Movimento findMovimentoById(Long id) throws BusinessException;

	void createMovimento(Movimento movimento) throws BusinessException;

	void updateMovimento(Movimento movimento) throws BusinessException;

	void deleteMovimentoById(Long id) throws BusinessException;

	void insertMovimento(Movimento movimento) throws BusinessException;

	//void createCategoria(Categoria categoria) throws BusinessException;


//	void totalMovimento(Movimento movimento)throws BusinessException;


}

