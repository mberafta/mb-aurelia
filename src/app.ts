import { Router, RouterConfiguration } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

export class App {
  public message: string = 'Hello World!';

  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Contacts';
    config.map([
      {
        route: '',
        moduleId: PLATFORM.moduleName('./components/home/home'), title: 'Home page'
      },
      {
        route:'users',
        moduleId: PLATFORM.moduleName('./components/user/user-list'), title:'User page',
        name:'users'
      },
      {
        route:'user/:id',
        moduleId: PLATFORM.moduleName('./components/user/user-detail'), name:'user'
      }
    ]);

    this.router = router;
  }

}
