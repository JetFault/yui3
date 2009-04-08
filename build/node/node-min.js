YUI.add("node",function(E){var Q={},I={},L=Array.prototype.slice,K=".",G="nodeName",O="nodeType",B="ownerDocument",M="tagName",D="_yuid",P=function(S){var R=null;if(S){R=(typeof S==="string")?function(T){return E.Selector.test(T,S);}:function(T){return S(J.get(T));};}return R;},J=function(R){this[D]=E.stamp(R.node);Q[this[D]]=R.node;J._instances[this[D]]=this;if(R.restricted){I[this[D]]=true;}H.apply(this,arguments);},H=E.Base,C=E.Base.prototype;J.NAME="Node";J.DOM_EVENTS={click:true};J._instances={};J.getDOMNode=function(R){if(R){if(R instanceof J){R=Q[R[D]];}else{if(!R[G]||!R.alert){R=null;}}}return R||null;};J.scrubVal=function(U,S,T){if(U){if(typeof U==="object"||typeof U==="function"){if(O in U||U.item||(U[0]&&U[0][O])||U.document){if(S&&I[S[D]]&&!S.contains(U)){U=null;}else{if(U[O]||U.document){U=J.get(U);}else{U=E.all(U);}}}else{T=(T===undefined)?4:T;if(T>0){for(var R in U){if(U.hasOwnProperty&&U.hasOwnProperty(R)){U[R]=J.scrubVal(U[R],S,--T);}}}}}}else{if(U===undefined){U=S;}}return U;};J.addMethod=function(R,T,S){if(R&&T&&typeof T==="function"){J.prototype[R]=function(){S=S||this;var V=L.call(arguments),U;if(V[0]&&V[0] instanceof J){V[0]=J.getDOMNode(V[0]);}V.unshift(Q[this[D]]);U=J.scrubVal(T.apply(S,V),this);return U;};}else{}};J.importMethod=function(T,R,S){if(typeof R==="string"){S=S||R;J.addMethod(S,T[R],T);}else{E.each(R,function(U){J.importMethod(T,U);});}};J.get=function(T,U,S){var R=null;if(typeof T==="string"){if(T.indexOf("doc")===0){T=E.config.doc;}else{if(T.indexOf("win")===0){T=E.config.win;}else{T=E.Selector.query(T,U,true);}}}if(T){R=J._instances[T[D]];if(!R){R=new J({node:T,restricted:S});}else{if(S){I[R[D]]=true;R._set("restricted",true);}}}return R;};J.create=function(){return J.get(E.DOM.create.apply(E.DOM,arguments));};J.ATTRS={text:{getter:function(){return E.DOM.getText(Q[this[D]]);},readOnly:true},"options":{getter:function(){var R=Q[this[D]];return(R)?E.all(R.getElementsByTagName("option")):[];}},"children":{getter:function(){var U=Q[this[D]],T=U.children;if(T===undefined){var V=U.childNodes;T=[];for(var S=0,R=V.length;S<R;++S){if(V[S][M]){T[T.length]=V[S];}}}return E.all(T);}},restricted:{writeOnce:true,value:false}};J.DEFAULT_SETTER=function(R,T){var S=Q[this[D]];if(R.indexOf(K)!==-1){strPath=R;R=R.split(K);E.Object.setValue(S,R,T);}else{S[R]=T;}return this;};J.DEFAULT_GETTER=function(R){var S=Q[this[D]],T;if(R.indexOf&&R.indexOf(K)>-1){T=E.Object.getValue(S,R.split(K));}else{T=S[R];}return T?E.Node.scrubVal(T,this):T;};E.extend(J,E.Base);E.mix(J.prototype,{toString:function(){var T="",S=this[D]+": not bound to a node",R=Q[this[D]];if(R){T+=R[G];if(R.id){T+="#"+R.id;}if(R.className){T+="."+R.className.replace(" ",".");}T+=" "+this[D];}return T||S;},_addDOMAttr:function(R){var S=Q[this[D]],T=R.split(".")[0];if(S&&S[T]!==undefined){this.addAttr(R,{setter:function(U){return J.DEFAULT_SETTER.call(this,R,U);}});}else{}},addNode:function(S,R){return E.DOM.insertNode(Q[this[D]],S,R);},on:function(V,U,T,R){var S=L.call(arguments,0);S.splice(2,0,Q[this[D]]);if(J.DOM_EVENTS[V]){E.Event.attach.apply(E.Event,S);}return C.on.apply(this,arguments);},detach:function(T,S){var R=L.call(arguments,0);R.splice(2,0,Q[this[D]]);return E.Event.detach.apply(E.Event,R);},get:function(R){if(!this._conf.data.getter||!this._conf.data.getter[R]){return J.DEFAULT_GETTER.call(this,R);}return C.get.apply(this,arguments);},set:function(R,S){if(!this.attrAdded(R)){if(R.indexOf(K)<0){this._addDOMAttr(R);}else{return J.DEFAULT_SETTER.call(this,R,S);}}return C.set.apply(this,arguments);},create:J.create,compareTo:function(R){var S=Q[this[D]];if(R instanceof E.Node){R=E.Node.getDOMNode(R);}return S===R;},inDoc:function(S){var R=Q[this[D]];S=(S)?J.getDOMNode(S):R[B];if(S.documentElement){return E.DOM.contains(S.documentElement,R);}},getById:function(T){var S=Q[this[D]],R=E.DOM.byId(T,S[B]);if(R&&E.DOM.contains(S,R)){R=E.get(R);}else{R=null;}return R;},ancestor:function(R){return J.get(E.DOM.elementByAxis(Q[this[D]],"parentNode",P(R)));},previous:function(S,R){return J.get(E.DOM.elementByAxis(Q[this[D]],"previousSibling",P(S),R));},next:function(T,S,R){return J.get(E.DOM.elementByAxis(Q[this[D]],"nextSibling",P(S),R));},query:function(R){return E.get(E.Selector.query(R,Q[this[D]],true));},queryAll:function(R){return E.all(E.Selector.query(R,Q[this[D]]));},test:function(R){return E.Selector.test(Q[this[D]],R);},invoke:function(Y,S,R,X,W,V){var U=Q[this[D]],T;if(S&&S instanceof E.Node){S=J.getDOMNode(S);}if(R&&R instanceof E.Node){R=J.getDOMNode(R);}T=U[Y](S,R,X,W,V);return E.Node.scrubVal(T,this);},destructor:function(){Q[this[D]]=[];delete J._instances[this[D]];},each:function(S,R){R=R||this;return S.call(R,this);},item:function(R){return this;},size:function(){return Q[this[D]]?1:0;},addEventListener:function(){var R=L.call(arguments);R.unshift(Q[this[D]]);return E.Event.nativeAdd.apply(E.Event,R);},removeEventListener:function(){args.unshift(Q[this[D]]);return E.Event.nativeRemove.apply(E.Event,arguments);},},true);E.Array.each(["replaceChild","appendChild","insertBefore","removeChild","hasChildNodes","cloneNode","hasAttribute","removeAttribute","scrollIntoView","getElementsByTagName","focus","blur","submit","reset","select"],function(R){J.prototype[R]=function(V,T,S){var U=this.invoke(R,V,T,S);return U;};});J.importMethod(E.DOM,["contains","setAttribute","getAttribute"]);E.Node=J;E.get=E.Node.get;E.Array._diff=function(S,R){var W=[],Y=false;outer:for(var U=0,X=S.length;U<X;U++){Y=false;for(var T=0,V=R.length;T<V;T++){if(S[U]===R[T]){Y=true;continue outer;}}if(!Y){W[W.length]=S[U];}}return W;};E.Array.diff=function(S,R){return{added:E.Array._diff(R,S),removed:E.Array._diff(S,R)};};var N={},L=Array.prototype.slice,D="_yuid",A=function(S){var T=S.doc||E.config.doc,R=S.nodes||[];if(typeof R==="string"){this._query=R;R=E.Selector.query(R,T);}E.stamp(this);A._instances[this[D]]=this;N[this[D]]=R;if(S.restricted){I=this[D];}A.superclass.constructor.apply(this,arguments);};A.NAME="NodeList";A.getDOMNodes=function(R){return N[R[D]];
};A._instances=[];A.each=function(R,U,T){var S=N[R[D]];if(S&&S.length){E.Array.each(S,U,T||R);}else{}};A.addMethod=function(R,U,T){if(R){var S=A._tmpNode=A._tmpNode||E.Node.create("<div>");A.prototype[R]=function(){var W=[],V=arguments;A.each(this,function(a){var Y=E.Node._instances[a[D]],Z,X;if(!Y){Q[S[D]]=a;Y=S;}Z=T||Y;X=U.apply(Z,V);if(X!==undefined){W[W.length]=X;}});return W.length?W:this;};}else{}};A.importMethod=function(T,R,S){if(typeof R==="string"){S=S||R;A.addMethod(R,T[R]);}else{E.each(R,function(U){A.importMethod(T,U);});}};A.DEFAULT_SETTER=function(R,T){var S=A._tmpNode=A._tmpNode||E.Node.create("<div>");A.each(this,function(V){var U=E.Node._instances[V[D]];if(!U){Q[S[D]]=V;U=S;}U.set(R,T);});};A.DEFAULT_GETTER=function(R){var T=A._tmpNode=A._tmpNode||E.Node.create("<div>"),S=[];A.each(this,function(V){var U=E.Node._instances[V[D]];if(!U){Q[T[D]]=V;U=T;}S[S.length]=U.get(R);});return S;};E.extend(A,E.Base);E.mix(A.prototype,{item:function(R){return E.get((N[this[D]]||[])[R]);},each:function(T,S){var R=this;S=S||this;E.Array.each(N[this[D]],function(V,U){return T.call(S,E.get(V),U,R);});},filter:function(R){return J.scrubVal(Selector.filter(N[this[D]],R),this);},get:function(R){if(!this.attrAdded(R)&&(!this._conf.data.getter||!this._conf.data.getter[R])){return A.DEFAULT_GETTER.call(this,R);}return A.superclass.constructor.prototype.get.apply(this,arguments);},set:function(R,S){if(!this.attrAdded(R)){this._addAttr(R);}return A.superclass.constructor.prototype.set.apply(this,arguments);},on:function(W,V,U,R){var T=L.call(arguments,0),S;T.splice(2,0,N[this[D]]);if(J.DOM_EVENTS[W]){E.Event.attach.apply(E.Event,T);}return A.superclass.constructor.prototype.on.apply(this,arguments);},destructor:function(){N[this[D]]=[];delete A._instances[this[D]];},refresh:function(){var S,R,T=N[this[D]];if(this._query){if(N[this[D]]&&N[this[D]][0]&&N[this[D]][0].ownerDocument){S=N[this[D]][0].ownerDocument;}N[this[D]]=E.Selector.query(this._query,S||E.config.doc);R=E.Array.diff(T,N[this[D]]);R.added=R.added?E.all(R.added):null;R.removed=R.removed?E.all(R.removed):null;this.fire("refresh",R);}},size:function(){return N[this[D]].length;},toString:function(){var U="",T=this[D]+": not bound to any nodes",R=N[this[D]];if(R&&R[0]){var S=R[0];U+=S[G];if(S.id){U+="#"+S.id;}if(S.className){U+="."+S.className.replace(" ",".");}if(R.length>1){U+="...["+R.length+" items]";}}return U||T;},_addAttr:function(R){this.addAttr(R.split(K)[0],{getter:function(){return A.DEFAULT_GETTER.call(this,R);},setter:function(S){A.DEFAULT_SETTER.call(this,R,S);}});}},true);A.importMethod(E.Node.prototype,["addEventListener","removeEventListener"]);E.NodeList=A;E.all=function(S,U,R){var T=new A({nodes:S,doc:U,restricted:R});return T.size()?T:null;};var F=["getStyle","getComputedStyle","setStyle","setStyles"];E.Node.importMethod(E.DOM,F);E.NodeList.importMethod(E.Node.prototype,F);var F=["hasClass","addClass","removeClass","replaceClass","toggleClass"];E.Node.importMethod(E.DOM,F);E.NodeList.importMethod(E.Node.prototype,F);E.Node.ATTRS.region={getter:function(){return E.DOM.region(E.Node.getDOMNode(this));}};E.Node.ATTRS.viewportRegion={getter:function(){return E.DOM.region(E.Node.getDOMNode(this));}};E.Node.importMethod(E.DOM,"inViewportRegion");E.Node.prototype.intersect=function(R,T){var S=E.Node.getDOMNode(this);if(R instanceof E.Node){R=E.Node.getDOMNode(R);}return E.DOM.intersect(S,R,T);};E.Node.prototype.inRegion=function(R,T,U){var S=E.Node.getDOMNode(this);if(R instanceof E.Node){R=E.Node.getDOMNode(R);}return E.DOM.inRegion(S,R,T,U);};E.each(["winWidth","winHeight","docWidth","docHeight","docScrollX","docScrollY"],function(R){E.Node.ATTRS[R]={getter:function(){var S=Array.prototype.slice.call(arguments);S.unshift(E.Node.getDOMNode(this[D]));return E.DOM[R].apply(this,S);}};});E.Node.ATTRS.scrollLeft={getter:function(){var R=E.Node.getDOMNode(this);return("scrollLeft" in R)?R.scrollLeft:E.DOM.docScrollX(R);},setter:function(S){var R=E.Node.getDOMNode(this);if(R){if("scrollLeft" in R){R.scrollLeft=S;}else{if(R.document||R[O]===9){E.DOM._getWin(R).scrollTo(S,E.DOM.docScrollY(R));}}}else{}}};E.Node.ATTRS.scrollTop={getter:function(){var R=E.Node.getDOMNode(this);return("scrollTop" in R)?R.scrollTop:E.DOM.docScrollY(R);},setter:function(S){var R=E.Node.getDOMNode(this);if(R){if("scrollTop" in R){R.scrollTop=S;}else{if(R.document||R[O]===9){E.DOM._getWin(R).scrollTo(E.DOM.docScrollX(R),S);}}}else{}}};E.Node.importMethod(E.DOM,["getXY","setXY","getX","setX","getY","setY"]);},"@VERSION@",{requires:["dom","base"]});