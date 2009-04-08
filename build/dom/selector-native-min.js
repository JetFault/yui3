YUI.add("selector-native",function(C){C.namespace("Selector");var D="parentNode",A="length",B={_reLead:/^\s*([>+~]|:self)/,_reUnSupported:/!./,_foundCache:[],_supportsNative:function(){return((C.UA.ie>=8||C.UA.webkit>525)&&document.querySelectorAll);},_toArray:function(F){var G=F;if(!F.slice){try{G=Array.prototype.slice.call(F);}catch(I){G=[];for(var H=0,E=F[A];H<E;++H){G[H]=F[H];}}}return G;},_clearFoundCache:function(){var H=B._foundCache;for(var F=0,E=H[A];F<E;++F){try{delete H[F]._found;}catch(G){H[F].removeAttribute("_found");}}H=[];},_sort:function(E){if(E){E=B._toArray(E);if(E.sort){E.sort(function(G,F){return C.DOM.srcIndex(G)-C.DOM.srcIndex(F);});}}return E;},_deDupe:function(F){var G=[],E=B._foundCache;for(var H=0,I;I=F[H++];){if(!I._found){G[G[A]]=E[E[A]]=I;I._found=true;}}B._clearFoundCache();return G;},_prepQuery:function(H,G){var F=G.split(","),I=[],K=(H&&H.nodeType===9);if(H){if(!K){H.id=H.id||C.guid();for(var J=0,E=F[A];J<E;++J){G="#"+H.id+" "+F[J];I.push({root:H.ownerDocument,selector:G});}}else{I.push({root:H,selector:G});}}return I;},_query:function(E,L,M){if(B._reUnSupported.test(E)){return B._brute.query(E,L,M);}var I=M?null:[],J=M?"querySelector":"querySelectorAll",N,G;L=L||C.config.doc;if(E){G=B._prepQuery(L,E);I=[];for(var F=0,K;K=G[F++];){try{N=K.root[J](K.selector);if(N&&N.item){N=B._toArray(N);}I=I.concat(N);}catch(H){}}if(G[A]>1){I=B._sort(B._deDupe(I));}I=(!M)?I:I[0]||null;}return I;},_filter:function(F,E){var G=[];if(F&&E){for(var H=0,I;(I=F[H++]);){if(C.Selector._test(I,E)){G[G[A]]=I;}}}else{}return G;},_test:function(J,F){var G=false,E=F.split(","),I;if(J&&J[D]){J.id=J.id||C.guid();J[D].id=J[D].id||C.guid();for(var H=0,K;K=E[H++];){K+="#"+J.id;I=C.Selector.query(K,null,true);G=(I===J);if(G){break;}}}return G;}};if(C.UA.ie&&C.UA.ie<=8){B._reUnSupported=/:(?:nth|not|root|only|checked|first|last|empty)/;}C.mix(C.Selector,B,true);if(B._supportsNative()){C.Selector.query=B._query;}C.Selector.test=B._test;C.Selector.filter=B._filter;},"@VERSION@",{requires:["dom-base"],skinnable:false});