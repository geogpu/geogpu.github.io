define(["exports","./Check-be2d5acb","./when-ad3237a0","./Math-5ca9b250"],function(e,d,l,i){"use strict";var p=i.CesiumMath.EPSILON10;e.arrayRemoveDuplicates=function(e,d,i,n){if(l.defined(e)){i=l.defaultValue(i,!1);var a=l.defined(n),f=e.length;if(f<2)return e;for(var t,r,u=e[0],s=0,c=-1,h=1;h<f;++h)d(u,t=e[h],p)?(l.defined(r)||(r=e.slice(0,h),s=h-1,c=0),a&&n.push(h)):(l.defined(r)&&(r.push(t),s=h,a&&(c=n.length)),u=t);return i&&d(e[0],e[f-1],p)&&(a&&(l.defined(r)?n.splice(c,0,s):n.push(f-1)),l.defined(r)?--r.length:r=e.slice(0,-1)),l.defined(r)?r:e}}});