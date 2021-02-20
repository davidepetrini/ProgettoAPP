package savemymoney.mobile.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
import savemymoney.mobile.business.SaveMyMoneyService;
import savemymoney.mobile.common.Utility;
import savemymoney.mobile.domain.Movimento;
import savemymoney.mobile.domain.Utente;

import java.util.List;

@RestController
@RequestMapping("/api/movimenti")
public class RESTMovimentiController {
	
	@Autowired
	private SaveMyMoneyService service;
	
	/*@GetMapping
	public List<Movimento> list() { return service.findAllMovimenti(); }*/

	@GetMapping("/{idMovimento}")
	public Movimento findMovimentoById(@PathVariable long idMovimento) {
		return service.findMovimentoById(idMovimento);
	}

	@GetMapping("/list/{idCategoria}")
	public List<Movimento> findAllMovByCategoriaId(@PathVariable Long idCategoria){
		return service.findMovimentiByCategoriaId(idCategoria);
	}
	@DeleteMapping("/delete/{idCategoria")
	public void deleteMovimentiWhereCategoria(@PathVariable Long idCategoria) {
		service.deleteMovimenti(idCategoria);
	}

	@GetMapping
	public List<Movimento> findAllEntrate(){
		Utente utente = Utility.getUtente();
		return service.findAllMovimentiByUtente(utente);
	}

	/*@PostMapping
	public void createMovimento(@RequestBody Movimento movimento) {
		service.createMovimento(movimento);
	}*/

	@PostMapping
	public void insertMovimento(@RequestBody Movimento movimento) {
		service.insertMovimento(movimento);
	}

	/*@PutMapping
	public void updateMovimento(@RequestBody Movimento movimento) {
		service.updateMovimento(movimento);
	}*/

	@DeleteMapping("/{idMovimento}")
	public void deleteMovimento( @PathVariable long idMovimento) {
		service.deleteMovimentoById(idMovimento);
	}


}









