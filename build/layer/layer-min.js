YUI.add("layer",function(b,a){b.Layer=b.Base.create("layer",b.Widget,[b.WidgetParent,b.WiresDelegate],{initializer:function(){this.graphic=new b.Graphic({render:this.get("contentBox")});},clear:function(){this.removeAll();}},{ATTRS:{defaultChildType:{value:"Container"}}});},"@VERSION@",{"requires":["widget-parent","container","wires-delegate"],"skinnable":"true"});