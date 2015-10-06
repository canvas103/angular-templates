/**
 * Created by chenghui on 10/5/2015.
 */
app.directive('myD3Dots',function($window){
    return{
        restrict:"EA",
        scope:{
            data:"="
        },
        link:function(scope,element,attrs){
            var window = angular.element($window);
            var container = d3.select(element[0]);
            var width, height, h, w;
            var margin = {top: 20, right: 20, bottom: 60, left: 60};

            var data = scope.data;
            var xAxis = d3.svg.axis()
                .orient('bottom');

            var yAxis = d3.svg.axis()
                .orient('left');

            data.push({x: 0, y: 0, r: 10});
            var svg = container.append('svg');
            var g = svg.append('g');
            var gx = g.append('g').attr('class', 'x axis');
            var gy = g.append('g').attr('class', 'y axis');
            var xScale = d3.scale.linear()
                .domain([0, 100]);
            var yScale = d3.scale.linear()
                .domain([0, 100]);

            g.selectAll('circle')
                .data(data)
                .enter()
                .append('circle')
                .attr('class', 'bubble')
                .call(chart)
                .on('mouseover', function () {
                    d3.select(this).classed('active', true)
                })
                .on('mouseout', function () {
                    d3.select(this).classed('active', false)

                })
                .on('mousedown', function (d) {
                    d3.select(this).attr('r', d.r * 2)
                })
                .on('mouseup', function (d) {
                    d3.select(this).attr('r', d.r)

                });
            function chart() {
                height = parseInt(container.style('height')) || 400;
                h = height - margin.top - margin.bottom;
                width = parseInt(container.style('width')) || 500;
                w = width - margin.left - margin.right;
                xScale.range([0, w]);
                yScale.range([h, 0]);
                xAxis.scale(xScale)
                    .ticks(w / 100)
                    .innerTickSize(5);
                yAxis.scale(yScale)
                    .ticks(h / 36)
                    .innerTickSize(5);

                gx.attr('transform', 'translate(0,' + (h + 15) + ')')
                    .call(xAxis);
                gy.attr('transform', 'translate(-15,0)')
                    .call(yAxis);
                svg.attr('width', width).attr('height', height);
                g.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
                    .attr('width', w)
                    .attr('height', h)
                    .selectAll('circle')
                    .data(data)
                    .transition()
                    .duration(1000)
                    .delay(function(d,i){
                        return 100*i
                    })
                    .attr('cx', function (d) {
                        return xScale(d.x)
                    })
                    .attr('cy', function (d) {
                        return yScale(d.y)
                    })
                    .attr('r', function (d) {
                        return d.r
                    });
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
});
