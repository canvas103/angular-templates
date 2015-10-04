/**
 * Created by Chenghuijin on 2015/9/24.
 */
app.directive('ssn',function(){
    var SSN_REGEXP = /^\d{4}-\d{2}-\d{4}$/;
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            if (ctrl) {
                ctrl.$validators.ssn = function (modelValue) {
                    return ctrl.$isEmpty(modelValue) || SSN_REGEXP.test(modelValue);
                };
            }
        }
    };
});
app.directive('formatNumber', function () {
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            if (!ctrl) return;
            ctrl.$formatters.unshift(function (a) {
                if(a){
                    return a.replace(/\D/g, '');}
            });
            ctrl.$parsers.unshift(function (viewValue) {
                var plainNumber = viewValue.replace(/\D/g, '');
                elem.val(plainNumber);
                return Number(plainNumber);
            });
        }
    };
});