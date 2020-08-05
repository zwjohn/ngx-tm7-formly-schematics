import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from "@ngx-formly/core";
import { HttpClient } from "@angular/common/http";
import { AppLabelService } from "../../../../shared/services/app-label.service";
import { AppOptionService } from "../../../../shared/services/app-option.service";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { populateTemplateAssets } from "../../../../shared/others/utils/formly-utils";
import { getFunctionsByPrefix } from "../../../../shared/others/utils/utility-functions";
@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>FormlyService {
  formlyJson: FormlyFieldConfig[];
  currentLabelsBundle: { [key: string]: string; } = {};
  currentOptionsBundle: { [optionKey: string]: [{ label: string, value: string }]; } = {};
  changesAfterSearchResult: any;
  resetSearchForm: any;

  constructor(private httpClient: HttpClient, private appLabelService: AppLabelService, private appOptionService: AppOptionService) {


  }

  getTemplate(): Observable<boolean> {
    this.currentLabelsBundle = this.appLabelService.currentLabelsBundle;
    this.currentOptionsBundle = this.appOptionService.currentOptionsBundle;
    return new Observable<boolean>((observer) => {
      this.httpClient.get(environment.TO-BE-UPDATED-WITH-YOUR-ENDPOINT).subscribe((content: FormlyFieldConfig[]) => {
        this.formlyJson = content;
        //populate all assets in the formly json
        populateTemplateAssets(this.formlyJson, this.currentLabelsBundle, this.currentOptionsBundle);
        //run all addLogic functions in this class
        getFunctionsByPrefix(this, 'addLogic').forEach((func) => {
          this[func](this.formlyJson);
        });
        observer.next(true);
        observer.complete();
      });
    });
  }
}
