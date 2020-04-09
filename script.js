let illo = new Zdog.Illustration({
  // set canvas with selector
  element: '.zdog-canvas',
	zoom:1.5,
	rotate: { x:-0.4,y:0.4 },
});
function animate() {
  // rotate illo each frame
	 illo.rotate.y -= 0.03;
  illo.updateRenderGraph();
  // animate next frame
  requestAnimationFrame( animate );
}
// start animation
animate();
// add circle


new Zdog.Cylinder({
  addTo: illo,
  diameter: 80,
  length: 10,
	stroke:0,
  color: '#555',
  frontFace: '#888',
  backface: '#555',
});

var faceGroup = new Zdog.Group({
  addTo: illo,
  translate: { z: 15 },
});
new Zdog.Shape({
  addTo: faceGroup,
  path: [
    { y: -25 }, // start at 1st point
    { y:  0 }, // line to 2nd point
  ],
  stroke: 10,
  color: '#000',
});
new Zdog.Shape({
  addTo: faceGroup,
  path: [
    { x: 25 }, // start at 1st point
    { x:  0 }, // line to 2nd point
  ],
  stroke: 10,
  color: '#000',
});
// update & render
illo.updateRenderGraph();
