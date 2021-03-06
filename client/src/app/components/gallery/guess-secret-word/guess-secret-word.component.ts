import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MAX_NB_TRY } from 'src/app/classes/constants';

@Component({
  selector: 'app-guess-secret-word',
  templateUrl: './guess-secret-word.component.html',
  styleUrls: ['./guess-secret-word.component.scss']
})
export class GuessSecretWordComponent {

  private secret: string;
  secretInput: string;
  private nbOfTries: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<GuessSecretWordComponent>
  ) { 
    this.secret = data.secret;
    this.nbOfTries = 0;
    this.secretInput = '';
    console.log(this.secret);
  }

  close(): void {
    this.ref.close(false);
  }

  checkSecret(): void {
    console.log('input ' + this.secretInput + ' secret: ' + this.secret);
    if(this.secretInput === this.secret) {
      this.ref.close(true);
    } else {
      alert('Wrong!');
      if(++this.nbOfTries === MAX_NB_TRY) {
        this.close();
      }
    }
  }

}
