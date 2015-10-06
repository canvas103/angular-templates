/**
 * Created by chenghui on 10/5/2015.
 */
app.directive('myD3Bar', function ($window) {
    return {
        restrict: "E",
        scope: {
            data: "="
        },
        link: function (scope, element, attrs) {
            var window = angular.element($window);
            var w
                , h
                , margin = {top: 10, bottom: 40, left: 40, right: 10}
                , data = scope.data
                , height
                , width
                , xAxis = d3.svg.axis()
                    .orient('bottom')
                , yAxis = d3.svg.axis()
                    .orient('left');
            //, dispatch = d3.dispatch("show", "hide");
            var tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-10, 0])
                .html(function (d) {
                    return "<strong>Value:</strong> <span style='color:red'>" + Math.round(d.y) + "</span><br>" +
                        "<strong>At:</strong> <span style='color:red'>" + d.x + "</span>";
                });
            var tip2 = d3.tip()
                .attr('class', 'd3-tip')
                .offset([20, 50])
                .html(function (d) {
                    return "<strong>Value:</strong> <span style='color:red'>" + Math.round(d.y) + "at" + d.x + "</span>";
                });
            var container = d3.select(element[0]);
            var wrap = container.append('svg');
            var svg = wrap.append('g')
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
                .call(tip)
                .call(tip2);
            var gx = svg.append('g').attr('class', 'x axis');
            var gy = svg.append('g').attr('class', 'y axis');
            var xScale = d3.scale.ordinal();
            var yScale = d3.scale.linear();
//      var colorScale = d3.scale.quantize()
            var colorScale = d3.scale.linear()
                .domain([0, 20])
                .range(["red", "yellow"]);

            svg.selectAll('rect')
                .data(data)
                .enter() //loop
                .append('rect')
                .attr('class', 'bar')
                .call(chart)
                .on('mouseover', function (d, i) {
                    d3.select(this).classed('active', true);
                    tip.show({x: i, y: d});
                    tip2.show({x: i, y: d});
                })
                .on('mouseout', function () {
                    d3.select(this).classed('active', false);
                    tip.hide();
                    tip2.hide();
                });
            function chart() {
                height = (h || parseInt(container.style('height')) || 300)
                    - margin.top - margin.bottom;
                width = (w || parseInt(container.style('width')) || 400)
                    - margin.left - margin.right;
                xScale
                    .domain(data)
                    .rangeBands([0, width], 0.3, 1);
                yScale
                    .domain([0, d3.max(data) * 1.1])
                    .range([height, 0]);
                xAxis
                    .scale(xScale)
                    .tickFormat(function (d, i) {
                        return i + 1
                    })
                ;
                yAxis
                    .scale(yScale)
                ;
                gx.attr('transform', 'translate(0,' + (height + 1) + ')')
                    .call(xAxis);
                gy.attr('transform', 'translate(0,0)')
                    .call(yAxis);
                wrap.attr('width', width + margin.left + margin.right)
                    .attr('height', height + margin.top + margin.bottom);
                svg.selectAll('rect')
                    .data(data)
                    .transition()
                    .duration(1000)
                    .delay(function (d, i) {
                        return i * 70
                    })
                    .attr('x', xScale)
                    .attr('y', yScale)
                    .attr('fill', function (d, i) {
                        return colorScale(i)
                    })
                    .attr('width', xScale.rangeBand() * 0.9)
                    .attr('height', function (d) {
                        return height - yScale(d)
                    });
                svg
                    .attr('width', width)
                    .attr('height', height);
            }

            scope.$watch('data', function (newData, oldData) {
                if (newData !== oldData) {
                    data = scope.data;
                    chart();
                }
            }, true);
            window.bind('resize',chart);
        }
    }
})
;