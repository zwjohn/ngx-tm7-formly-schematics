import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {<%= classify(name) %>Component} from './<%= dasherize(name) %>.component';
import {SharedModule} from "../../../../shared/shared.module";
import {FormlyModule} from "@ngx-formly/core";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [<%= classify(name) %>Component],
  imports: [
    CommonModule,
    SharedModule.forChild(),
    FormlyModule.forChild({
      validationMessages: [
        {name: 'required', message: 'This field is required'},
      ]
    }),
    HttpClientModule
  ],
  exports: [<%= classify(name) %>Component]
})
export class <%= classify(name) %>Module {}
