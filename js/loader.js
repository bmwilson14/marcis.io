(function ($, window, document, undefined) {
    $(function () {
      var introTimeoutComplete,
        minIntroMs = 4000;

        function showLoader() {
          $('.loader-block-phase-02').addClass('intro');
          var timerPulse = setTimeout(function() {
            $('.loader-block-phase-02')
              .removeClass('intro')
              .addClass('pulse');
            clearTimeout(timerPulse);
            // Start pulse
            var introTimeout = setTimeout(function() {
              introTimeoutComplete = true;
              hideLoader();
              clearTimeout(introTimeout);
            }, minIntroMs);
          }, 1500);
        }

      function hideLoader() {
        // If minimum into time req not met, don't run
        if (!introTimeoutComplete) {
          return;
        }
        // End pulse, explode loader
        $('.loader-block-phase-02')
          .removeClass('pulse')
          .addClass('explode');
        // Set timer for reveal of bg
        var timerImplode = setTimeout(function() {
            $('.loader-block-phase-01, .loader-block-phase-02')
              .addClass('hidden');
            $('.loader-block-phase-03')
              .addClass('implode');
            clearTimeout(timerImplode);
          }, 300);
          var timerRemove = setTimeout(function() {
            $('.loader-blocks').remove();
            $('body').addClass('bw-app-loaded');
            clearTimeout(timerRemove);
          }, 650);
      }

      showLoader();
     });
})(jQuery, window, document);
