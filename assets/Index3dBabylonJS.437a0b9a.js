import{author as e}from"./config.d0db36d9.js";import{b as n}from"./babylonjs.bd3af4ad.js";import{x as r,M as t,P as s,Q as o}from"./@vue.e665ac55.js";const a={name:"Index3d_首页",props:{},setup:t=>(r((async()=>{console.log("-------------1",e);var r,t,s=document.getElementById("indexBabylonCanvas"),o=new n.exports.Engine(s,!0,{preserveDrawingBuffer:!0,stencil:!0}),a=(r=new n.exports.Scene(o),(t=new n.exports.FreeCamera("camera1",new n.exports.Vector3(0,5,-10),r)).setTarget(n.exports.Vector3.Zero()),t.attachControl(s,!1),new n.exports.HemisphericLight("light1",new n.exports.Vector3(0,1,0),r),new n.exports.PointLight("light2",new n.exports.Vector3(0,1,-1),r),n.exports.Mesh.CreateSphere("sphere1",16,2,r,!1,n.exports.Mesh.FRONTSIDE).position.y=1,n.exports.Mesh.CreateGround("ground1",6,6,2,r,!1),r);o.runRenderLoop((function(){a.render()})),window.addEventListener("resize",(function(){o.resize()}))})),{})},i=[o("canvas",{class:"CVS0 Index2dwith3d",id:"indexBabylonCanvas"},null,-1),o("div",{class:"CVS1 Index2dwith3d"},"test_canvas",-1)];a.render=function(e,n,r,o,a,d){return t(),s("div",null,i)};export{a as default};
