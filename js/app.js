App = Ember.Application.create();

App.Router.map(function() {
	this.resource('touch');
});

App.IndexRoute = Ember.Route.extend ({
	redirect: function() {
		this.transitionTo('touch');
	}
});

App.TouchView = Ember.View.extend({
	
	templateName: 'touch',

    wireTouch: function () {
    	
    	if (this.inDom) {

            Hammer($('.menu-btn').on("tap", function() {
                $('aside').addClass('active-menu');
            }));

            Hammer($('aside').on('swipeleft', function () {
                $('aside').removeClass('active-menu');
            }));

            var $leftie = $('.left');
            var $rightie = $('.right');


            for (var i=0;i<$leftie.length;i++) { 
                
                Hammer($leftie[i]).on("swipeleft", function() {
                    alert('swiped left ');
                });

            }

            for (var i=0;i<$rightie.length;i++) { 

                Hammer($rightie[i]).on("swiperight", function() {
                    alert('swiped right');
                });

            }

    		console.log('wireTouch körs och inDom är true');

    	} else {

			console.log('wireTouch körs, men inDom är false');

    	}
    },

	didInsertElement: function() {
        this.inDom = true;
        this.wireTouch();
    }
})

