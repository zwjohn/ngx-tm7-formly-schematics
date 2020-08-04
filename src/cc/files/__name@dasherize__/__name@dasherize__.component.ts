import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit,OnDestroy,ChangeDetectorRef} from '@angular/core';
import {FormlyFieldConfig, FormlyFormOptions} from "@ngx-formly/core";
import {<%= classify(name) %>Service} from './<%= dasherize(name) %>.service';
import {<%= classify(name) %>FormlyService} from './<%=  dasherize(name) %>.formly.service';
import {FormGroup} from "@angular/forms";
import {Subject} from "rxjs";
import {v4 as uuid} from 'uuid';

@Component({
  selector: '<%= dasherize(name) %>',
  templateUrl: './<%= dasherize(name) %>.component.html',
  styleUrls: ['./<%= dasherize(name) %>.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})

export class <%= classPrefix + classify(name) %>Component implements OnInit, OnDestroy, AfterViewInit {
  dynamicFormName: string;
  componentId: string;
  dynamicForm: FormGroup = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[];
  options: FormlyFormOptions = {};
  protected onDestroy$: Subject<void> = new Subject<void>();
  /**
   * Constructor
   * @param <%=camelize(name)%>Service
   * @param <%=camelize(name)%>FormlyService
   * @param changeDetectorRef
   */
  constructor(private <%=camelize(name)%>Service: <%= classify(name) %>Service,
              private <%=camelize(name)%>FormlyService: <%= classify(name) %>FormlyService,
              private changeDetectorRef: ChangeDetectorRef) {
    this.componentId = uuid.v4();
  }

  /**
   * Implementation for OnInit
   * @returns void
   */
  ngOnInit(): void {
    this.loadTemplate();

  }

  /**
   * Implementation for OnDestroy
   * @return void
   */
  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  /**
   * Implementation for AfterViewInit
   * @return void
   */
  ngAfterViewInit(): void {
    this.subscribeToRootFormValueChanges();
  }

  /**
   * Function to subscribe to value changes
   * @return Subscription
   */
  subscribeToRootFormValueChanges() {
    this.dynamicForm.valueChanges.subscribe((value) => {
      console.log(value)
    })
  }

  /**
   * Function to get formly json
   * @return void
   */
  private loadTemplate(): void {
    this.fields = this.<%=camelize(name)%>FormlyService.formlyJson;
  }

}
