webpackHotUpdate(0,{

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(222);

	var d3 = __webpack_require__(224);

	module.exports = function (dataset) {

	  console.log(dataset);

	  var width = 400;
	  var height = 400;
	  var radius = Math.min(width, height) / 2 - 10;

	  var pieWidth = 50;
	  var color = d3.scaleOrdinal(d3.schemeCategory20);

	  var tooltip = d3.select('.graph_wrapper').append('div').attr('class', 'tooltip');

	  tooltip.append('div').attr('class', 'label');

	  tooltip.append('div').attr('class', 'num_votes');

	  var graph_wrapper = d3.select('.graph_wrapper');

	  graph_wrapper.selectAll("*").remove();

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

/***/ }

})