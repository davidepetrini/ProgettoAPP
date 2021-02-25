package savemymoney.mobile.business.impl;

import java.util.List;
import java.util.Set;
import java.util.Scanner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.jpa.domain.JpaSort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import savemymoney.mobile.business.BusinessException;
import savemymoney.mobile.business.SaveMyMoneyService;
import savemymoney.mobile.business.impl.repositories.CategoriaRepository;
import savemymoney.mobile.business.impl.repositories.CategoriaUtenteRepository;
import savemymoney.mobile.business.impl.repositories.MovimentoRepository;
import savemymoney.mobile.business.impl.repositories.UtenteRepository;
import savemymoney.mobile.domain.Categoria;
import savemymoney.mobile.domain.Categoria_has_Utente;
import savemymoney.mobile.domain.Movimento;

import savemymoney.mobile.domain.Utente;

@Service
@Transactional
public class SaveMyMoneyServiceImpl implements SaveMyMoneyService {

	@Autowired
	private CategoriaRepository categoriaRepository;
	@Autowired
	private UtenteRepository utenteRepository;
	@Autowired
	private MovimentoRepository movimentoRepository;
	@Autowired CategoriaUtenteRepository CategoriaUtenteRepository;



	@Override
	public Utente findUtenteByUsername(String username) throws BusinessException {
		return utenteRepository.findByUsername(username);
	}

	@Override
	public Utente updateProfilo(Utente profilo) throws BusinessException {
		Utente utente = utenteRepository.findByUsername(profilo.getUsername());
		return utente;
	}







	@Override
	public List<Categoria> findAllCategorie() throws BusinessException {
		return categoriaRepository.findAll();
	}

	@Override
	public void updateCategoria(Categoria categoria) throws BusinessException {
		categoriaRepository.save(categoria);
	}

	@Override
	public void deleteCategoriaById(Long id) throws BusinessException {
		categoriaRepository.deleteById(id);
	}

	@Override
	public void insertCategoria(Categoria categoria) throws BusinessException {
		categoriaRepository.save(categoria);
	}

	@Override
	public Categoria findCategoriaById(Long id) throws BusinessException {
		return categoriaRepository.findById(id).get();
	}








	@Override
	public List<Categoria> findCatUteByUtente(Utente utente) throws BusinessException {
		return CategoriaUtenteRepository.findCategoriaByUtente(utente);
	}







	@Override
	public Movimento findMovimentoById(Long id) throws BusinessException {
		return movimentoRepository.findById(id).get();
	}

	/*@Override
	public void createMovimento(Movimento movimento) throws BusinessException {
		movimentoRepository.save(movimento);
	}*/

	@Override
	public void deleteMovimento(Long id) throws BusinessException {
		movimentoRepository.deleteById(id);;
	}


	@Override
	public void deleteMovimentoById(Long id) throws BusinessException{
		movimentoRepository.deleteById(id);
	}


	@Override
	public void insertMovimento(Movimento movimento) throws BusinessException {
		movimentoRepository.save(movimento);
	}

	@Override
	public void updateMovimento(Movimento movimento) throws BusinessException {
		movimentoRepository.save(movimento);
	}

	@Override
	public List<Movimento> findMovimentiByCategoriaId(Long id) throws BusinessException {
		return movimentoRepository.findAllMovimentiByCategoriaId(id);
	}





	@Override
	public void deleteMovimenti(Long cat) throws BusinessException {
		movimentoRepository.deleteMovimentiByCategoria(cat);
	}

	/*



	@Override
	public List<Movimento> findAllMovimentiByUtente(Utente utente)throws BusinessException{
		return movimentoRepository.findAllMovimentiByUtenteId(utente.getId(),JpaSort.unsafe(Direction.DESC,"data"));
	}
*/


}