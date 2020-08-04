//add config below  under codePushMappings of the auto-gen.config.json file
//make necessary changes
      {
        "usageComments": "when this config is active, it pushes auto generated functions to the target file, won't overwrite existing",
        "sourceFile": "./src/data/<%= dasherize(name) %>/<%= dasherize(name) %>.formly.json",
        "targetFile": "./src/app/components/lazy/<%= dasherize(name) %>/<%= dasherize(name) %>.formly.service.ts",
        "active": true,
        "removeTargetUnusedAddLogicFunction": true
      }

