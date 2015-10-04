app.controller('dashboardController', function ($scope) {
    $scope.chartDoughnut = {
        labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
        data: [300, 500, 100, 40, 120],
        type: 'Doughnut',
        types: ["Doughnut", "Pie", "PolarArea"]
    };
    $scope.chartLine = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        series: ['Series A', 'Series B'],
        data: [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ],
        types: ["Line", "Bar", "Radar"],
        type: "Line"
    };
    $scope.nvd3Line = {
        state: [false, false, false],
        data: (function sinAndCos() {
            var sin = [], sin2 = [],
                cos = [];

            //Data is represented as an array of {x,y} pairs.
            for (var i = 0; i < 100; i++) {
                sin.push({x: i, y: Math.sin(i / 10)});
                sin2.push({x: i, y: i % 10 == 5 ? null : Math.sin(i / 10) * 0.25 + 0.5});
                cos.push({x: i, y: .5 * Math.cos(i / 10 + 2) + Math.random() / 10});
            }

            //Line chart data should be sent as an array of series objects.
            return [
                {
                    values: sin,      //values - represents the array of {x,y} data points
                    key: 'Sine Wave', //key  - the name of the series.
                    color: '#ff7f0e'  //color - optional: choose your own line color.
                },
                {
                    values: cos,
                    key: 'Cosine Wave',
                    color: '#2ca02c'
                },
                {
                    values: sin2,
                    key: 'Another sine wave',
                    color: '#7777ff',
                    area: true      //area - set to true if you want this line to turn into a filled area chart.
                }
            ];
        })(),
        options: {
            chart: {
                type: 'lineChart',
                types: ['lineChart', 'multiBarChart'],
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 70,
                    left: 55
                },
                useInteractiveGuideline: true,
                interactiveLayer: {
                    dispatch: {
                        elementMousemove: function (t) {
                            $scope.nvd3Pie.show = true;
                            $scope.index = Math.round(t.pointXValue);
                            $scope.detail();
                        }
                    },
                    tooltip: {
                        enabled: false
                    }
                },
                tooltip: {
                    contentGenerator: function (obj) {
                        $scope.index = obj.index;
                        $scope.detail();
                    },
                    enable: true
                },
                //tooltips:false,
                dispatch: {
                    stateChange: function (e) {
                        $scope.nvd3Line.state = e.disabled;
                        $scope.detail();
                    },
                    tooltipShow:function(e){
                        console.log(e);
                    },
                    elementMouseover:function(e){
                        console.log(e);
                    }
                },
                yAxis: {
                    tickFormat: function (d) {
                        return d3.format('.2f')(d);
                    }
                },
                callback: function (chart) {
                    console.log("!!! lineChart callback !!!");
                }

            }
        }
    };

    $scope.index = 0;
    $scope.nvd3Pie = {
        show: true,
        data: [],
        options: {
            chart: {
                type: 'pieChart',
                height: 400,
                x: function (d) {
                    return d.key;
                },
                y: function (d) {
                    return d.y;
                },
                showLabels: true,
                labelType: function (d, i, l) {
                    return l.key + ":" + d3.format(",.2f")(l.value) +
                        " (" + d3.format(".2%")(l.percent) + ")"
                },
                labelsOutside: true,
                growOnHover: false,
                transitionDuration: 500,
                labelThreshold: 0.01,
                legend: {
                    margin: {
                        top: 5,
                        right: 130,
                        bottom: 5,
                        left: 60
                    }
                },
                color: ['#ff7f0e', '#2ca02c', '#7777ff']
            }
        }
    };
    $scope.detail = function () {
        $scope.nvd3Pie.data = [
            {
                key: "Sine",
                y: Math.abs($scope.nvd3Line.data[0].values[$scope.index].y),
                disabled: $scope.nvd3Line.state[0]
            },
            {
                key: "Cosine",
                y: Math.abs($scope.nvd3Line.data[1].values[$scope.index].y),
                disabled: $scope.nvd3Line.state[1]
            },
            {
                key: "Another Sine",
                y: Math.abs($scope.nvd3Line.data[2].values[$scope.index].y),
                disabled: $scope.nvd3Line.state[2]
            }];
        $scope.$digest();
    }
});
