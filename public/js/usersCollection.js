/**
 * Created by hamidhoseini on 10/14/15.
 */

$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
    options.url = 'http://backbone-beginner.herokuapp.com' + options.url;
});

var Users = Backbone.Collection.extend({
    url: '/users'
});