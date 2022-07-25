let DeviceList  = document.getElementById("devices-list")
let DevicesButton = document.getElementById("Devices")
let buyLink = document.getElementById("Buy")

let HomeSection = document.getElementById("home")
let Cards = document.getElementById("cards")

let phoneImage = document.getElementById("phone-image")
let displaySection = document.getElementById("display")
let chipsetSection = document.getElementById("chipset")
let connectionSection = document.getElementById("connection")

let cameraSection = document.getElementById("camera")
let memorySection = document.getElementById("memory")
let freaturesSection = document.getElementById("freatures")


function Home() {
    /* Reset Window */
    displaySection.innerHTML = ""; chipsetSection.innerHTML = "";connectionSection.innerHTML = ""
    cameraSection.innerHTML = "";memorySection.innerHTML = "";freaturesSection.innerHTML = ""; 
    phoneImage.setAttribute("style", "background: none;"); buyLink.innerHTML = "";
    
    DeviceList.classList.add ("device-off")
    DeviceList.classList.remove ("open")
    DevicesButton.setAttribute("style", "default")
    
    /*Home Section */

    HomeSection.innerHTML = `<div id='cards' class='cards'>
        <div class='section1'>
            <div id='card1' class='card' onclick="m52Specs()">Galaxy M52 5G</div> <div id='card2' class='card' onclick="iphone12Specs()">Iphone 12 Pro Max</div>   <div id='card3' onclick="iphone13Specs()" class='card'>Iphone 13 Pro</div>   <div id='card4' onclick="m4proSpecs()" class='card'>Xiaomi Poco M4 Pro 5G</div> 
            <div id='card5' class='card'onclick="s22UltraSpecs()" >Galaxy S22 Ultra</div>   <div id='card6' onclick="x4proSpecs()" class='card'>Xiaomi Poco X4 Pro 5G</div>   <div id='card7' onclick="a52Specs()" class='card'>Galaxy A52</div>
        </div>
    </div>`
}

window.addEventListener("load", () => {
    Home()
    let deviceList = `
    <p onclick="m52Specs()">Galaxy M52 5G</p>
    <p onclick="iphone12Specs()">Iphone 12 Pro Max</p>
    <p onclick="iphone13Specs()">Iphone 13 Pro</p>
    <p onclick="m4proSpecs()">Xiaomi Poco M4 Pro 5G</p>
    <p onclick="s22UltraSpecs()">Galaxy S22 Ultra</p>
    <p onclick="x4proSpecs()">Xiaomi Poco X4 Pro 5G</p>
    <p onclick="a52Specs()">Galaxy A52</p>
    `
    DeviceList.innerHTML = deviceList
})

function OpenMenu() {
    DeviceList.classList.toggle("open")
    DevicesButton.setAttribute("style", "color: var(--background-color-1); border-bottom: 3px solid;border-color: var(--background-color-1);")
}

function deviceClassRemove() {
    DeviceList.classList.remove ("device-off")
}

DeviceList.addEventListener("mouseleave", () => {
    DeviceList.classList.remove("open")
    DevicesButton.setAttribute("style", "default")
})

function m52Specs() {
    deviceClassRemove()
    HomeSection.innerHTML = ""
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
    connectionSection.innerHTML = `<h2>Conexão</h2>
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
    memorySection.innerHTML = `<h2>Armazenamento</h2>
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
    deviceClassRemove()
    HomeSection.innerHTML = ""
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
                                `)
    displaySection.innerHTML = `<h2>Display</h2>
                                 <p>6.7 Polegadas</p>
                                 <p>1284x2778px</p>
                                 <p>Super Retina XDR OLED</p>
                                 <p>60hz</p>
                                `
    chipsetSection.innerHTML = `<h2>Chipset</h2>
                                 <p>Apple A14 Bionic</p>
                                 <p>Apple GPU (4 cores)</p>
                                 <p>2x 3.1Ghz + 4x 1.8Ghz</p>
                                 `
    connectionSection.innerHTML = `<h2>Conexão</h2>
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
    memorySection.innerHTML = `<h2>Armazenamento</h2>
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

function iphone13Specs() {
    deviceClassRemove()
    HomeSection.innerHTML = ""
    buyLink.innerHTML = `<a href="https://www.shoptime.com.br/produto/3919412473?epar=9381&s_term=COMPARADORES&hl=lower&utm_campaign=marca%3Ashop%3Bmidia%3Acomparadores%3Bformato%3A00%3Bsubformato%3A00%3Bidcampanha%3A9381&utm_source=zoom&utm_medium=comparadores&opn=COMPARADORES&utm_content=2e8e61fa62f14d928b22a88b2caac168&franq=2e8e61fa62f14d928b22a88b2caac168&cor=Prateado" target="v_blank">Buy</a>`
    phoneImage.setAttribute("style", `
                                width: 35rem;
                                height:40rem;
                                background: url('assets/iphone13pro/iphone-13.png');
                                background-position-x: -5.6rem;
                                background-size: contain;
                                background-repeat: no-repeat;
                                background-size:cover;
                                background-clip: content-box;
                                margin-left: 1rem;
                                margin-top: -5rem;
                                `)
    displaySection.innerHTML = `<h2>Display</h2>
                                 <p>6.06 Polegadas</p>
                                 <p>1170x2532px</p>
                                 <p>Super Retina XDR OLED</p>
                                 <p>120hz</p>
                                `
    chipsetSection.innerHTML = `<h2>Chipset</h2>
                                 <p>Apple A15 Bionic</p>
                                 <p>Apple GPU (5 cores)</p>
                                 <p>2x 3.22Ghz + 4x 1.82Ghz</p>
                                 `
    connectionSection.innerHTML = `<h2>Conexão</h2>
                                 <p>WIFI 802.11 a/b/g/n/ac/6e</p>
                                 <p>Bluetooth 5.0 com A2DP/LE</p>
                                 `
    cameraSection.innerHTML = `<h2>Camera</h2>
                                    <p>12Mp Traseira / 12Mp Frontal</p>
                                    <p>4000 x 3000 pixel</p>
                                    <p>4K(2160p)/60fps</p>
                                    <p>HDR</p>
                                    <p>Estabilização Ótica/</p>
                                    `
    memorySection.innerHTML = `<h2>Armazenamento</h2>
                                 <p>Até 1000GB ROM</p>
                                 <p>6GB</p>
                                 <p>Sem expansão</p>
                                 `
    freaturesSection.innerHTML = `<h2>Freatures</h2>
                                   <p>Face Detection</p>
                                   <p>Dual Led</p>
                                   <p>Bateria 3095maH</p>
                                   `
    DeviceList.classList.remove("open")
}

function m4proSpecs() {
    deviceClassRemove()
    HomeSection.innerHTML = ""
    buyLink.innerHTML = `<a href="https://www.amazon.com.br/Poco-Smartphone-128GB-Dual-azul/dp/B09LQGJ9LZ">Buy</a>`
    phoneImage.setAttribute("style", `
                                width: 22rem;
                                height:30rem;
                                background: url('assets/m4pro5g/m4pro5g.jpg');
                                background-position-x: 0;
                                background-size: contain;
                                background-repeat: no-repeat;
                                background-size:cover;
                                background-clip: content-box;
                                margin-left: 1rem;
                                margin-top: 4rem;
                                `)
    displaySection.innerHTML = `<h2>Display</h2>
                                 <p>6.6 Polegadas</p>
                                 <p>1080x2400px</p>
                                 <p>IPS LCD</p>
                                 <p>90hz</p>
                                `
    chipsetSection.innerHTML = `<h2>Chipset</h2>
                                 <p>MediaTek Dimensity 810</p>
                                 <p>Mali-g57 MC2</p>
                                 <p>2x 2.4Ghz + 6x 2Ghz</p>
                                 `
    connectionSection.innerHTML = `<h2>Conexão</h2>
                                 <p>WIFI 802.11 a/b/g/n/ac</p>
                                 <p>Bluetooth 5.1 com A2DP/LE</p>
                                 `
    cameraSection.innerHTML = `<h2>Camera</h2>
                                    <p>50Mp + 8MP Traseira / 16Mp Frontal</p>
                                    <p>fullHD(1080p)/60fps</p>
                                    <p>HDR</p>
                                    <p>Estabilização Ótica/</p>
                                    `
    memorySection.innerHTML = `<h2>Armazenamento</h2>
                                 <p>Até 128GB ROM</p>
                                 <p>4GB RAM</p>
                                 <p>MicroSD até 1024GB</p>
                                 `
    freaturesSection.innerHTML = `<h2>Freatures</h2>
                                   <p>Face Detection</p>
                                   <p>Bateria 5000maH</p>
                                   `
    DeviceList.classList.remove("open")
}

function s22UltraSpecs() {
    deviceClassRemove()
    HomeSection.innerHTML = ""
    buyLink.innerHTML = `<a href="https://www.magazineluiza.com.br/smartphone-samsung-galaxy-s22-ultra-256gb-vinho-5g-12gb-ram-68-cam-quadrupla-selfie-40mp/p/234440800/te/s21u/?&force=12&seller_id=magazineluiza" target="v_blank">Buy</a>`
    phoneImage.setAttribute("style", `
                                width: 16rem;
                                height:34rem;
                                background: url('assets/S22Ultra/S22Ultra.jpeg');
                                background-position-x: 0rem;
                                background-size: contain;
                                background-repeat: no-repeat;
                                background-size:cover;
                                background-clip: content-box;
                                margin-left: 2rem;
                                margin-top: 3rem;
                                `)

    displaySection.innerHTML = `<h2>Display</h2>
                                 <p>6.8 Polegadas</p>
                                 <p>1440x3080px</p>
                                 <p>Dynamic AMOLED 2X</p>
                                 <p>120hz</p>
                                `
    chipsetSection.innerHTML = `<h2>Chipset</h2>
                                 <p>Snapdragon 8 Gen1 Qualcomm</p>
                                 <p>Adreno 730</p>
                                 <p>1x3Ghz + 3x2.5Ghz + 4x1.8Ghz</p>
                                 `
    connectionSection.innerHTML = `<h2>Conexão</h2>
                                 <p>WIFI 802.11 a/b/g/n/ac/6</p>
                                 <p>Bluetooth 5.2 A2DP/LE</p>
                                 `
    cameraSection.innerHTML = `<h2>Camera</h2>
                                    <p>108Mp + 12Mp + 2x10Mp / 40Mp</p>
                                    <p>8K/24fps + 4k/60fps</p>
                                    <p>HDR</p>
                                    `
    memorySection.innerHTML = `<h2>Armazenamento</h2>
                                 <p>Max 512GB ROM</p>
                                 <p>12GB RAM</p>
                                 <p>Não expande</p>
                                 `
    freaturesSection.innerHTML = `<h2>Freatures</h2>
                                   <p>Face Detection</p>
                                   <p>Bateria 5000maH</p>
                                   `
    DeviceList.classList.remove("open")                              
}

function a52Specs() {
    deviceClassRemove()
    HomeSection.innerHTML = ""
    buyLink.innerHTML = `<a href="https://www.fastshop.com.br/web/p/d/SGSMA525VLT_PRD/samsung-galaxy-a52-violeta-128gb-sm-a525mlvgzto-fast?partner=parceiro-comparador&utm_source=com_zoom&utm_medium=com&utm_campaign=PREMIUM&utm_term=SGSMA525VLT_PRD&cm_mmc=com_zoom-_-PREMIUM-_-ND-_-SGSMA525VLT_PRD&utm_content=cfc446405923492d998f268ed9f750f1" target="v_blank">Buy</a>`
    phoneImage.setAttribute("style", `
                                width: 26rem;
                                height:30rem;
                                background: url('assets/A52/A52.png');
                                background-position-x: 0rem;
                                background-size: contain;
                                background-repeat: no-repeat;
                                background-size:cover;
                                background-clip: content-box;
                                margin-left: -1rem;
                                margin-top: 3rem;
                                `)
    displaySection.innerHTML = `<h2>Display</h2>
                                 <p>6.5 Polegadas</p>
                                 <p>1080x2400px</p>
                                 <p>Super AMOLED</p>
                                 <p>90hz</p>
                                `
    chipsetSection.innerHTML = `<h2>Chipset</h2>
                                 <p>Snapdragon 720G</p>
                                 <p>Adreno 618</p>
                                 <p>2x 2.3Ghz + 6x 1.8Ghz</p>
                                 `
    connectionSection.innerHTML = `<h2>Conexão</h2>
                                 <p>WIFI 802.11 a/b/g/n/ac/</p>
                                 <p>Bluetooth 5.0 com A2DP/LE</p>
                                 `
    cameraSection.innerHTML = `<h2>Camera</h2>
                                    <p>64Mp + 12Mp + 2x5Mp / 32Mp</p>
                                    <p>4K(2160p)/30fps</p>
                                    <p>HDR</p>
                                    `
    memorySection.innerHTML = `<h2>Armazenamento</h2>
                                 <p>128GB ROM</p>
                                 <p>6GB RAM</p>
                                 <p>Max 1024Gb</p>
                                 `
    freaturesSection.innerHTML = `<h2>Freatures</h2>
                                   <p>Face Detection</p>
                                   <p>Bateria 4500maH</p>
                                   `
    DeviceList.classList.remove("open")                              
}

function x4proSpecs() {
    deviceClassRemove()
    HomeSection.innerHTML = ""
    buyLink.innerHTML = `<a href="https://www.amazon.com.br/Smartphone-Xiaomi-X4-Pro-5G/dp/B09TD7B23K/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=TD7FGFD896OV&keywords=poco+x4+pro&qid=1652814925&s=electronics&sprefix=poco+x4+por%2Celectronics%2C242&sr=1-1&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147" target="v_blank">Buy</a>`
    phoneImage.setAttribute("style", `
                                width: 26rem;
                                height:30rem;
                                background: url('assets/x4pro/x4pro.jpg');
                                background-position-x: -.5rem;
                                background-size: contain;
                                background-repeat: no-repeat;
                                background-size:cover;
                                background-clip: content-box;
                                margin-left: -2rem;
                                margin-top: 3rem;
                                `)
    displaySection.innerHTML = `<h2>Display</h2>
                                 <p>6.67 Polegadas</p>
                                 <p>1080x2400px</p>
                                 <p>AMOLED</p>
                                 <p>120hz</p>
                                `
    chipsetSection.innerHTML = `<h2>Chipset</h2>
                                 <p>Snapdragon 695</p>
                                 <p>Adreno 619</p>
                                 <p>2x 2.2Ghz + 6x 1.7Ghz</p>
                                 `
    connectionSection.innerHTML = `<h2>Conexão</h2>
                                 <p>WIFI 802.11 a/b/g/n/ac/</p>
                                 <p>Bluetooth 5.1 com A2DP/LE</p>
                                 <p>2500mbps / 1500mbps</p>
                                 `
    cameraSection.innerHTML = `<h2>Camera</h2>
                                    <p>108Mp + 8Mp + 2Mp / 16Mp</p>
                                    <p>1080p/30fps</p>
                                    <p>HDR</p>
                                    `
    memorySection.innerHTML = `<h2>Armazenamento</h2>
                                 <p>128GB ROM</p>
                                 <p>6GB RAM</p>
                                 <p>Max 1024Gb</p>
                                 `
    freaturesSection.innerHTML = `<h2>Freatures</h2>
                                   <p>Face Detection</p>
                                   <p>Bateria 5000maH</p>
                                   `
    DeviceList.classList.remove("open")                              
}
