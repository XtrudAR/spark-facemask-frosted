const Scene = require('Scene');
const Animation = require('Animation');

Scene.root.findFirst('MouthFog').then(emitter => {
  emitter.hsvaColorModulationModifier = Animation.samplers.HSVA([
    Animation.samplers.constant(1),
    Animation.samplers.constant(1),
    Animation.samplers.constant(1),
    Animation.samplers.easeInQuad(1, 0)
  ]);
  emitter.sizeModifier = Animation.samplers.easeInCirc(0, 0.02);
});
