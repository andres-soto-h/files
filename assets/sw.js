const cacheName = 'pwa-conf-v1.05';

const staticAssets = [
    '../images/banner1.jpg',
    '../images/documento.svg',
    '../images/favicon.png',
    '../images/google-logo.png',
    '../images/icon-512x512.png',
    '../images/in-progress-pana.svg',
    '../images/loading.gif',
    '../images/logo-ge-gris.png',
    '../images/logo-ge.png',
    '../images/logo-mb.png',
    '../images/logo-mi-banco.png',
    '../images/markerAgencias.png',
    '../images/seguridad.svg',
    '../images/user.png',
    '../images/cartas/footer-cartas.jpg',
    '../images/cartas/header_cartas.svg',
    '../images/cartas/logo-mibanco.jpg',
    '../images/cartas/vigilado-super.png',
    '../stylesheets/fontwasome.all.css',
    '../stylesheets/sb-admin-2.css',
    '../stylesheets/style.css',
    '../javascripts/admin.js',
    '../javascripts/cartaspdf.js',
    '../javascripts/gestiones.js',
    '../javascripts/html2canvas.min.js',
    '../javascripts/indicadores-inicio.js',
    '../javascripts/indicadores.js',
    '../javascripts/jquery.binarytransport.js',
    '../javascripts/jspdf.min.js',
    '../javascripts/leads.js',
    '../javascripts/main.js',
    '../javascripts/mora.js',
    '../javascripts/plan.js',
    '../vendor/bootstrap/bootstrap.min.css',
    '../vendor/bootstrap/bootstrap.min.js',
    '../vendor/bootstrap/jquery-3.5.1.min.js',
    '../vendor/bootstrap/jquery-ui.min.js',
    '../vendor/data-tables/datatables.min.css',
    '../vendor/data-tables/datatables.min.js',
    '../vendor/data-tables/datetime-moment.js',
    '../vendor/data-tables/pdfmake.min.js',
    '../vendor/data-tables/Spanish.json',
    '../vendor/data-tables/vfs_fonts.js',
    '../vendor/sweetalert/sweetalert2.css',
    '../vendor/sweetalert/sweetalert2.js',
    '../vendor/chart.js/Chart.min.js',
    '../webfonts/fa-solid-900.woff2',
    '../webfonts/fa-regular-400.woff2'
];

self.addEventListener('install', async event => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
    const req = event.request;
    event.respondWith(cacheFirst(req));
});

async function cacheFirst(req) {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(req);
    return cachedResponse || fetch(req);
}
