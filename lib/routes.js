
var rootRoutes = FlowRouter.group({
    prifix: '/',
    name: 'rootRoutes',
});

rootRoutes.route('/', {
    name: 'root',
    action() {
        FlowRouter.go('/visitor/welcome');
    },
})



var visitorRoutes = rootRoutes.group({
    prefix: '/visitor',
    name: 'visitorRoutes'
})

visitorRoutes.route('/', {
    name: 'visitor.home',
    action() {
        FlowRouter.go('/visitor/welcome');
        BlazeLayout.render('visitor_layout', { main: 'visitor_home' });
    },
})

visitorRoutes.route('/welcome', {
    name: 'visitor.welcome',
    action() {
        BlazeLayout.render('visitor_layout', { main: 'visitor_welcome' });
    },
})

visitorRoutes.route('/judge', {
    name: 'visitor.judge',
    action() {
        BlazeLayout.render('visitor_layout', { main: 'visitor_judge' });
    },
})

visitorRoutes.route('/vote', {
    name: 'visitor.vote',
    action() {
        BlazeLayout.render('visitor_layout', { main: 'visitor_vote' });
    },
})




var adminRoutes = rootRoutes.group({
    prefix: "/admin",
    name: 'adminRoutes'
});

adminRoutes.route('/', {
    name: 'admin.home',
    action() {
        BlazeLayout.render('admin_layout', { main: 'admin_home' });
    },
});

adminRoutes.route('/login', {
    name: 'admin.login',
    action() {
        BlazeLayout.render('admin_login');
    },
});

adminRoutes.route('/judge', {
    name: 'admin.judge',
    action() {
        BlazeLayout.render('admin_layout', { main: 'admin_judge' });
    },
});

adminRoutes.route('/vote', {
    name: 'admin.vote',
    action() {
        BlazeLayout.render('admin_layout', { main: 'admin_vote' });
    },
});





FlowRouter.notFound = {
    action() {
        BlazeLayout.render('empty_layout', { main: 'page_notFound' });
    },
};