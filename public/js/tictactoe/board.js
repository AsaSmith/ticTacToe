angular.module('bewd.tictactoe.board', []);

angular.module('bewd.tictactoe.board').
  controller('boardCtrl', function() {
    this.makeYourMove = function makeYourMove() {
      this.theboard[2][2] = 'Y';
    };
  }).
  directive('ticTacToeboard', function() {
    return {
      scope: {
        theboard: '='
      },
      restrict: 'E',
      templateUrl: '/public/tmpls/board.html',
      controller: 'boardCtrl',
      controllerAs: 'vm',
      bindToController: true
    };
  });

angular.module('bewd.tictactoe.board').
  factory('boardService', ['$http', function($http) {
    return {
      getboards: function() {
        return $http.get('/games').
          then(function(response) {
            return response.data;
          });
      },
      getboard: function(id) {
        return $http.get('/games/' + id).
          then(function(response) {
            return response.data;
          });
      },
      updateboard: function(id, board) {
        return $http.put('/games/' + id, { board: board }).
          then(function(response) {
            return response.data;
          });
      }
    };
  }]).
  controller('boardsController', boardsController);

  boardsController.$inject = ['boardService', '$interval', '$log'];
  function boardsController(boardService, $interval, $log) {
    var vm = this;

    var boardRefresher;
    vm.selectboard = function selectboard(board) {
      vm.selectedboard = board;

      if (boardRefresher) {
        $interval.cancel(boardRefresher);
      }
      boardRefresher = $interval(function() {
        boardService.getboard(board.id).then(function(b) {
          vm.selectedboard = b;
        })
      }, 1000);
    };

    function loadboards() {
      boardService.getboards().then(function(boards) {
        $log.debug("boards response is ", boards);
        vm.boards = boards;
      });
    }

    loadboards();
    $interval(loadboards, 10000);
  }
