import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '../../node_modules/@angular/core';
//importing toolbar modules
import {MatToolbarModule} from '@angular/material/toolbar';
//Importing material icon modules here and ading it as a input parameters
import {MatIconModule} from '@angular/material/icon';
// To use @NgModule function please import '@angular/Core' as imported above
@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule],
    exports:[MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule],
})
export class MaterialModule{}