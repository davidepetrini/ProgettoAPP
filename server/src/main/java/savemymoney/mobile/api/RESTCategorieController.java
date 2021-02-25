package savemymoney.mobile.api;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;
import savemymoney.mobile.business.SaveMyMoneyService;
import savemymoney.mobile.domain.Categoria;
import savemymoney.mobile.domain.Movimento;

import java.util.List;

@RestController
@RequestMapping("/api/categorie")
public class RESTCategorieController {
	
	@Autowired
	private SaveMyMoneyService service;
/*
	@GetMapping
	public List<Categoria> list() {
		return service.findAllCategorie();
	}
	
	@GetMapping("/{idCategoria}")
	public Categoria findCategoriaById(@PathVariable Long idCategoria) {
		return service.findCategoriaById(idCategoria);
	}


	@PostMapping
	public void insertCategoria(@RequestBody Categoria categoria) {
		service.insertCategoria(categoria);
	}

	@PutMapping
	public void updateCategoria(@RequestBody Categoria categoria) {
		service.updateCategoria(categoria);;
	}

	@DeleteMapping("/{idCategoria}")
	public void deleteCategoria( @PathVariable long idCategoria) {
		service.deleteCategoriaById(idCategoria);
	}
*/
}
