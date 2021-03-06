import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAX_TAGS_ALLOWED } from 'src/app/classes/constants';
import { ShortcutManagerService } from 'src/app/services/shortcut-manager/shortcut-manager.service';
import { Image } from '../../interfaces/image';
import { ExportService } from '../../services/export/export.service';
import { SaveServerService } from '../../services/save-server/save-server.service';
import { ErrorOnSaveComponent } from './error-on-save/error-on-save.component';

@Component({
  selector: 'app-save-server',
  templateUrl: './save-server.component.html',
  styleUrls: ['./save-server.component.scss']
})
export class SaveServerComponent implements  AfterViewInit {

  title: string;
  isValidTitle: boolean;
  tags: Set<string>;
  tagName: string;
  isSaving: boolean;
  secrets: Set<string>;
  secret: string;
  timeLimit: number;
  isValidTime: boolean;

  @ViewChild('mydrawing', {static: false}) canvas: ElementRef;
  @ViewChild('proccessingCanas', {static : false}) proccessingCanas: ElementRef;

  constructor(private dialogRef: MatDialogRef<SaveServerComponent>,
              private snacks: MatSnackBar,
              private dialog: MatDialog,
              private saveService: SaveServerService,
              private shortcutManager: ShortcutManagerService,
              private exportation: ExportService) {
    this.tags = new  Set<string>();
    this.tagName = '';
    this.isSaving = false;
    this.isValidTitle = false;
    this.isValidTime = false;
    this.secrets = new  Set<string>();
    this.secret = '';
    this.shortcutManager.disableShortcuts();
  }

  ngAfterViewInit(): void {
    this.exportation.originalCanvas = this.proccessingCanas.nativeElement ;
    this.exportation.canvas = this.canvas.nativeElement;

  }

  onDialogClose(): void {
    this.dialogRef.close();
  }

  saveConfirmation(): void {
    if (!this.isValidTitle || !this.isValidTime) {
      const warning = this.dialog.open(ErrorOnSaveComponent, {disableClose: true});
      if (warning !== undefined) {
        warning.componentInstance.errorTitle = this.isValidTitle;
        warning.componentInstance.errorTime = this.isValidTime;
      }
    } else {
      this.addImage().then(() => {
        this.onDialogClose();
      });
    }
  }

  addTag(tag: string): void {
    if (this.tags.size < MAX_TAGS_ALLOWED) {
      const isTagValid = this.saveService.addTag(tag, this.tags);
      if (isTagValid) {
        this.tagName = '';
      } else {
        this.snacks.open('Étiquette invalide', '', {duration: 2000});
      }
    } else {
      this.snacks.open('Vous ne pouvez pas ajouter plus de 5 étiquettes', '', {duration: 2000});
    }
  }

  addSecret(secret: string): void {
    if (this.secrets.size < 1) {
      const isTagValid = this.saveService.addSecret(secret, this.secrets);
      if (isTagValid) {
        this.tagName = '';
      } else {
        this.snacks.open('Mot Secret invalide', '', {duration: 2000});
      }
    } else {
      this.snacks.open('Vous ne pouvez pas ajouter plus d\'un mot secret', '', {duration: 2000});
    }
  }

  removeTag(tag: string): void {
    this.saveService.removeTag(tag, this.tags);
  }

  removeSecret(tag: string): void {
    this.saveService.removeSecret(tag, this.secrets);
  }

  checkTitleValidity(title: string): boolean {
    return this.saveService.checkTitleValidity(title);
  }

  checkTimeValidity(time: number): boolean {
    return this.saveService.checkTimeValidity(time);
  }

  private async addImage(): Promise<void> {
    this.isSaving = true;
    this.snacks.open('Début de la sauvegarde', '', {duration : 1400} );
    let oneSecret: string = '';
    this.secrets.forEach( element => oneSecret = element);
    this.saveService.addImage(this.title, this.tags , this.exportation.imageAfterDeserialization.src, oneSecret, this.timeLimit)
      .subscribe((data: Image) => {
        // do nothing
      }, (error: HttpErrorResponse) => {
        this.isSaving = false;
        this.saveService.handleError(error);
    });
  }

}
