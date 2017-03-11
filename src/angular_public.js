import _ from 'lodash';
import setupModuleLoader from 'loader';
import filter from 'filter';
import parse from 'parse';
import scope from 'scope';
import {$QProvider, $$QProvider} from 'q';

export default function publishExternalAPI() {
    setupModuleLoader(window);

    let ngModule = window.angular.module('ng', []);
    ngModule.provider('$filter', filter);
    ngModule.provider('$parse', parse);
    ngModule.provider('$rootScope', scope);
    ngModule.provider('$q', $QProvider);
    ngModule.provider('$$q', $$QProvider);
}