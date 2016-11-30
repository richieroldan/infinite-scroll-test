FlowRouter.route('/', {
    action: function(params) {
        BlazeLayout.render('app');
    },
});

FlowRouter.route('/another', {
    action: function(params) {
        BlazeLayout.render('another');
    },
});
