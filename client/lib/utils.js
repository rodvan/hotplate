define([
  'dojo/_base/declare',
  'dojo/query',
  'dojo/aspect',
  'dojo/_base/lang',
  'dojo/_base/json',

  "app/lib/globalWidgets",
  "app/lib/Logger",
  "app/lib/stores",


  ],function(
    declare
  , query
  , aspect
  , lang
  , json

  , _WidgetBase
  , _TemplatedMixin
  , _WidgetsInTemplateMixin
  , registry
  , Tooltip

  , gw
  , Logger
  , stores

  ){

  var r = {}

  r.goodify = function(response){
    var r = {};

    // First of all, if response isn't an object, turn it into one
    // so that the rest of the function works fine regardless
    response = response && ( typeof( response ) == 'object' ? response : { } );

    // The message needs to be a string
    r.message = typeof( response.message ) == 'string' ? response.message : '';

    // Errors need to be an array
    r.errors = typeof( response.errors ) == 'object' &&  response.errors.length ? response.errors : [];

    // Data needs to be an object (and not null)
    r.data = response.data && typeof( response.data ) == 'object' ? response.data : {};

    // Emit needs to be an array
    r.emit = typeof( response.emit ) == 'object' &&  response.emit.length ? response.emit : [];

    return r;
  }

  return r;
});

