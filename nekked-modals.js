app.directive('myModal', function() {
  return {
    replace: true,
    restrict: 'E',
    transclude: true,
    scope: {
      toggle: '=',
      modalName: '@',
      modalTitle: '@'
    },
    template:
      "<div class='ng-modal' ng-show='toggle'>" +
        "<div class='ng-modal-overlay' ng-click='toggleModal(modalName)'></div>" +
        "<div class='ng-modal-dialog' ng-style='modalStyle'>" +
          "<div class='ng-modal-close' ng-click='toggleModal(modalName)'></div>" +
          "<h2 class='title'>{{modalTitle}}</h2>" +
          "<div class='ng-modal-dialog-content' ng-transclude></div>" +
        "</div>" +
      "</div>"
    ,
    link: function(scope, element, attrs) {
      // styles
      scope.modalStyle = {};
      if(attrs.width) {
        scope.modalStyle['width'] = attrs.width + 'px';
        scope.modalStyle['margin-left'] = -(attrs.width / 2).toString() + 'px';
      }
      attrs.top ? scope.modalStyle.top = attrs.top + '%' : null;

      // toggle
      scope.$on('toggle-modal', function(event, broadcasted_name) {
        if(scope.modalName == broadcasted_name) {
          scope.toggle = !scope.toggle;
        }
      })
      scope.toggleModal = function(name) {
        if(scope.modalName == name) {
          scope.toggle = !scope.toggle;
        }
      }
    }
  }
});
