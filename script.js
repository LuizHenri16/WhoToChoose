let DeviceList  = document.getElementById("devices-list")
let DevicesButton = document.getElementById("Devices")



let displaySection = document.getElementById("display")
let chipsetSection = document.getElementById("chipset")
let conectSection = document.getElementById("conexão")

let cameraSection = document.getElementById("camera")
let memoriaSection = document.getElementById("memoria")
let freaturesSection = document.getElementById("freatures")
let buyLink = document.getElementById("Buy")
let phoneImage = document.getElementById("phone-image")

function OpenMenu() {
    DeviceList.classList.toggle("open")
    DevicesButton.setAttribute("style", "color: #6ca59a; border-bottom: 3px solid;border-color: #6ca59a;")
    
}

DeviceList.addEventListener("mouseleave", () => {
    DeviceList.classList.remove("open")
    DevicesButton.setAttribute("style", "default")
})


function m52Specs() {

    buyLink.innerHTML = `<a href="https://shop.samsung.com/br/galaxy-m52-5g/p?utm_source=google&utm_medium=ppc&utm_campaign=br_pd_ppc_google_galaxy-m52_ecommerce_cad1-a4422_text_opn-upb_paid-cdm-$none$-samsung%20m52&utm_content=none&utm_term=samsung%20m52&cid=br_pd_ppc_google_galaxy-m52_ecommerce_cad1-a4422_text_opn-upb_paid-cdm-$none$-samsung%20m52&keeplink=true" target="v_blank">Buy</a>`

    phoneImage.setAttribute("style", ` 
                                    width: 30rem;
                                    height:35rem;
                                    background: url('assets/m52-5g/m52.svg');
                                    background-position-x: -8.6rem;
                                    background-size: contain;
                                    background-repeat: no-repeat;
                                    background-size:cover;
                                    background-clip: content-box;
                                    margin-left: -2rem;
                                    margin-top: 2rem;
                                    transition:.5s;
                                     `)
    
   displaySection.innerHTML = `<h2>Display</h2>
                               <p>6.7 Polegadas</p>
                               <p>1080x2400px</p>
                               <p>super AMOLED plus</p>
                               <p>120hz</p>
                               `
    chipsetSection.innerHTML = `<h2>Chipset</h2>
                                <p>Snapdragon 778G Qualcomm</p>
                                <p>Adreno 642L</p>
                                <p>8 Core
                                   2.1 GHZ</p>
                                `
    conectSection.innerHTML = `<h2>Conexão</h2>
                                <p>WIFI 802.11 a/b/g/n/ac/6</p>
                                <p>Bluetooth 5.0 com A2DP/LE</p>
                                <p>3700 Mbps / 2900 Mbps</p>
                                `
    cameraSection.innerHTML = `<h2>Camera</h2>
                                   <p>64Mp Traseira / 32Mp Frontal</p>
                                   <p>4K/30fps</p>
                                   <p>HDR</p>
                                   <p>Estabilizador</p>
                                   `
    memoriaSection.innerHTML = `<h2>Armazenamento</h2>
                                <p>128GB ROM</p>
                                <p>max 1028GB</p>
                                <p>6GB+4 RAM</p>
                                `
    freaturesSection.innerHTML = `<h2>Freatures</h2>
                                  <p>Face Detection</p>
                                  <p>Impressão Digital</p>
                                  <p>Bateria 5000maH</p>
                                  `

    DeviceList.classList.remove("open")

    
}

function iphone12Specs() {
    buyLink.innerHTML = `<a href="https://www.pontofrio.com.br/iphone-12-pro-max-apple-128gb-grafite-tela-de-67-camera-tripla-de-12mp-ios-55014507/p/55014507?utm_medium=comparadorpreco&utm_source=zoom&utm_content=55014507&pid=zoom_int&c=zoomCPA&cm_mmc=zoom_XML-_-TELE-_-Comparador-_-55014507&idLojista=16&tipoLojista=1P&utm_campaign=4ad633a7534b4e38b9bc72b394c21d07" target="v_blank">Buy</a>`
    phoneImage.setAttribute("style", `
                                width: 30rem;
                                height:35rem;
                                background: url('assets/iphone12proMax/iphone12promax.png');
                                background-position-x: -5.6rem;
                                background-size: contain;
                                background-repeat: no-repeat;
                                background-size:cover;
                                background-clip: content-box;
                                margin-left: 1rem;
                                margin-top: 2rem;
                                transition:.5s;
                                `)

    displaySection.innerHTML = `<h2>Display</h2>
                                 <p>6.7 Polegadas</p>
                                 <p>1284x2778px</p>
                                 <p>Super Retina XDR OLED</p>
                                 <p>60hz</p>
                                `
    chipsetSection.innerHTML = `<h2>Chipset</h2>
                                 <p>Apple A14 Bionic</p>
                                 <p>Adreno 642L</p>
                                 <p>2x 3.1Ghz + 4x 1.8Ghz</p>
                                 `
    conectSection.innerHTML = `<h2>Conexão</h2>
                                 <p>WIFI 802.11 a/b/g/n/ac/6</p>
                                 <p>Bluetooth 5.0 com A2DP/LE</p>
                                 `
    cameraSection.innerHTML = `<h2>Camera</h2>
                                    <p>12Mp Traseira / 12Mp Frontal</p>
                                    <p>4000 x 3000 pixel</p>
                                    <p>4K(2160p)/60fps</p>
                                    <p>HDR</p>
                                    <p>Estabilização Ótica/</p>
                                    `
    memoriaSection.innerHTML = `<h2>Armazenamento</h2>
                                 <p>512GB ROM</p>
                                 <p>6GB</p>
                                 <p>Sem expansão</p>
                                 `
    freaturesSection.innerHTML = `<h2>Freatures</h2>
                                   <p>Face Detection</p>
                                   <p>Impressão Digital</p>
                                   <p>Bateria 3690maH</p>
                                   `

    DeviceList.classList.remove("open")                              


}