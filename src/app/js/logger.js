(function () {
  var app = angular.module('Workshop').provider('logEnhancer', function () {
    this.loggingPattern = '%s - %s: ';

    this.$get = function () {
      var loggingPattern = this.loggingPattern;
      return {
        enhanceAngularLog: function ($log) {
          $log.enabledContexts = [];

          $log.getInstance = function (context) {
            return {
              log: enhanceLogging($log.log, context, loggingPattern),
              info: enhanceLogging($log.info, context, loggingPattern),
              warn: enhanceLogging($log.warn, context, loggingPattern),
              debug: enhanceLogging($log.debug, context, loggingPattern),
              error: enhanceLogging($log.error, context, loggingPattern),
              enableLogging: function (enable) {
                $log.enabledContexts[context] = enable;
              }
            };
          };

          function enhanceLogging(loggingFunc, context, loggingPattern) {
            return function () {
              var contextEnabled = $log.enabledContexts[context];
              if (contextEnabled === undefined || contextEnabled) {
                var modifiedArguments = [].slice.call(arguments);
                modifiedArguments[0] = [sprintf(loggingPattern, moment().format("dddd h:mm:ss a"), context)] + modifiedArguments[0];
                loggingFunc.apply(null, modifiedArguments);
              }
            };
          }
        }
      };
    };
  });


  app.config(['logEnhancerProvider', function (logEnhancerProvider) {
    logEnhancerProvider.loggingPattern = '%s::[%s]> ';
  }]);

  app.run(['$log', 'logEnhancer', function ($log, logEnhancer) {
    logEnhancer.enhanceAngularLog($log);
  }]);

  app.controller('LogTestCtrl', function ($log) {
    var notMutedLogger = $log.getInstance('Not Muted');
    var mutedLogger = $log.getInstance('Muted');

    mutedLogger.enableLogging(false);

    this.doTest = function () {
      notMutedLogger.info("This *will* appear in your console");
      mutedLogger.info("This will *not* appear in your console");
    }
  });

}());
