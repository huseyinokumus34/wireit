if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/terminal-base/terminal-base.js']) {
   __coverage__['build/terminal-base/terminal-base.js'] = {"path":"build/terminal-base/terminal-base.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":25},"end":{"line":1,"column":44}}},"2":{"name":"(anonymous_2)","line":22,"loc":{"start":{"line":22,"column":13},"end":{"line":22,"column":25}}},"3":{"name":"(anonymous_3)","line":25,"loc":{"start":{"line":25,"column":24},"end":{"line":25,"column":36}}},"4":{"name":"(anonymous_4)","line":31,"loc":{"start":{"line":31,"column":24},"end":{"line":31,"column":36}}},"5":{"name":"(anonymous_5)","line":37,"loc":{"start":{"line":37,"column":46},"end":{"line":37,"column":58}}},"6":{"name":"(anonymous_6)","line":38,"loc":{"start":{"line":38,"column":45},"end":{"line":38,"column":57}}},"7":{"name":"(anonymous_7)","line":52,"loc":{"start":{"line":52,"column":15},"end":{"line":52,"column":28}}},"8":{"name":"(anonymous_8)","line":58,"loc":{"start":{"line":58,"column":18},"end":{"line":58,"column":31}}},"9":{"name":"(anonymous_9)","line":69,"loc":{"start":{"line":69,"column":10},"end":{"line":69,"column":22}}},"10":{"name":"(anonymous_10)","line":103,"loc":{"start":{"line":103,"column":16},"end":{"line":103,"column":30}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":130,"column":3}},"2":{"start":{"line":20,"column":0},"end":{"line":116,"column":3}},"3":{"start":{"line":25,"column":6},"end":{"line":30,"column":15}},"4":{"start":{"line":26,"column":9},"end":{"line":26,"column":42}},"5":{"start":{"line":27,"column":9},"end":{"line":29,"column":10}},"6":{"start":{"line":28,"column":12},"end":{"line":28,"column":61}},"7":{"start":{"line":31,"column":6},"end":{"line":36,"column":15}},"8":{"start":{"line":32,"column":9},"end":{"line":32,"column":42}},"9":{"start":{"line":33,"column":9},"end":{"line":35,"column":10}},"10":{"start":{"line":34,"column":12},"end":{"line":34,"column":64}},"11":{"start":{"line":37,"column":6},"end":{"line":37,"column":89}},"12":{"start":{"line":37,"column":60},"end":{"line":37,"column":85}},"13":{"start":{"line":38,"column":6},"end":{"line":38,"column":88}},"14":{"start":{"line":38,"column":59},"end":{"line":38,"column":84}},"15":{"start":{"line":41,"column":6},"end":{"line":41,"column":70}},"16":{"start":{"line":43,"column":6},"end":{"line":43,"column":38}},"17":{"start":{"line":45,"column":6},"end":{"line":45,"column":75}},"18":{"start":{"line":53,"column":6},"end":{"line":53,"column":74}},"19":{"start":{"line":59,"column":6},"end":{"line":61,"column":7}},"20":{"start":{"line":60,"column":9},"end":{"line":60,"column":80}},"21":{"start":{"line":70,"column":6},"end":{"line":70,"column":41}},"22":{"start":{"line":71,"column":6},"end":{"line":71,"column":42}},"23":{"start":{"line":72,"column":6},"end":{"line":72,"column":53}},"24":{"start":{"line":75,"column":6},"end":{"line":75,"column":49}},"25":{"start":{"line":78,"column":6},"end":{"line":78,"column":71}},"26":{"start":{"line":105,"column":10},"end":{"line":105,"column":74}},"27":{"start":{"line":107,"column":10},"end":{"line":107,"column":34}}},"branchMap":{"1":{"line":27,"type":"if","locations":[{"start":{"line":27,"column":9},"end":{"line":27,"column":9}},{"start":{"line":27,"column":9},"end":{"line":27,"column":9}}]},"2":{"line":33,"type":"if","locations":[{"start":{"line":33,"column":9},"end":{"line":33,"column":9}},{"start":{"line":33,"column":9},"end":{"line":33,"column":9}}]},"3":{"line":59,"type":"if","locations":[{"start":{"line":59,"column":6},"end":{"line":59,"column":6}},{"start":{"line":59,"column":6},"end":{"line":59,"column":6}}]}},"code":["(function () { YUI.add('terminal-base', function (Y, NAME) {","","'use strict';","","/**"," * @module terminal-base"," */","","/**"," * Terminal is responsible for wire edition"," * @class TerminalBase"," * @constructor"," * @extends Widget"," * @uses WidgetChild"," * @uses WidgetPosition"," * @uses WidgetPositionAlign"," * @uses WiresDelegate"," * @param {Object} oConfigs The user configuration for the instance."," */","Y.TerminalBase = Y.Base.create(\"terminal-base\", Y.Widget, [Y.WidgetChild, Y.WidgetPosition, Y.WidgetPositionAlign, Y.WiresDelegate], {","   ","   renderUI: function () {","      ","      // For Overlay extensions such as Scissors or DDGroups","      var show = Y.bind(function () {","         var bb = this.get('boundingBox');","         if( bb ) {","            bb.addClass( this.getClassName(\"show-overlay\") );","         }","      }, this);","      var hide = Y.bind(function () {","         var bb = this.get('boundingBox');","         if(bb) {","            bb.removeClass( this.getClassName(\"show-overlay\") );","         }","      }, this);","      this.get('boundingBox').on('mouseover', function () { Y.later(300, this, show); });","      this.get('boundingBox').on('mouseout', function () { Y.later(300, this, hide); });","     ","","      var containerXY = this.get('parent').get('boundingBox').getXY();","      //var xy = this.get('xy');","      var offset = this.get('offset');","","      this.set('xy', [containerXY[0]+offset[0], containerXY[1]+offset[1]]);","      //console.log(containerXY, xy, );","","   },","   ","   // override the WiresDelegate behavior which re-fires the event","   // add the connected class","   _onAddWire: function (e) {","      this.get('boundingBox').addClass(  this.getClassName(\"connected\") );","   },","   ","   // override the WiresDelegate behavior which re-fires the event","   // Remove the connected class if it has no more wires:","   _onRemoveWire: function (e) {","      if(this._wires.length === 0) {","         this.get('boundingBox').removeClass(  this.getClassName(\"connected\") );","      }","   },","   ","   /**","    * This function is a temporary test. I added the border width while traversing the DOM and","    * I calculated the offset to center the wire in the terminal just after its creation","    * @method getXY","    */","   getXY: function () {","      var container = this.get('parent');","      var layer = container.get('parent');","      var layerXY = layer.get('boundingBox').getXY();","      //console.log( \"layerXY\", layerXY );","","      var absXY = this.get('contentBox').getXY();","      //console.log( \"absXY\", absXY );","","      return [absXY[0]-layerXY[0] + 15/2 , absXY[1]-layerXY[1] + 15/2];","   }","   ","}, {","   ","   ATTRS: {","      ","      name: {","         value: null","      },","      ","      /**","       * Vector direction at the terminal","       * (used by BezierWire ou Scissors)","       * @attribute dir","       */","      dir: {","         value: [0,1]","      },","      ","      alignNode: {","         value: null","      },","","      offset: {","        setter: function(val) {","          //this._setX(val);","          var containerXY = this.get('parent').get('boundingBox').getXY();","","          var xy = this.get('xy');","","          //console.log(containerXY, xy, val);","        },","        value: [0,0]","      }","      ","   }","   ","});","","","","","}, '@VERSION@', {","    \"requires\": [","        \"widget\",","        \"widget-child\",","        \"widget-position\",","        \"widget-position-align\",","        \"wire-base\",","        \"wires-delegate\"","    ]","});","","}());"]};
}
var __cov_rSK1Myge77coWSty4yqABw = __coverage__['build/terminal-base/terminal-base.js'];
__cov_rSK1Myge77coWSty4yqABw.s['1']++;YUI.add('terminal-base',function(Y,NAME){'use strict';__cov_rSK1Myge77coWSty4yqABw.f['1']++;__cov_rSK1Myge77coWSty4yqABw.s['2']++;Y.TerminalBase=Y.Base.create('terminal-base',Y.Widget,[Y.WidgetChild,Y.WidgetPosition,Y.WidgetPositionAlign,Y.WiresDelegate],{renderUI:function(){__cov_rSK1Myge77coWSty4yqABw.f['2']++;__cov_rSK1Myge77coWSty4yqABw.s['3']++;var show=Y.bind(function(){__cov_rSK1Myge77coWSty4yqABw.f['3']++;__cov_rSK1Myge77coWSty4yqABw.s['4']++;var bb=this.get('boundingBox');__cov_rSK1Myge77coWSty4yqABw.s['5']++;if(bb){__cov_rSK1Myge77coWSty4yqABw.b['1'][0]++;__cov_rSK1Myge77coWSty4yqABw.s['6']++;bb.addClass(this.getClassName('show-overlay'));}else{__cov_rSK1Myge77coWSty4yqABw.b['1'][1]++;}},this);__cov_rSK1Myge77coWSty4yqABw.s['7']++;var hide=Y.bind(function(){__cov_rSK1Myge77coWSty4yqABw.f['4']++;__cov_rSK1Myge77coWSty4yqABw.s['8']++;var bb=this.get('boundingBox');__cov_rSK1Myge77coWSty4yqABw.s['9']++;if(bb){__cov_rSK1Myge77coWSty4yqABw.b['2'][0]++;__cov_rSK1Myge77coWSty4yqABw.s['10']++;bb.removeClass(this.getClassName('show-overlay'));}else{__cov_rSK1Myge77coWSty4yqABw.b['2'][1]++;}},this);__cov_rSK1Myge77coWSty4yqABw.s['11']++;this.get('boundingBox').on('mouseover',function(){__cov_rSK1Myge77coWSty4yqABw.f['5']++;__cov_rSK1Myge77coWSty4yqABw.s['12']++;Y.later(300,this,show);});__cov_rSK1Myge77coWSty4yqABw.s['13']++;this.get('boundingBox').on('mouseout',function(){__cov_rSK1Myge77coWSty4yqABw.f['6']++;__cov_rSK1Myge77coWSty4yqABw.s['14']++;Y.later(300,this,hide);});__cov_rSK1Myge77coWSty4yqABw.s['15']++;var containerXY=this.get('parent').get('boundingBox').getXY();__cov_rSK1Myge77coWSty4yqABw.s['16']++;var offset=this.get('offset');__cov_rSK1Myge77coWSty4yqABw.s['17']++;this.set('xy',[containerXY[0]+offset[0],containerXY[1]+offset[1]]);},_onAddWire:function(e){__cov_rSK1Myge77coWSty4yqABw.f['7']++;__cov_rSK1Myge77coWSty4yqABw.s['18']++;this.get('boundingBox').addClass(this.getClassName('connected'));},_onRemoveWire:function(e){__cov_rSK1Myge77coWSty4yqABw.f['8']++;__cov_rSK1Myge77coWSty4yqABw.s['19']++;if(this._wires.length===0){__cov_rSK1Myge77coWSty4yqABw.b['3'][0]++;__cov_rSK1Myge77coWSty4yqABw.s['20']++;this.get('boundingBox').removeClass(this.getClassName('connected'));}else{__cov_rSK1Myge77coWSty4yqABw.b['3'][1]++;}},getXY:function(){__cov_rSK1Myge77coWSty4yqABw.f['9']++;__cov_rSK1Myge77coWSty4yqABw.s['21']++;var container=this.get('parent');__cov_rSK1Myge77coWSty4yqABw.s['22']++;var layer=container.get('parent');__cov_rSK1Myge77coWSty4yqABw.s['23']++;var layerXY=layer.get('boundingBox').getXY();__cov_rSK1Myge77coWSty4yqABw.s['24']++;var absXY=this.get('contentBox').getXY();__cov_rSK1Myge77coWSty4yqABw.s['25']++;return[absXY[0]-layerXY[0]+15/2,absXY[1]-layerXY[1]+15/2];}},{ATTRS:{name:{value:null},dir:{value:[0,1]},alignNode:{value:null},offset:{setter:function(val){__cov_rSK1Myge77coWSty4yqABw.f['10']++;__cov_rSK1Myge77coWSty4yqABw.s['26']++;var containerXY=this.get('parent').get('boundingBox').getXY();__cov_rSK1Myge77coWSty4yqABw.s['27']++;var xy=this.get('xy');},value:[0,0]}}});},'@VERSION@',{'requires':['widget','widget-child','widget-position','widget-position-align','wire-base','wires-delegate']});