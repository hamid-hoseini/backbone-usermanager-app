/**
 * Created by hamidhoseini on 10/14/15.
 */
var Router = Backbone.Router.extend({
    routes: {
        '' : 'home',
        'new': 'editUser',
        'edit/:id' : 'editUser'
    }
});
var router = new Router();
router.on('route:home', function () {
    console.log('home page has loaded...!');
    userList.render();
});
router.on('route:editUser', function (id) {
    console.log('page of new user has loaded...!');
    editUser.render({id: id});
});
Backbone.history.start();