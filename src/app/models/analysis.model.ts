import { TipoAnalisi } from './tipo-analisi.model';
import { Utente } from './utente.model';

export interface Analysis {
  id: number;
  esitoPositivo: boolean;
  tipo: TipoAnalisi;
  data: string;  // Usare stringa per le date per facilitare la serializzazione/deserializzazione
  paziente?: Utente;  // Campo opzionale, quindi il tipo è 'Utente | undefined'
}
