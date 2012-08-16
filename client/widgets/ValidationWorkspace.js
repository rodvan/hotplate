define([
  'dojo/_base/declare',

  'dijit/form/ValidationTextBox',

  'app/widgets/_AjaxValidatorMixin',

  'app/lib/globals',
  'app/lib/stores',
  ], function(
    declare

  , ValidationTextBox

  , _AjaxValidatorMixin

  , g
  , stores
  ){
    return declare('app.ValidationWorkspace', [ ValidationTextBox, _AjaxValidatorMixin ], {

      validator: function(value){

        // Run the normal field validators -- if they fail,
        // return false
        var validation =  Validators.workspace(value);
        if( ! validation.result ){
          this.invalidMessage = validation.message;
          return false;
        }

        // 
        return this.ajaxValidate(value, {
           ajaxInvalidMessage: "Workspace taken",
           ajaxStore: stores.workspacesAnon,
           ajaxFilterField: 'name',
        });

      },

      invalidMessage: "Workspace name not valid",
      missingMessage: "Workspace name cannot be empty",

    });
  }
);
