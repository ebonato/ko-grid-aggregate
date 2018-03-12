/*
 Copyright (c) 2015, Ben Schulz
 License: BSD 3-clause (http://opensource.org/licenses/BSD-3-Clause)
*/
function n(g,m){return function(h,f,l){function g(c,a){return c.data.source.streamObservables(function(a){return a.filteredBy(c.data.predicate)}).then(function(e){var k={count:0};a.forEach(function(c){k[c]={minimum:Number.POSITIVE_INFINITY,maximum:Number.NEGATIVE_INFINITY,sum:0}});return e.reduce(function(e,f){++k.count;a.forEach(function(b){var a=k[b];b=c.data.valueSelector(-1==b.indexOf(".")?f[b]:eval("value."+b));"string"===typeof b&&(b=""==b.trim()?0:isNaN(b)?b.trim().length:parseFloat(b));a.minimum=
Math.min(a.minimum,b);a.maximum=Math.max(a.maximum,b);a.sum+=b});return e},k)})}h="ko-grid-aggregate".substr(0,-1).substr(0,-1);l.defineExtension(h,{initializer:function(c){c.to("tfoot").prepend("aggregates",'<tr class="ko-grid-tr ko-grid-aggregate-row" data-bind="indexedRepeat: {  forEach: extensions.aggregate.__aggregateRows,  indexedBy: \'id\',  as: \'aggregateRow\'}">  <td class="ko-grid-tf ko-grid-aggregate"    data-bind="indexedRepeat: {      forEach: columns.displayed,      indexedBy: \'id\',      as: \'column\'    }"    data-repeat-bind="      __gridAggregate: aggregateRow()[column().id],      _gridWidth: column().width()"></td></tr>')},
Constructor:function(c,a,e){var k=f.observable([]);this.__aggregateRows=k;if(Array.isArray(c)){var h=[];c.forEach(function(a){Object.keys(a).forEach(function(a){a=e.columns.byId(a).property;0>h.indexOf(a)&&h.push(a)})});var l=a.statisticsComputer||g,b=0,m=f.computed(function(){function a(c){Object.keys(c).forEach(function(b){if("object"===typeof c[b])c[b]&&(g+=b+".",a(c[b]),g=g.replace(b+".",""));else if(f.isObservable(c[b]))c[b]()})}e.data.predicate();e.data.view.values();var g="";e.data.view.observables().forEach(function(c){a(c)});
return l(e,h).then(function(a){var g=a.count;k(c.map(function(c){var h={id:""+ ++b};e.columns.displayed().forEach(function(b){var e=b.id,d=b.property,f=c[e];if(f){if(g)if(d="average"===f?a[d].sum/g:"count"===f?g:a[d][f],"number"===typeof d)if(1<=Math.abs(d))d=d.toLocaleString();else{var k=-Math.floor(Math.log(d)/Math.log(10));d=d.toLocaleString(void 0,{maximumFractionDigits:0==d||isNaN(d)?2:k+1})}else d=""+d;else d="N/A";b={column:b,j:f,value:d}}else b={column:b};h[e]=b});return h}));e.layout.recalculate()})}).extend({P:{timeout:500,
method:"notifyWhenChangesStop"}});this.dispose=function(){m.dispose()}}}});f.bindingHandlers.__gridAggregate={init:function(c){for(;c.firstChild;)f.removeNode(c.firstChild);c.appendChild(window.document.createTextNode(""));return{controlsDescendantBindings:!0}},update:function(c,a){a=a();c.className=["ko-grid-tf ko-grid-aggregate"+(a.j?" "+a.j:"")].concat(a.column.footerClasses()).join(" ");c.firstChild.nodeValue=a.j?a.value:""}};return l.declareExtensionAlias("aggregate",h)}({},m,g)}
"function"===typeof define&&define.amd?define(["ko-grid","knockout","ko-data-source","ko-indexed-repeat"],n):window["ko-grid-aggregate"]=n(window.ko.bindingHandlers.grid,window.ko);