if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/terminal-scissors/terminal-scissors.js']) {
   __coverage__['build/terminal-scissors/terminal-scissors.js'] = {"path":"build/terminal-scissors/terminal-scissors.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":29},"end":{"line":1,"column":48}}},"2":{"name":"(anonymous_2)","line":12,"loc":{"start":{"line":12,"column":21},"end":{"line":12,"column":39}}},"3":{"name":"(anonymous_3)","line":27,"loc":{"start":{"line":27,"column":22},"end":{"line":27,"column":34}}},"4":{"name":"(anonymous_4)","line":37,"loc":{"start":{"line":37,"column":20},"end":{"line":37,"column":32}}},"5":{"name":"(anonymous_5)","line":47,"loc":{"start":{"line":47,"column":20},"end":{"line":47,"column":32}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":68,"column":62}},"2":{"start":{"line":12,"column":0},"end":{"line":17,"column":2}},"3":{"start":{"line":14,"column":3},"end":{"line":14,"column":53}},"4":{"start":{"line":15,"column":3},"end":{"line":15,"column":49}},"5":{"start":{"line":19,"column":0},"end":{"line":19,"column":30}},"6":{"start":{"line":21,"column":0},"end":{"line":64,"column":2}},"7":{"start":{"line":28,"column":6},"end":{"line":30,"column":7}},"8":{"start":{"line":29,"column":9},"end":{"line":29,"column":32}},"9":{"start":{"line":38,"column":6},"end":{"line":40,"column":7}},"10":{"start":{"line":39,"column":9},"end":{"line":39,"column":87}},"11":{"start":{"line":48,"column":6},"end":{"line":48,"column":48}},"12":{"start":{"line":50,"column":6},"end":{"line":50,"column":88}},"13":{"start":{"line":52,"column":6},"end":{"line":52,"column":33}},"14":{"start":{"line":55,"column":6},"end":{"line":55,"column":32}},"15":{"start":{"line":56,"column":6},"end":{"line":56,"column":23}},"16":{"start":{"line":58,"column":6},"end":{"line":58,"column":57}},"17":{"start":{"line":59,"column":6},"end":{"line":59,"column":57}},"18":{"start":{"line":61,"column":6},"end":{"line":61,"column":62}}},"branchMap":{"1":{"line":28,"type":"if","locations":[{"start":{"line":28,"column":6},"end":{"line":28,"column":6}},{"start":{"line":28,"column":6},"end":{"line":28,"column":6}}]},"2":{"line":38,"type":"if","locations":[{"start":{"line":38,"column":6},"end":{"line":38,"column":6}},{"start":{"line":38,"column":6},"end":{"line":38,"column":6}}]}},"code":["(function () { YUI.add('terminal-scissors', function (Y, NAME) {","","/**"," * @module terminal-scissors"," */","","/**"," * @class TerminalScissors"," * @constructor"," * @param {Object} config configuration object"," */","Y.TerminalScissors = function (config) {","   ","   Y.after(this._renderUIScissors, this, \"renderUI\");","   Y.after(this._bindUIScissors, this, \"bindUI\");","   ","};","","Y.TerminalScissors.ATTRS = {};","","Y.TerminalScissors.prototype = {","   ","   /**","    * @method _renderUIScissors","    * @private","    */","   _renderUIScissors: function () {","      if( this.get('editable') ) {","         this._renderScissors();","      }","   },","   ","   /**","    * @method _bindUIScissors","    * @private","    */","   _bindUIScissors: function () {","      if( this.get('editable') ) {","         this._scissorsOverlay.get('boundingBox').on('click', this.destroyWires, this);","      }","   },","   ","   /**","    * @method _renderScissors","    * @private","    */","   _renderScissors: function () {","      this._scissorsOverlay = new Y.Overlay({});","      ","      this._scissorsOverlay.get('contentBox').addClass( this.getClassName(\"scissors\") );","      ","      var refXY = this.get('xy');","","      // Position the scissors using 'dir'","      var dir = this.get('dir');","      console.log(dir);","","      this._scissorsOverlay.set('x', refXY[0]+dir[0]*40);","      this._scissorsOverlay.set('y', refXY[1]+dir[1]*40);","      ","      this._scissorsOverlay.render( this.get('boundingBox') );","   }","   ","};","","","","}, '@VERSION@', {\"requires\": [\"overlay\"], \"skinnable\": true});","","}());"]};
}
var __cov_FC0JjIVnIm3UFoT4Qn1hRw = __coverage__['build/terminal-scissors/terminal-scissors.js'];
__cov_FC0JjIVnIm3UFoT4Qn1hRw.s['1']++;YUI.add('terminal-scissors',function(Y,NAME){__cov_FC0JjIVnIm3UFoT4Qn1hRw.f['1']++;__cov_FC0JjIVnIm3UFoT4Qn1hRw.s['2']++;Y.TerminalScissors=function(config){__cov_FC0JjIVnIm3UFoT4Qn1hRw.f['2']++;__cov_FC0JjIVnIm3UFoT4Qn1hRw.s['3']++;Y.after(this._renderUIScissors,this,'renderUI');__cov_FC0JjIVnIm3UFoT4Qn1hRw.s['4']++;Y.after(this._bindUIScissors,this,'bindUI');};__cov_FC0JjIVnIm3UFoT4Qn1hRw.s['5']++;Y.TerminalScissors.ATTRS={};__cov_FC0JjIVnIm3UFoT4Qn1hRw.s['6']++;Y.TerminalScissors.prototype={_renderUIScissors:function(){__cov_FC0JjIVnIm3UFoT4Qn1hRw.f['3']++;__cov_FC0JjIVnIm3UFoT4Qn1hRw.s['7']++;if(this.get('editable')){__cov_FC0JjIVnIm3UFoT4Qn1hRw.b['1'][0]++;__cov_FC0JjIVnIm3UFoT4Qn1hRw.s['8']++;this._renderScissors();}else{__cov_FC0JjIVnIm3UFoT4Qn1hRw.b['1'][1]++;}},_bindUIScissors:function(){__cov_FC0JjIVnIm3UFoT4Qn1hRw.f['4']++;__cov_FC0JjIVnIm3UFoT4Qn1hRw.s['9']++;if(this.get('editable')){__cov_FC0JjIVnIm3UFoT4Qn1hRw.b['2'][0]++;__cov_FC0JjIVnIm3UFoT4Qn1hRw.s['10']++;this._scissorsOverlay.get('boundingBox').on('click',this.destroyWires,this);}else{__cov_FC0JjIVnIm3UFoT4Qn1hRw.b['2'][1]++;}},_renderScissors:function(){__cov_FC0JjIVnIm3UFoT4Qn1hRw.f['5']++;__cov_FC0JjIVnIm3UFoT4Qn1hRw.s['11']++;this._scissorsOverlay=new Y.Overlay({});__cov_FC0JjIVnIm3UFoT4Qn1hRw.s['12']++;this._scissorsOverlay.get('contentBox').addClass(this.getClassName('scissors'));__cov_FC0JjIVnIm3UFoT4Qn1hRw.s['13']++;var refXY=this.get('xy');__cov_FC0JjIVnIm3UFoT4Qn1hRw.s['14']++;var dir=this.get('dir');__cov_FC0JjIVnIm3UFoT4Qn1hRw.s['15']++;console.log(dir);__cov_FC0JjIVnIm3UFoT4Qn1hRw.s['16']++;this._scissorsOverlay.set('x',refXY[0]+dir[0]*40);__cov_FC0JjIVnIm3UFoT4Qn1hRw.s['17']++;this._scissorsOverlay.set('y',refXY[1]+dir[1]*40);__cov_FC0JjIVnIm3UFoT4Qn1hRw.s['18']++;this._scissorsOverlay.render(this.get('boundingBox'));}};},'@VERSION@',{'requires':['overlay'],'skinnable':true});