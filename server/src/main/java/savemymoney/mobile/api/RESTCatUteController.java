package savemymoney.mobile.api;

import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import savemymoney.mobile.business.SaveMyMoneyService;
import savemymoney.mobile.common.Utility;
import savemymoney.mobile.domain.Categoria_has_Utente;
import savemymoney.mobile.domain.Categoria;
import savemymoney.mobile.domain.Utente;





@RestController
@RequestMapping("/api/catUte")
public class RESTCatUteController {


    @Autowired
    private SaveMyMoneyService service;

    /*
    @GetMapping
    public List<Categoria> list(){
        Utente utente = Utility.getUtente();
        return service.findCatUteByUtente(utente);
    }*/
}

