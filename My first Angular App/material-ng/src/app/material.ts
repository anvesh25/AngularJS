import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '../../node_modules/@angular/core';
//importing toolbar modules
import {MatToolbarModule} from '@angular/material/toolbar';
//Importing material icon modules here and ading it as a input parameters
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
// To use @NgModule function please import '@angular/Core' as imported above
@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule],
    exports:[MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule],
})
export class MaterialModule{}