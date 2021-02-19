package savemymoney.mobile.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import savemymoney.mobile.business.SaveMyMoneyService;
import savemymoney.mobile.domain.Movimento;

import java.util.List;

@RestController
@RequestMapping("/api/movimenti")
public class RESTMovimentiController {
	
	@Autowired
	private SaveMyMoneyService service;
	
	@GetMapping
	public List<Movimento> list() {

		return service.findAllMovimenti();
	}

	@GetMapping("/{idMovimento}")
	public Movimento findMovimentoById(@PathVariable long idMovimento) {
		return service.findMovimentoById(idMovimento);
	}

	@PostMapping
	public void createMovimento(@RequestBody Movimento movimento) {
		service.createMovimento(movimento);
	}

	@PostMapping
	public void insertMovimento(@RequestBody Movimento movimento) {
		service.insertMovimento(movimento);
	}

	@PutMapping
	public void updateMovimento(@RequestBody Movimento movimento) {
		service.updateMovimento(movimento);
	}

	@DeleteMapping("/{idMovimento}")
	public void deleteMovimento( @PathVariable long idMovimento) {
		service.deleteMovimentoById(idMovimento);
	}

/*	@PostMapping
	public void totalMovimento(@RequestBody Movimento movimento) {
		service.totalMovimento(movimento);
	}*/

}


/*
@GetMapping
	public List<Movimento> findAllEntrate(){
		Utente utente = Utility.getUtente();
		return service.findAllMovimentiByFamiglia(utente.getFamiglia());
	}
 */








