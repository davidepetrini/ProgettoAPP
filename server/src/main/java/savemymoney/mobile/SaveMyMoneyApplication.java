package savemymoney.mobile;

import savemymoney.mobile.business.impl.repositories.*;
import savemymoney.mobile.domain.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Date;


@SpringBootApplication
public class SaveMyMoneyApplication {

    @Autowired
    private PasswordEncoder passwordEncoder;


    public static void main(String[] args) {
        SpringApplication.run(SaveMyMoneyApplication.class, args);
    }


    @Bean
    public CommandLineRunner loadData(UtenteRepository utenteRepository, CategoriaRepository categoriaRepository, MovimentoRepository movimentoRepository, CategoriaUtenteRepository CategoriaUtenteRepository) {
        return (args) -> {

            Utente marco = new Utente();
            marco.setUsername("Marco");
            marco.setPassword(passwordEncoder.encode("marco"));
            marco.setNome("Marco");
            marco.setCognome("Pistilli");
            marco = utenteRepository.save(marco);

            Utente davide = new Utente();
            davide.setUsername("Davide");
            davide.setPassword(passwordEncoder.encode("davide"));
            davide.setNome("davide");
            davide.setCognome("Petrini");
            davide = utenteRepository.save(davide);

            Utente bimbo = new Utente();
            bimbo.setUsername("BimboPis");
            bimbo.setPassword(passwordEncoder.encode("bimbo"));
            bimbo.setNome("Mark");
            bimbo.setCognome("Pistilli");
            bimbo = utenteRepository.save(bimbo);

            Utente bimba = new Utente();
            bimba.setUsername("BimbaPet");
            bimba.setPassword(passwordEncoder.encode("bimba"));
            bimba.setNome("Davida");
            bimba.setCognome("Petrini");
            bimba = utenteRepository.save(bimba);

            Categoria cibo= new Categoria();
            cibo.setNome("cibo");
            cibo.setSegno(TipoMovimento.USCITA);
            cibo.setBudget(1000);
            cibo= categoriaRepository.save(cibo);

            Categoria stip= new Categoria();
            stip.setNome("stipendio");
            stip.setSegno(TipoMovimento.ENTRATA);
            stip= categoriaRepository.save(stip);

            Categoria abiti = new Categoria();
            abiti.setNome("Vestiti");
            abiti.setSegno(TipoMovimento.USCITA);
            abiti=categoriaRepository.save(abiti);

            Categoria_has_Utente PetAbiti=new Categoria_has_Utente();
            PetAbiti.setCategoria(abiti);
            PetAbiti.setUtente(davide);
            PetAbiti.setBudget(5200);
            PetAbiti= CategoriaUtenteRepository.save(PetAbiti);

            Movimento stipe = new Movimento();
            stipe.setCategoria(stip);
            stipe.setUtente(marco);
            stipe.setData(new Date(System.currentTimeMillis() + (20 * 86400000)));
            stipe.setImporto(2000.50);
            stipe=movimentoRepository.save(stipe);

            Movimento food = new Movimento();
            food.setCategoria(cibo);
            food.setUtente(davide);
            food.setData(new Date(System.currentTimeMillis() + (20 * 86400000)));
            food.setImporto(20.50);
            food = movimentoRepository.save(food);

            Movimento giacca = new Movimento();
            giacca.setCategoria(abiti);
            giacca.setUtente(davide);
            giacca.setData(new Date(System.currentTimeMillis()+(20*86400000)));
            giacca.setImporto(54.90);
            giacca = movimentoRepository.save(giacca);

            Movimento cravatta = new Movimento();
            cravatta.setCategoria(abiti);
            cravatta.setUtente(marco);
            cravatta.setData(new Date(System.currentTimeMillis()+(20*86400000)));
            cravatta.setImporto(50.40);
            cravatta = movimentoRepository.save(cravatta);
        };
    }
}
/*
    @Bean
    public CommandLineRunner loadData(UtenteRepository utenteRepository, NotiziaRepository notiziaRepository, TipologiaNotiziaRepository tipologiaNotiziaRepository, CorsoDiLaureaRepository corsoDiLaureaRepository, InsegnamentoRepository insegnamentoRepository, AppelloRepository appelloRepository) {
        return (args) -> {
            TipologiaNotizia tipologiaDidattica = new TipologiaNotizia();
            tipologiaDidattica.setNome("Didattica");
            tipologiaDidattica = tipologiaNotiziaRepository.save(tipologiaDidattica);

            TipologiaNotizia tipologiaLavoro = new TipologiaNotizia();
            tipologiaLavoro.setNome("Lavoro");
            tipologiaLavoro = tipologiaNotiziaRepository.save(tipologiaLavoro);

            CorsoDiLaurea corsoDiLaureaInformatica = new CorsoDiLaurea();
            corsoDiLaureaInformatica.setClasse("L-31");
            corsoDiLaureaInformatica.setNome("Informatica");
            corsoDiLaureaInformatica = corsoDiLaureaRepository.save(corsoDiLaureaInformatica);

            CorsoDiLaurea corsoDiLaureaMaster = new CorsoDiLaurea();
            corsoDiLaureaMaster.setClasse("L-32");
            corsoDiLaureaMaster.setNome("Master Web Technology");
            corsoDiLaureaMaster = corsoDiLaureaRepository.save(corsoDiLaureaMaster);

            Docente amleto = new Docente();
            amleto.setUsername("amleto");
            amleto.setPassword(passwordEncoder.encode("amleto"));
            amleto.setNome("Amleto");
            amleto.setCognome("Di Salle");
            amleto.setEmail("amleto.disalle@univaq.it");
            amleto.setMatricola("09999");
            amleto.setTelefono("+39.0862/433735");
            amleto = utenteRepository.save(amleto);

            Docente marco = new Docente();
            marco.setUsername("marco");
            marco.setPassword(passwordEncoder.encode("marco"));
            marco.setNome("Marco");
            marco.setCognome("Autili");
            marco.setEmail("marco.autili@univaq.it");
            marco.setMatricola("01111");
            marco.setTelefono("+39.0862/433xxx");
            marco = utenteRepository.save(marco);

            Studente studente = new Studente();
            studente.setUsername("studente");
            studente.setPassword(passwordEncoder.encode("studente"));
            studente.setNome("Studente");
            studente.setCognome("Studente");
            studente.setEmail("studente.studente@student.univaq.it");
            studente.setMatricola("299999");
            studente.setCorsoDiLaurea(corsoDiLaureaInformatica);
            studente = utenteRepository.save(studente);

            for (int i = 0; i < 10; i++) {
                Notizia notizia = new Notizia();
                notizia.setNome("Lezioni del corso " + i);
                notizia.setDescrizione("Le lezioni di " + i + "  comprese nel periodo 11-24 Maggio 2018 si svolgeranno secondo il seguente calendario:");
                Date dataPubblicazione = new Date(System.currentTimeMillis() - (i * 86400000));
                notizia.setDataPubblicazione(dataPubblicazione);
                notizia.setPubblicatoDa(amleto);
                notizia.setTipologia(tipologiaDidattica);
                notiziaRepository.save(notizia);
            }

            Insegnamento mobile = new Insegnamento();
            mobile.setCodice("F1081");
            mobile.setDenominazione("Applicazioni per Dispositivi Mobili");
            mobile.setLingua(Lingua.ITA);
            mobile.setCfu(6);
            mobile.setTipologiaCredito(TipologiaCredito.b);
            mobile.setPeriodoInsegnamento(2);
            mobile.setCorsoDiLaurea(corsoDiLaureaInformatica);
            mobile.setDocente(amleto);
            insegnamentoRepository.save(mobile);

            Appello appelloGiugno = new Appello();
            appelloGiugno.setDescrizione("1 appello giugno");
            appelloGiugno.setDataAppello(new Date(System.currentTimeMillis() + (20 * 86400000)));
            appelloGiugno.setInsegnamento(mobile);
            appelloGiugno.setTipologiaEsame(TipologiaEsame.ORALE);
            appelloRepository.save(appelloGiugno);

            Appello appelloGiugno2 = new Appello();
            appelloGiugno2.setDescrizione("2 appello giugno");
            appelloGiugno2.setDataAppello(new Date(System.currentTimeMillis() + (35 * 86400000)));
            appelloGiugno2.setInsegnamento(mobile);
            appelloGiugno2.setTipologiaEsame(TipologiaEsame.ORALE);
            appelloRepository.save(appelloGiugno2);

            Insegnamento java = new Insegnamento();
            java.setCodice("F7W027");
            java.setDenominazione("Programmazione avanzata Java");
            java.setLingua(Lingua.ITA);
            java.setCfu(5);
            java.setTipologiaCredito(TipologiaCredito.b);
            java.setPeriodoInsegnamento(1);
            java.setCorsoDiLaurea(corsoDiLaureaMaster);
            java.setDocente(amleto);
            insegnamentoRepository.save(java);

            Insegnamento jee = new Insegnamento();
            jee.setCodice("F7W021");
            jee.setDenominazione("Piattaforma JEE");
            jee.setLingua(Lingua.ITA);
            jee.setCfu(6);
            jee.setTipologiaCredito(TipologiaCredito.b);
            jee.setPeriodoInsegnamento(2);
            jee.setCorsoDiLaurea(corsoDiLaureaMaster);
            jee.setDocente(amleto);
            insegnamentoRepository.save(jee);

            Insegnamento laboratoriosistemioperativi = new Insegnamento();
            laboratoriosistemioperativi.setCodice("F1I021");
            laboratoriosistemioperativi.setDenominazione("Laboratorio di Sistemi Operativi");
            laboratoriosistemioperativi.setLingua(Lingua.ITA);
            laboratoriosistemioperativi.setCfu(6);
            laboratoriosistemioperativi.setTipologiaCredito(TipologiaCredito.b);
            laboratoriosistemioperativi.setPeriodoInsegnamento(1);
            laboratoriosistemioperativi.setCorsoDiLaurea(corsoDiLaureaInformatica);
            laboratoriosistemioperativi.setDocente(marco);
            insegnamentoRepository.save(laboratoriosistemioperativi);

        };
    }

}
*/