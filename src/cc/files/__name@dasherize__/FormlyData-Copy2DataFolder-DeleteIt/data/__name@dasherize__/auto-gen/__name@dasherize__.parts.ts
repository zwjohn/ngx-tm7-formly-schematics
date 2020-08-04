import {FormlyFieldConfig} from "@ngx-formly/core";

export function getRow1(): FormlyFieldConfig {
  return {
    "fieldGroupClassName": "row start-xs",
    "className": "col-xs-12",
    "fieldGroup": [
      {
        "className": "col-xs-6",
        "type": "input",
        "key": "",
        "id": "",
        "templateOptions": {
          "label": "-lb",
          "placeholder": "-ph",
          "description": "-desc"
        }
      },
      {
        "className": "col-xs-6",
        "type": "input",
        "key": "",
        "id": "",
        "templateOptions": {
          "label": "-lb",
          "placeholder": "-ph",
          "description": "-desc"
        }
      }
    ]
  };
}
