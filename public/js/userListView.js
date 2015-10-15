/**
 * Created by hamidhoseini on 10/14/15.
 */
var UserList = Backbone.View.extend({
    el : '.page',
    render : function () {
        var users = new Users();
        var that = this;
        users.fetch({
            success: function (users) {
                var template = _.template($('#user-list-template').html());
                that.$el.html(template({data: users.models}));
            }
        })
    }
});
var userList = new UserList();