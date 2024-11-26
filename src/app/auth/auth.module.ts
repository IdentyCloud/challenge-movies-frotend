import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        AuthComponent,
        RouterModule.forChild([
            { path: '', component: AuthComponent },
        ]),
    ]
})
export class AuthModule { }