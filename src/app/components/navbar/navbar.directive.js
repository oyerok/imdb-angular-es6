export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor () {
    'ngInject';

    // "this.creationDate" is available by directive option "bindToController: true"
    //this.relativeDate = moment(this.creationDate).fromNow();
  }
}
