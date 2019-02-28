function initMap() {
	// add your code here
	L.mapquest.key = 'cJ7qW7hEDsVBqlTKW1UJ3Iblo2lxnX13';
	var map = L.mapquest.map('map',{
		center: [32.8788, -117.2359],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	})
	L.marker([32.8788, -117.2359]).addTo(map);
}