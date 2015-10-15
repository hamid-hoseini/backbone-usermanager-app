/**
 * Created by hamidhoseini on 10/14/15.
 */
var EditUser = Backbone.View.extend({
    el : '.page',
    events: {
        'submit .edit-user-form': 'saveUser',
        'click .delete': 'deleteUser'
    },
    saveUser: function (ev) {
        var userDetails = $(ev.currentTarget).serializeObject();
        console.log($(ev.currentTarget));
        var user = new User();
        user.save(userDetails, {
            success : function (user) {
                router.navigate('', {trigger: true});
            }
        });
        return false;
    },
    deleteUser: function (ev) {
        this.user.destroy({
            success: function () {
                console.log('destroyed');
                router.navigate('', {trigger:true});
            }
        });
        return false;
    },
    render : function (option) {
        var that = this;
        if (option.id){
            that.user = new User({id: option.id});
            that.user.fetch({
                success : function (user) {
                    var template = _.template($('#edit-user-template').html());
                    that.$el.html(template({user: user}));
                }
            }); 
        } else {
            var template = _.template($('#edit-user-template').html());
            that.$el.html(template({user : null}));
        }

    }
});

$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

var editUser = new EditUser();