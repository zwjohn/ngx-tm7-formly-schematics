import {getRow1} from "./<%= dasherize(name) %>.parts";
import { FormlyFieldConfig } from "@ngx-formly/core";
import * as fs from 'fs';
import * as path from 'path';
const output_file_name = "<%= dasherize(name) %>.formly.json";
export const templateJson: FormlyFieldConfig[] = [
  {
    "fieldGroupClassName": "row main-container",
    "fieldGroup": [
      getRow1(),
    ]
  }
];
const parentPath = path.dirname(__filename).split(/(\/|\\)/).slice(0, -1).join("");

fs.writeFileSync(parentPath + output_file_name, JSON.stringify(templateJson, null, 4), 'utf8');
console.log("Formly JSON generated:", parentPath + output_file_name);
