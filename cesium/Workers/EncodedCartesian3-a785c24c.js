define(["exports","./Cartesian2-08065eec","./Check-be2d5acb","./when-ad3237a0"],function(e,n,i,a){"use strict";function h(){this.high=n.Cartesian3.clone(n.Cartesian3.ZERO),this.low=n.Cartesian3.clone(n.Cartesian3.ZERO)}h.encode=function(e,n){var i;return a.defined(n)||(n={high:0,low:0}),0<=e?(i=65536*Math.floor(e/65536),n.high=i,n.low=e-i):(i=65536*Math.floor(-e/65536),n.high=-i,n.low=e+i),n};var r={high:0,low:0};h.fromCartesian=function(e,n){var i=(n=!a.defined(n)?new h:n).high,o=n.low;return h.encode(e.x,r),i.x=r.high,o.x=r.low,h.encode(e.y,r),i.y=r.high,o.y=r.low,h.encode(e.z,r),i.z=r.high,o.z=r.low,n};var t=new h;h.writeElements=function(e,n,i){h.fromCartesian(e,t);var o=t.high,e=t.low;n[i]=o.x,n[i+1]=o.y,n[i+2]=o.z,n[i+3]=e.x,n[i+4]=e.y,n[i+5]=e.z},e.EncodedCartesian3=h});