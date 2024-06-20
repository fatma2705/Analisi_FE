import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnalysisService } from '../analysis.service';
import { Analysis } from '../../models/analysis.model';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgFor, NgIf } from '@angular/common';
import { NgModel } from '@angular/forms';
import { TipoAnalisi } from '../../models/tipo-analisi.model';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-analysis-detail',
  standalone: true,
  imports: [NgIf,NgFor,FormsModule,NavbarComponent],
  templateUrl: './analysis-detail.component.html',
  styleUrl: './analysis-detail.component.css'
})
export class AnalysisDetailComponent {

  analysis: Analysis | null = null;
  action: string | null = null;
  tipos = Object.values(TipoAnalisi);

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private analisiService: AnalysisService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private authService: AuthService
  ) {}

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.action = params.get('action');
      if (id){
        if (this.authService.isLoggedIn()){
        this.analisiService.getAnalisiById(id).subscribe(analysis => {
          this.analysis= analysis;
        });
      }
      }
    });
  }


  updateAnalysis(): void{
    if (this.analysis){
      if (this.authService.isLoggedIn()){
      this.analisiService.updateAnalisi(this.analysis).subscribe(() => {
        this.snackBar.open('Analisi aggiornata con successo', 'Chiudi',{duration: 3000});
        this.router.navigate(['/analysis/list']);
      });
    }
    }
  }

  confirmDelete(): void {
    if (this.analysis && this.analysis.id){
      if (this.authService.isLoggedIn()){
      this.analisiService.deleteAnalisi(this.analysis.id).subscribe(() => {
        this.snackBar.open('Analisi eliminata con successo', 'chiudi', {duration: 3000});
        this.router.navigate(['/analysis/list']);
      });
    }
    }
  }

}
