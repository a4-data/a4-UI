import ExtBase from './base';

export class ExtColorselectorComponent extends ExtBase {
get alphaDecimalFormat(){return this.getAttribute('alphaDecimalFormat')};set alphaDecimalFormat(alphaDecimalFormat){this.setAttribute('alphaDecimalFormat',alphaDecimalFormat)}
get cancelButtonText(){return this.getAttribute('cancelButtonText')};set cancelButtonText(cancelButtonText){this.setAttribute('cancelButtonText',cancelButtonText)}
get color(){return this.getAttribute('color')};set color(color){this.setAttribute('color',color)}
get fieldPad(){return this.getAttribute('fieldPad')};set fieldPad(fieldPad){this.setAttribute('fieldPad',fieldPad)}
get fieldWidth(){return this.getAttribute('fieldWidth')};set fieldWidth(fieldWidth){this.setAttribute('fieldWidth',fieldWidth)}
get format(){return this.getAttribute('format')};set format(format){this.setAttribute('format',format)}
get okButtonText(){return this.getAttribute('okButtonText')};set okButtonText(okButtonText){this.setAttribute('okButtonText',okButtonText)}
get showOkCancelButtons(){return this.getAttribute('showOkCancelButtons')};set showOkCancelButtons(showOkCancelButtons){this.setAttribute('showOkCancelButtons',showOkCancelButtons)}
get showPreviousColor(){return this.getAttribute('showPreviousColor')};set showPreviousColor(showPreviousColor){this.setAttribute('showPreviousColor',showPreviousColor)}
get value(){return this.getAttribute('value')};set value(value){this.setAttribute('value',value)}
get platformConfig(){return this.getAttribute('platformConfig')};set platformConfig(platformConfig){this.setAttribute('platformConfig',platformConfig)}
get responsiveConfig(){return this.getAttribute('responsiveConfig')};set responsiveConfig(responsiveConfig){this.setAttribute('responsiveConfig',responsiveConfig)}
get align(){return this.getAttribute('align')};set align(align){this.setAttribute('align',align)}
get fitToParent(){return this.getAttribute('fitToParent')};set fitToParent(fitToParent){this.setAttribute('fitToParent',fitToParent)}
get config(){return this.getAttribute('config')};set config(config){this.setAttribute('config',config)}
get oncancel(){return this.getAttribute('oncancel')};set oncancel(oncancel){this.setAttribute('oncancel',oncancel)}
get onchange(){return this.getAttribute('onchange')};set onchange(onchange){this.setAttribute('onchange',onchange)}
get onok(){return this.getAttribute('onok')};set onok(onok){this.setAttribute('onok',onok)}

	static XTYPE() {return 'colorselector'}
  static PROPERTIESOBJECT() { return {
"alphaDecimalFormat":["string"],
"cancelButtonText":["string"],
"color":["object"],
"fieldPad":["number"],
"fieldWidth":["number"],
"format":["'hex6'","'hex8'","'#hex6'","'#hex8'","'hex6'","'hex8'","'#hex6'","'#hex8'"],
"okButtonText":["string"],
"showOkCancelButtons":["boolean"],
"showPreviousColor":["boolean"],
"value":["string"],
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "align": "Obyect",
    "fitToParent": "Boolean",
    "config": "Object",

  }}
  static EVENTS() { return [
{name:'cancel',parameters:'colorselector'},
{name:'change',parameters:'colorselector,color,previousColor'},
{name:'ok',parameters:'colorselector,color'},
{name:'ready',parameters:''}

  ]}
  static METHODS() { return [
{ name:'addDeprecations',function: function(deprecations) { return this.ext.addDeprecations(deprecations) } },
{ name:'callOverridden',function: function(args) { return this.ext.callOverridden(args) } },
{ name:'callParent',function: function(args) { return this.ext.callParent(args) } },
{ name:'callSuper',function: function(args) { return this.ext.callSuper(args) } },
{ name:'destroy',function: function() { return this.ext.destroy() } },
{ name:'destroyMembers',function: function(args) { return this.ext.destroyMembers(args) } },
{ name:'getConfig',function: function(name,peek,ifInitialized) { return this.ext.getConfig(name,peek,ifInitialized) } },
{ name:'getCurrentConfig',function: function() { return this.ext.getCurrentConfig() } },
{ name:'getInitialConfig',function: function(name) { return this.ext.getInitialConfig(name) } },
{ name:'hasConfig',function: function(name) { return this.ext.hasConfig(name) } },
{ name:'initConfig',function: function(instanceConfig) { return this.ext.initConfig(instanceConfig) } },
{ name:'link',function: function(name,value) { return this.ext.link(name,value) } },
{ name:'setConfig',function: function(name,value,options) { return this.ext.setConfig(name,value,options) } },
{ name:'statics',function: function() { return this.ext.statics() } },
{ name:'unlink',function: function(names) { return this.ext.unlink(names) } },
{ name:'watchConfig',function: function(name,fn,scope) { return this.ext.watchConfig(name,fn,scope) } },

  ]}

  constructor() {
    super()
    this.METHODS = ExtColorselectorComponent.METHODS()
    this.XTYPE = ExtColorselectorComponent.XTYPE()
    //this.PROPERTIES = ExtColorselectorComponent.PROPERTIES()
    this.PROPERTIESOBJECT = ExtColorselectorComponent.PROPERTIESOBJECT()
    this.EVENTS = ExtColorselectorComponent.EVENTS()
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }
}
(function () {
  Ext.onReady(function() {
    window.customElements.define('ext-colorselector', ExtColorselectorComponent);
  });
})();