// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'auto', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
			{
		path: '/login/',
    	url: 'login.html',
    	name: 'login',
  		},
			{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		},
		{
		path: '/productos/',
    	url: 'productos.html',
    	name: 'productos',
  		},
		{
		path: '/inicio/',
    	url: 'inicio.html',
    	name: 'inicio',
  		},
		
		{
		path: '/pagina-principal/',
    	url: 'pagina-principal.html',
    	name: 'pagina-principal',
  		},
			
	]
});
// Export selectors engine
var $$ = Dom7;

// Create notification with close button
var notificationWelcome = myApp.notification.create({
  icon: '<i class="material-icons">info</i>',
  title: '¡Bienvenida!',
  subtitle: 'Aplicaciones con framework 7',
  text: 'Alejandra Lucia Ortega',
  closeButton: true,
	closeTimeout: 3000,
});
$$('.open-welcome').on('click', function () {
  notificationWelcome.open();
});
$$('.window').on('load', function () {
  notificationWelcome.open();
});








 

