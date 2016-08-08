webpackHotUpdate(0,{

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(225);
	var d3 = __webpack_require__(222);

	module.exports = function (dataset) {

	  var width = 400;
	  var height = 400;
	  var radius = Math.min(width, height) / 2 - 10;

	  var pieWidth = 50;
	  var color = d3.scaleOrdinal(d3.schemeCategory20);

	  var graph_wrapper = d3.select('.graph_wrapper');

	  graph_wrapper.selectAll("*").remove();

	  var tooltip = graph_wrapper.append('div').attr('class', 'tooltip');

	  tooltip.append('div').attr('class', 'label');

	  tooltip.append('div').attr('class', 'num_votes');

	  var svg = graph_wrapper.append('svg').attr('width', width).attr('height', height).append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

	  var arc = d3.arc().innerRadius(radius - pieWidth).outerRadius(radius);

	  var pie = d3.pie().value(function (d) {
	    return d.num_votes;
	  }).sort(null);

	  var path = svg.selectAll('path').data(pie(dataset)).enter().append('path').attr('d', arc).attr('fill', function (d, i) {
	    return color(d.data.value);
	  });

	  path.on('mouseover', function (d) {
	    tooltip.select('.label').html(d.data.value);
	    tooltip.select('.num_votes').html(d.data.num_votes + " votes");
	    tooltip.style('display', 'block');
	  });

	  path.on('mouseout', function (d) {
	    tooltip.style('display', 'none');
	  });

	  path.on('mousemove', function (d) {
	    tooltip.style('top', d3.event.layerY + 10 + 'px').style('left', d3.event.layerX + 10 + 'px');
	  });

	  var legendRectSize = 18;
	  var legendSpacing = 4;

	  var legend = svg.selectAll('.legend').data(color.domain()).enter().append('g').attr('class', 'legend').attr('transform', function (d, i) {
	    var height = legendRectSize + legendSpacing;
	    var offset = height * color.domain().length / 2;
	    var horz = -2 * legendRectSize;
	    var vert = i * height - offset;

	    return 'translate(' + horz + ',' + vert + ')';
	  });

	  legend.append('rect').attr('width', legendRectSize).attr('height', legendRectSize).style('fill', color).style('stroke', color);

	  legend.append('text').attr('x', legendRectSize + legendSpacing).attr('y', legendRectSize - legendSpacing).text(function (d) {
	    return d;
	  });
	};

/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(226);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(178)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(226, function() {
				var newContent = __webpack_require__(226);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(177)();
	// imports


	// module
	exports.push([module.id, ".legend {\n  font-size: 12px; }\n\nrect {\n  stroke-width: 2; }\n\n.tooltip {\n  background: #eee;\n  box-shadow: 0 0 5px #999999;\n  color: #333;\n  display: none;\n  font-size: 12px;\n  left: 160px;\n  padding: 10px;\n  position: absolute;\n  text-align: center;\n  top: 95px;\n  width: 80px;\n  z-index: 10; }\n", ""]);

	// exports


/***/ }

})