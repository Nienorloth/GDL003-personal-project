import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
    declarations: [
        ContactComponent,
        ContactFormComponent
    ],
    imports: [
        ContactRoutingModule,
        CommonModule
    ]
})
export class ContactModule {

}