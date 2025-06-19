import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-cuadro-dialogo',
  imports: [MatDialogModule],
  templateUrl: './cuadro-dialogo.component.html',
  styleUrl: './cuadro-dialogo.component.css'
})
export class CuadroDialogoComponent {

  constructor(private dialogRef:MatDialogRef<CuadroDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { mensaje: string }){}
    cerrar() {
      this.dialogRef.close();
    }
}
