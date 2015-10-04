/**
 * Created by Chenghuijin on 2015/9/16.
 */
//var app = angular.module('myFilters', []);
app.filter('filterForHash', function () {
    return function (items, searchText) {
        if (searchText === undefined)searchText = "";
        var filtered = [];
        angular.forEach(items, function (item) {
            if (item.data.select.indexOf(searchText) !== -1) filtered.push(item);
        });
        return filtered;
    }
});
app.filter('startFrom', function () {
    return function (input, start) {
        if (input.length) {
            start = +start; //parse to int
            return input.slice(start);
        }
    }
});
//<tr ng-repeat="x in ingredients | filter:query | filter:class | startFrom:currentPage*pageSize | limitTo:pageSize">
app.filter('name', function () {
    return function (input, scope) {
        if (input != null) {
            input = input.toLowerCase();
            return input.substring(0, 1).toUpperCase() + input.substring(1);
        }
    }
});
app.filter('formatCurrency', function () {
    return function (input) {
        input = input || 0;
        if (typeof input === 'string') {
            input = input.split(',').join('');
        }
        var output = Number(input).toFixed(0).replace(/\d(?=(\d{3})+\.)/g, '$&,').toString();
        return "$" + output;
    }
});