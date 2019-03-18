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
		path: '/index/',
    	url: 'index.html',
    	name: 'index',
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
        {
		path: '/basicos/',
    	url: 'basicos.html',
    	name: 'basicos',
  		},
        {
		path: '/saludables/',
    	url: 'saludables.html',
    	name: 'saludables',
  		},

                {
		path: '/cuidado/',
    	url: 'cuidado.html',
    	name: 'cuidado',
  		},
       
         {
		path: '/carnes/',
    	url: 'carnes.html',
    	name: 'carnes',
  		},
        {
		path: '/embutidos/',
    	url: 'embutidos.html',
    	name: 'embutidos',
  		},
    
        {
		path: '/jugos/',
    	url: 'jugos.html',
    	name: 'jugos',
  		},

        {
		path: '/sodas/',
    	url: 'sodas.html',
    	name: 'sodas',
  		},

         {
		path: '/panaderia/',
    	url: 'panaderia.html',
    	name: 'panaderia',
  		},

         {
		path: '/lechesula/',
    	url: 'lechesula.html',
    	name: 'lechesula',
  		},

        {
		path: '/pastas/',
    	url: 'pastas.html',
    	name: 'pastas',
  		},

        {
		path: '/shampoo/',
    	url: 'shampoo.html',
    	name: 'shampoo',
  		},

        {
		path: '/salchicha/',
    	url: 'salchicha.html',
    	name: 'salchicha',
  		},

        {
		path: '/pina/',
    	url: 'pina.html',
    	name: 'pina',
  		},
                
                {
		path: '/coca-cola/',
    	url: 'coca-cola.html',
    	name: 'coca-cola',
  		},

        {
		path: '/tilapia/',
    	url: 'tilapia.html',
    	name: 'tilapia',
  		},

        {
		path: '/pan-integral/',
    	url: 'pan-integral.html',
    	name: 'pan-integral',
  		},
		
         {
		path: '/espagueti/',
    	url: 'espagueti.html',
    	name: 'espagueti',
  		},
			
        {
		path: '/arroz/',
    	url: 'arroz.html',
    	name: 'arroz',
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








 

