(function(angular) {
    'use strict';
    
    angular
        .module('app')
        .component('pdf', {
            template: '<iframe src="{{vm.url}}"></iframe>',
            controller: Controller,
            controllerAs: 'vm',
        });
    
    Controller.$inject = ['$window', '$sce'];
    
    function Controller($window, $sce) {
        var vm, encodedOptions;
        
        vm = this;
        encodedOptions = encodeOptions([{ name: 'zoom', value: 'auto' }, { name: 'pagemode', value: 'thumbs' }]);
        
        vm.url = $sce.trustAsUrl('pdf/web/viewer.html?file=' + encode('/assets/newsletter.pdf') +
                    '&cacheBusting=' + encode(Date.now().toString()) +
                    encodedOptions);
        
        function encodeOptions(options) {
            var encoded, index, max, value;
            
            encoded = '';
            
            if(angular.isArray(options))
            {
                 for(index = 0, max = options.length; index < max; index++) {
                     value = encodeOption(options[index]);
                     
                     if(value) {
                        encoded += (encoded ? '&' : '#') + value;
                     }
                }
            }
            
            return encoded;
        }
        
        function encodeOption(option) {
            if(angular.isObject(option)) {
                if(option.name && option.value) {
                    return encode(option.name) + '=' + encode(option.value)
                }
            }
            
            return '';
        }
        
        function encode(value) {
            return $window.encodeURIComponent(value);
        }
    }
    
}(this.angular))