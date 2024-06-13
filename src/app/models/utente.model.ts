export interface Utente {
  id: number;
  username: string;
  password: string;
  confermaPassword: string;
  email: string;
  nome: string;
  cognome: string;
  codiceFiscale: string;
  attivo: boolean;
}
