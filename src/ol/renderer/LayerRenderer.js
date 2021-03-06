goog.provide('ol.renderer.LayerRenderer');

/**
 * A single layer renderer that will be created by the composite map renderer.
 *
 * @interface
 * @param {Element} target
 * @param {!ol.layer.Layer} layer
 */
ol.renderer.LayerRenderer = function(target, layer) {};

/**
 * Get layer being rendered.
 *
 * @returns {!ol.layer.Layer}
 */
ol.renderer.LayerRenderer.prototype.getLayer = function() {};

/**
 * Get an identifying string for this renderer.
 *
 * @returns {string}
 */
ol.renderer.LayerRenderer.prototype.getType = function() {};

/**
 * Determine if this renderer is supported in the given environment.
 *
 * @returns {boolean}
 */
ol.renderer.LayerRenderer.isSupported = function() {};

/**
 * Determine if this renderer is capable of renderering the given layer.
 *
 * @param {ol.layer.Layer} layer
 * @returns {boolean}
 */
ol.renderer.LayerRenderer.canRender = function(layer) {};
