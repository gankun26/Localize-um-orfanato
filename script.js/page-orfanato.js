//mapa
const map = L.map('mapid').setView([-23.016870, -43.466680], 15);


//tilelear
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


//icone
const icon = L.icon({
    iconUrl:"./imagens/logomapa.svg",
    iconSize:[58, 68],
    iconAnchor:[29, 68],
    popupAnchor:[170, 2]
})

//creat popup
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeigth: 240,

}).setContent('Lar das meninas <a href="orfanatos.html?id=1" class="choose-orfanato"> <img src="./imagens/Arrow.svg"> </a>')


//creat and add maker
L.marker([-23.016870, -43.466680], {icon})
    .addTo(map)
    .bindPopup(popup)
    