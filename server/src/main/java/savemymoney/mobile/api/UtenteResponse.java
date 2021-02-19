package savemymoney.mobile.api;

import savemymoney.mobile.domain.Utente;


	public class UtenteResponse {

		private String username;
		private String nome;
		private String cognome;

		public UtenteResponse() {
		}

		public UtenteResponse(Utente utente) {
			this.nome = utente.getNome();
			this.cognome = utente.getCognome();
			this.username = utente.getUsername();
		}

		public String getNome() {
			return nome;
		}
		public void setNome(String nome) {
			this.nome = nome;
		}
		public String getCognome() {
			return cognome;
		}
		public void setCognome(String cognome) {
			this.cognome = cognome;
		}
		public String getUsername() {
			return username;
		}
		public void setUsername(String username) {
			this.username = username;
		}
	}
