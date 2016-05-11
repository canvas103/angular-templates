/**
 * Created by chenghui on 5/9/2016.
 */
import './../styles/myStyles.scss'
import angular from 'angular';
import uirouter from 'angular-ui-router';

if (ON_TEST) {
    require('angular-mocks/angular-mocks');
}
import configRoutes from './routes'
import registerControllers from './controllers'
import registerDirectives from './directives';
import registerServices from './services';

const ngModule = angular.module('myApp', [uirouter]);
configRoutes(ngModule);
registerDirectives(ngModule);
registerControllers(ngModule);
registerServices(ngModule);