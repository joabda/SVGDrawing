import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, RoutingComponents } from './components/app/app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BrushComponent } from './components/brush/brush.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { ColorPaletteComponent } from './components/color-palette/color-palette.component';
import { ColorPanelComponent } from './components/color-panel/color-panel.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { ColorSliderComponent } from './components/color-slider/color-slider.component';
import { CreateNewComponent } from './components/create-new/create-new.component';
import { EllipseComponent } from './components/ellipse/ellipse.component';
import { EraserComponent } from './components/eraser/eraser.component';
import { ExportComponent } from './components/export/export.component';
import { FeatherComponent } from './components/feather/feather.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GridComponent } from './components/grid/grid.component';
import { AerosolGuideComponent } from './components/guideTemplaates/aerosol-guide/aerosol-guide.component';
// tslint:disable-next-line: max-line-length | Reason : import cannot be splitted into several lines
import { ApplicateurCouleurGuideComponent } from './components/guideTemplaates/applicateur-couleur-guide/applicateur-couleur-guide.component';
import { ClipboardGuideComponent } from './components/guideTemplaates/clipboard-guide/clipboard-guide.component';
import { CouleurGuideComponent } from './components/guideTemplaates/couleur-guide/couleur-guide.component';
import { CrayonGuideComponent } from './components/guideTemplaates/crayon-guide/crayon-guide.component';
import { EllipseGuideComponent } from './components/guideTemplaates/ellipse-guide/ellipse-guide.component';
import { ExportGuideComponent } from './components/guideTemplaates/export-guide/export-guide.component';
import { GalleryGuideComponent } from './components/guideTemplaates/gallery-guide/gallery-guide.component';
import { GridGuideComponent } from './components/guideTemplaates/grid-guide/grid-guide.component';
import { LigneGuideComponent } from './components/guideTemplaates/ligne-guide/ligne-guide.component';
import { MailGuideComponent } from './components/guideTemplaates/mail-guide/mail-guide.component';
import { NouveauDessinComponent } from './components/guideTemplaates/nouveau-dessin/nouveau-dessin.component';
import { PinceauGuideComponent } from './components/guideTemplaates/pinceau-guide/pinceau-guide.component';
import { PipetteGuideComponent } from './components/guideTemplaates/pipette-guide/pipette-guide.component';
import { PlumeGuideComponent } from './components/guideTemplaates/plume-guide/plume-guide.component';
import { PolygoneGuideComponent } from './components/guideTemplaates/polygone-guide/polygone-guide.component';
import { RectangleGuideComponent } from './components/guideTemplaates/rectangle-guide/rectangle-guide.component';
import { RotationGuideComponent } from './components/guideTemplaates/rotation-guide/rotation-guide.component';
import { SaveContinueGuideComponent } from './components/guideTemplaates/save-continue-guide/save-continue-guide.component';
import { SaveServerGuideComponent } from './components/guideTemplaates/save-server-guide/save-server-guide.component';
import { SceauGuideComponent } from './components/guideTemplaates/sceau-guide/sceau-guide.component';
// tslint:disable-next-line: max-line-length | Reason : import cannot be splitted into several lines
import { SelectionDeplacementGuideComponent } from './components/guideTemplaates/selection-deplacement-guide/selection-deplacement-guide.component';
import { TextGuideComponent } from './components/guideTemplaates/text-guide/text-guide.component';
import { UndoRedoComponent } from './components/guideTemplaates/undo-redo/undo-redo.component';
import { HomeComponent } from './components/home/home.component';
import { LineComponent } from './components/line/line.component';
import { OptionPannelComponent } from './components/option-pannel/option-pannel.component';
import { PaintSealComponent } from './components/paint-seal/paint-seal.component';
import { PencilComponent } from './components/pencil/pencil.component';
import { PipetteComponent } from './components/pipette/pipette.component';
import { PolygonComponent } from './components/polygon/polygon.component';
import { RectangleComponent } from './components/rectangle/rectangle.component';
import { ErrorOnSaveComponent } from './components/save-server/error-on-save/error-on-save.component';
import { SaveServerComponent } from './components/save-server/save-server.component';
import { SelectionComponent } from './components/selection/selection.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SprayComponent } from './components/spray/spray.component';
import { TextComponent } from './components/text/text.component';
import { UserGuideComponent } from './components/user-guide/user-guide.component';
import { WarningDialogComponent } from './components/warning/warning-dialog.component';
import { WorkingAreaComponent } from './components/working-area/working-area.component';
import { ResizeObserverDirective } from './components/workspace/resize-observer.directive';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { AngularMaterialModule } from './modules/angular-material.module';
import { DrawablePropertiesService } from './services/drawable/properties/drawable-properties.service';
import { GuessSecretWordComponent } from './components/gallery/guess-secret-word/guess-secret-word.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    EraserComponent,
    OptionPannelComponent,
    SidebarComponent,
    LineComponent,
    WorkspaceComponent,
    PencilComponent,
    RectangleComponent,
    BrushComponent,
    HomeComponent,
    PinceauGuideComponent,
    CrayonGuideComponent,
    LigneGuideComponent,
    RectangleGuideComponent,
    CouleurGuideComponent,
    NouveauDessinComponent,
    UserGuideComponent,
    CreateNewComponent,
    WorkingAreaComponent,
    ColorPanelComponent,
    ColorPickerComponent,
    ColorPaletteComponent,
    ColorSliderComponent,
    RoutingComponents,
    ResizeObserverDirective,
    WarningDialogComponent,
    ExportComponent,
    PipetteComponent,
    TextComponent,
    EllipseComponent,
    EraserComponent,
    SelectionComponent,
    SprayComponent,
    GridComponent,
    PolygonComponent,
    ExportComponent,
    SaveServerComponent,
    ErrorOnSaveComponent,
    GalleryComponent,
    EllipseGuideComponent,
    PolygoneGuideComponent,
    SelectionDeplacementGuideComponent,
    PipetteGuideComponent,
    ApplicateurCouleurGuideComponent,
    GridGuideComponent,
    AerosolGuideComponent,
    UndoRedoComponent,
    SaveServerGuideComponent,
    GalleryGuideComponent,
    ExportGuideComponent,
    PaintSealComponent,
    TextComponent,
    FeatherComponent,
    ClipboardGuideComponent,
    SaveContinueGuideComponent,
    RotationGuideComponent,
    SceauGuideComponent,
    MailGuideComponent,
    TextGuideComponent,
    PlumeGuideComponent,
    GuessSecretWordComponent
  ],
  entryComponents: [
    ColorPickerComponent,
    CreateNewComponent,
    SaveServerComponent,
    ErrorOnSaveComponent,
    WarningDialogComponent,
    GalleryComponent,
    UserGuideComponent,
    ExportComponent,
    GuessSecretWordComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AngularMaterialModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    AppRoutingModule,
    MatListModule,
    MatExpansionModule,
    RouterModule
  ],
  providers: [DrawablePropertiesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
