const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWeelZomm: false,
    zoomControl: false
}

//mapa
const map = L.map('mapid', options).setView([-23.016870, -43.466680], 15);


//tilelear
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


//icone
const icon = L.icon({
    iconUrl:"./imagens/logomapa.svg",
    iconSize:[58, 68],
    iconAnchor:[29, 68],
    popupAnchor:[170, 2]
})



//creat and add maker
L.marker([-23.016870, -43.466680], {icon})
    .addTo(map)

function selectImage(event){
    const button = event.currentTarget

    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
       button.classList.remove("active")
    }
    
    const image = button.children[0]
    const imageContainer = document.querySelector(".orfanato2-detalhes > img")

    imageContainer.src = image.src

    button.classList.add('active')
}    
    
    