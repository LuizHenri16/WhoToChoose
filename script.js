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
    /* Reset Window > Retira os elementos do body "zerando a página"*/
    displaySection.innerHTML = ""; chipsetSection.innerHTML = "";connectionSection.innerHTML = ""
    cameraSection.innerHTML = "";memorySection.innerHTML = "";freaturesSection.innerHTML = ""; 
    phoneImage.setAttribute("style", "background: none;"); buyLink.innerHTML = "";
    
    DeviceList.classList.add ("device-off")
    DeviceList.classList.remove ("open")
    DevicesButton.setAttribute("style", "default")
    
    /*Home Section > Preenche o body novamente com as tags para fazer a home*/
    HomeSection.innerHTML = `<div id='cards' class='cards'>
        <div class='section1'>
            <div id='card1' class='card' onclick="deviceSpecsFunctions[0]()">Galaxy M52 5G</div> <div id='card2' class='card' onclick="deviceSpecsFunctions[1]()">Iphone 12 Pro Max</div>   <div id='card3' onclick="deviceSpecsFunctions[2]()" class='card'>Iphone 13 Pro</div>   <div id='card4' onclick="deviceSpecsFunctions[3]()" class='card'>Xiaomi Poco M4 Pro 5G</div> 
            <div id='card5' class='card'onclick="deviceSpecsFunctions[4]()" >Galaxy S22 Ultra</div>   <div id='card6' onclick="deviceSpecsFunctions[6]()" class='card'>Xiaomi Poco X4 Pro 5G</div>   <div id='card7' onclick="deviceSpecsFunctions[5]()" class='card'>Galaxy A52</div>
        </div>
    </div>`
}

/* Ativa a função home no load da página  */
window.addEventListener("load", () => {
    Home()
    let deviceList = `
    <p onclick="deviceSpecsFunctions[0]()">Galaxy M52 5G</p>
    <p onclick="deviceSpecsFunctions[1]()">Iphone 12 Pro Max</p>
    <p onclick="deviceSpecsFunctions[2]()">Iphone 13 Pro</p>
    <p onclick="deviceSpecsFunctions[3]()">Xiaomi Poco M4 Pro 5G</p>
    <p onclick="deviceSpecsFunctions[4]()">Galaxy S22 Ultra</p>
    <p onclick="deviceSpecsFunctions[5]()">Galaxy A52</p>
    <p onclick="deviceSpecsFunctions[6]()">Xiaomi Poco X4 Pro 5G</p>
    `
    DeviceList.innerHTML = deviceList
})

/* Função para abrir a lista de aparelhos, sendo ativada ao clicar no "Devices"*/
function OpenMenu() {
    DeviceList.classList.toggle("open")
    DevicesButton.setAttribute("style", "color: var(--background-color-1); border-bottom: 3px solid;border-color: var(--background-color-1);")
}

function deviceClassRemove() {
    DeviceList.classList.remove ("device-off")
}

/*Fecha a lista de aparelhos ao tirar o mouse de cima da lista */   
DeviceList.addEventListener("mouseleave", () => {
    DeviceList.classList.remove("open")
    DevicesButton.setAttribute("style", "default")
})


/* Array de objetos guardando as informações utilizadas em cada dispositivo, como o link de compra, informações de camêra e etc. */
let devicesConfigs  = {
    m52: {
        buylink: '<a href="https://www.google.com/search?q=M52+5g&sxsrf=AJOqlzVixEJWW7SahPwlmCtEhBTKKhjgTg%3A1679092074265&ei=aukUZKruD5G85OUP4--b0A8&ved=0ahUKEwiqy4a1geT9AhURHrkGHeP3BvoQ4dUDCA8&uact=5&oq=M52+5g&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCAAQsQMQQzILCAAQgAQQsQMQgwEyBAgAEEMyBAgAEEMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CAgAEIAEELEDSgQIQRgAUABY6w5gvRNoAHABeACAAecBiAHyBZIBBTAuMy4xmAEAoAEBwAEB&sclient=gws-wiz-serp" target="v_blank">Buy</a>',
        ImageConfig: "width: 30rem;height:35rem;background: url('assets/m52-5g/m52.svg');background-position-x: -8.6rem;background-size: contain;background-repeat: no-repeat;background-size:cover;background-clip: content-box; margin-left: -2rem;margin-top: 2rem;",
        display: "<h2>Display</><p>6.7 Polegadas</><p>1080x2400px</><p>super AMOLED plus</><p>120hz</p>",
        chipset: "<h2>Chipset</h2><p>Snapdragon 778G Qualcomm</p><p>Adreno 642L</p><p>8 Core2.1 GHZ</p>",
        connection: "<h2>Conexão</h2><p>WIFI 802.11 a/b/g/n/ac/6</p><p>Bluetooth 5.0 com A2DP/LE</p><p>3700 Mbps / 2900 Mbps</p>",
        camera: "<h2>Camera</h2><p>64Mp Traseira / 32Mp Frontal</p><p>4K/30fps</p><p>HDR</p><p>Estabilizador</p>",
        memory: "<h2>Armazenamento</h2><p>128GB ROM</p><p>max 1028GB</p><p>6GB+4 RAM</p>",
        freatures: "<h2>Freatures</h2><p>Face Detection</p><p>Impressão Digital</p><p>Bateria 5000maH</p>",
    },

    Iphone12: {
        buylink: '<a href="https://www.google.com/search?q=Iphone+12&biw=1479&bih=746&sxsrf=AJOqlzWw4BLIlZr0Heq3VaL31Ivjw0SqfQ%3A1679092261025&ei=JeoUZJSiAZG85OUP4--b0A8&ved=0ahUKEwjUyI2OguT9AhURHrkGHeP3BvoQ4dUDCA8&uact=5&oq=Iphone+12&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIKCAAQRxDWBBCwAzINCAAQRxDWBBDJAxCwAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwAzIICAAQkgMQsAMyCAgAEJIDELADSgQIQRgAUABYAGC2AWgBcAF4AIABAIgBAJIBAJgBAMgBCsABAQ&sclient=gws-wiz-serp" target="v_blank">Buy</a>',
        ImageConfig: "width: 30rem;height:35rem;background: url('assets/iphone12proMax/iphone12promax.png');background-position-x: -5.6rem;background-size: contain;background-repeat: no-repeat;background-size:cover;background-clip: content-box;margin-left: 1rem;margin-top: 2rem;",
        display: "<h2>Display</h2><p>6.7 Polegadas</p><p>1284x2778px</p><p>Super Retina XDR OLED</p><p>60hz</p>",
        chipset: "<h2>Chipset</h2><p>Apple A14 Bionic</p><p>Apple GPU (4 cores)</p><p>2x 3.1Ghz + 4x 1.8Ghz</p>",
        connection: "<h2>Conexão</h2><p>WIFI 802.11 a/b/g/n/ac/6</p><p>Bluetooth 5.0 com A2DP/LE</p>",
        camera: "<h2>Camera</h2><p>12Mp Traseira / 12Mp Frontal</p><p>4000 x 3000 pixel</p><p>4K(2160p)/60fps</p><p>HDR</p><p>Estabilização Ótica/</p>",
        memory: "<h2>Armazenamento</h2><p>512GB ROM</p><p>6GB</p><p>Sem expansão</p>",
        freatures: "<h2>Freatures</h2><p>Face Detection</p><p>Impressão Digital</p><p>Bateria 3690maH</p>",
    },
    
    Iphone13Pro: {
        buylink: "<a href='https://www.shoptime.com.br/produto/3919412473?epar=9381&s_term=COMPARADORES&hl=lower&utm_campaign=marca%3Ashop%3Bmidia%3Acomparadores%3Bformato%3A00%3Bsubformato%3A00%3Bidcampanha%3A9381&utm_source=zoom&utm_medium=comparadores&opn=COMPARADORES&utm_content=2e8e61fa62f14d928b22a88b2caac168&franq=2e8e61fa62f14d928b22a88b2caac168&cor=Prateado' target='v_blank'>Buy</a>",
        ImageConfig: "width: 35rem;height:40rem;background: url('assets/iphone13pro/iphone-13.png');background-position-x: -5.6rem;background-size: contain;background-repeat: no-repeat;background-size:cover;background-clip: content-box;margin-left: 1rem;margin-top: -5rem;",
        display: "<h2>Display</h2><p>6.06 Polegadas</p><p>1170x2532px</p><p>Super Retina XD<p>120hz</p>",
        chipset: "<h2>Chipset</h2><p>Apple A15 Bionic</p><p>Apple GPU (5 cores)</p><p>2x 3.22Ghz + 4x 1.82Ghz</p>",
        connection: "<h2>Conexão</h2><p>WIFI 802.11 a/b/g/n/ac/6e</p><p>Bluetooth 5.0 com A2DP/LE</p>",
        camera: "<h2>Camera</h2><p>12Mp Traseira / 12Mp Frontal</p><p>4000 x 3000 pixel</p><p>4K(2160p)/60fps</p><p>HDR</p><p>Estabilização Ótica/</p>",
        memory: "<h2>Armazenamento</h2><p>Até 1000GB ROM</p><p>6GB</p><p>Sem expansão</p>",
        freatures: "<h2>Freatures</h2><p>Face Detection</p><p>Dual Led</p><p>Bateria 3095maH</p>",
    },
    
    XiaomiPocoM4: {
        buylink: "<a href='https://www.google.com/search?q=xiaomi+poco+m4+pro&oq=xiaomi+poco+m4&aqs=edge.0.0i433i512j69i57j0i512l6.6137j0j1&sourceid=chrome&ie=UTF-8' target='v_blank'>Buy</a>",
        ImageConfig: "width: 22rem;height:30rem;background: url('assets/m4pro5g/m4pro5g.jpg');background-position-x: 0;background-size: contain;background-repeat: no-repeat;background-size:cover;background-clip: content-box;margin-left: 1rem;margin-top: 4rem;",
        display: "<h2>Display</h2><p>6.6 Polegadas</p><p>1080x2400px</p><p>IPS LCD</p><p>90hz</p>",
        chipset: "<h2>Chipset</h2><p>MediaTek Dimensity 810</p><p>Mali-g57 MC2</p><p>2x 2.4Ghz + 6x 2Ghz</p>",
        connection: "<h2>Conexão</h2><p>WIFI 802.11 a/b/g/n/ac</p><p>Bluetooth 5.1 com A2DP/LE</p>",
        camera: "<h2>Camera</h2><p>50Mp + 8MP Traseira / 16Mp Frontal</p><p>fullHD(1080p)/60fps</p><p>HDR</p><p>Estabilização Ótica/</p>",
        memory: "<h2>Armazenamento</h2><p>Até 128GB ROM</p><p>4GB RAM</p><p>MicroSD até 1024GB</p>",
        freatures: "<h2>Freatures</h2><p>Face Detection</p><p>Bateria 5000maH</p>",
    },
    GalaxyS22Ultra: {
        buylink: "<a href='https://www.magazineluiza.com.br/smartphone-samsung-galaxy-s22-ultra-256gb-vinho-5g-12gb-ram-68-cam-quadrupla-selfie-40mp/p/234440800/te/s21u/?&force=12&seller_id=magazineluiza' target='v_blank'>Buy</a>",
        ImageConfig: "width: 16rem;height:34rem;background: url('assets/S22Ultra/S22Ultra.jpeg');background-position-x: 0rem;background-size: contain;background-repeat: no-repeat;background-size:cover;background-clip: content-box;margin-left: 2rem;margin-top: 3rem;",
        display: "<h2>Display</h2><p>6.8 Polegadas</p><p>1440x3080px</p><p>Dynamic AMOLED 2X</p><p>120hz</p>",
        chipset: "<h2>Chipset</h2><p>Snapdragon 8 Gen1 Qualcomm</p><p>Adreno 730</p><p>1x3Ghz + 3x2.5Ghz + 4x1.8Ghz</p>",
        connection: "<h2>Conexão</h2><p>WIFI 802.11 a/b/g/n/ac/6</p><p>Bluetooth 5.2 A2DP/LE</p>",
        camera: "<h2>Camera</h2><p>108Mp + 12Mp + 2x10Mp / 40Mp</p><p>8K/24fps + 4k/60fps</p><p>HDR</p>",
        memory: "<h2>Armazenamento</h2><p>Max 512GB ROM</p><p>12GB RAM</p><p>Não expande</p>",
        freatures: "<h2>Freatures</h2><p>Face Detection</p><p>Bateria 5000maH</p>",
    },
    XiaomiPocoX4: {
        buylink: "<a href='https://www.amazon.com.br/Smartphone-Xiaomi-X4-Pro-5G/dp/B09TD7B23K/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=TD7FGFD896OV&keywords=poco+x4+pro&qid=1652814925&s=electronics&sprefix=poco+x4+por%2Celectronics%2C242&sr=1-1&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147' target='v_blank'>Buy</a>",
        ImageConfig: "width: 26rem;height:30rem;background: url('assets/x4pro/x4pro.jpg');background-position-x: -.5rem;background-size: contain;background-repeat: no-repeat;background-size:cover;background-clip: content-box;margin-left: -2rem;margin-top: 3rem;",
        display: "<h2>Display</h2><p>6.67 Polegadas</p><p>1080x2400px</p><p>AMOLED</p><p>120hz</p>",
        chipset: "<h2>Chipset</h2><p>Snapdragon 695</p><p>Adreno 619</p><p>2x 2.2Ghz + 6x 1.7Ghz</p>",
        connection: "<h2>Conexão</h2><p>WIFI 802.11 a/b/g/n/ac/</p><p>Bluetooth 5.1 com A2DP/LE</p><p>2500mbps / 1500mbps</p>",
        camera: "<h2>Camera</h2><p>108Mp + 8Mp + 2Mp / 16Mp</p><p>1080p/30fps</p><p>HDR</p>",
        memory: "<h2>Armazenamento</h2><p>128GB ROM</p><p>6GB RAM</p><p>Max 1024Gb</p>",
        freatures: "<h2>Freatures</h2><p>Face Detection</p><p>Bateria 5000maH</p>",
    },
    GalaxyA52: {
        buylink: "<a href='https://www.fastshop.com.br/web/p/d/SGSMA525VLT_PRD/samsung-galaxy-a52-violeta-128gb-sm-a525mlvgzto-fast?partner=parceiro-comparador&utm_source=com_zoom&utm_medium=com&utm_campaign=PREMIUM&utm_term=SGSMA525VLT_PRD&cm_mmc=com_zoom-_-PREMIUM-_-ND-_-SGSMA525VLT_PRD&utm_content=cfc446405923492d998f268ed9f750f1' target='v_blank'>Buy</a>",
        ImageConfig: "width: 26rem;height:30rem;background: url('assets/A52/A52.png');background-position-x: 0rem;background-size: contain;background-repeat: no-repeat;background-size:cover;background-clip: content-box;margin-left: -1rem;margin-top: 3rem;",
        display: "<h2>Display</h2><p>6.5 Polegadas</p><p>1080x2400px</p><p>Super AMOLED</p><p>90hz</p>",
        chipset: "<h2>Chipset</h2><p>Snapdragon 720G</p><p>Adreno 618</p><p>2x 2.3Ghz + 6x 1.8Ghz</p>",
        connection: "<h2>Conexão</h2><p>WIFI 802.11 a/b/g/n/ac/</p><p>Bluetooth 5.0 com A2DP/LE</p>",
        camera: "<h2>Camera</h2><p>64Mp + 12Mp + 2x5Mp / 32Mp</p><p>4K(2160p)/30fps</p><p>HDR</p>",
        memory: "<h2>Armazenamento</h2><p>128GB ROM</p><p>6GB RAM</p><p>Max 1024Gb</p>",
        freatures: "<h2>Freatures</h2><p>Face Detection</p><p>Bateria 4500maH</p>",
    },
}

/* Aqui criei uma array com todas as funções a serem executadas, essas que mostram as informações de cada aparelho */
let deviceSpecsFunctions = [

    function m52Specs() {
        deviceClassRemove()
        HomeSection.innerHTML = ""
        buyLink.innerHTML = devicesConfigs.m52.buylink
        phoneImage.setAttribute("style", devicesConfigs.m52.ImageConfig)
        displaySection.innerHTML = devicesConfigs.m52.display
        chipsetSection.innerHTML = devicesConfigs.m52.chipset 
        connectionSection.innerHTML = devicesConfigs.m52.connection
        cameraSection.innerHTML = devicesConfigs.m52.camera
        memorySection.innerHTML = devicesConfigs.m52.memory
        freaturesSection.innerHTML = devicesConfigs.m52.freatures
        DeviceList.classList.remove("open")
    },
    
    function iphone12Specs() {
        deviceClassRemove()
        HomeSection.innerHTML = ""
        buyLink.innerHTML = devicesConfigs.Iphone12.buyLink
        phoneImage.setAttribute("style", devicesConfigs.Iphone12.ImageConfig)
        displaySection.innerHTML = devicesConfigs.Iphone12.display
        chipsetSection.innerHTML = devicesConfigs.Iphone12.chipset
        connectionSection.innerHTML = devicesConfigs.Iphone12.connection
        cameraSection.innerHTML = devicesConfigs.Iphone12.camera
        memorySection.innerHTML = devicesConfigs.Iphone12.memory
        freaturesSection.innerHTML = devicesConfigs.Iphone12.freatures
        DeviceList.classList.remove("open")                              
    },
    
    function iphone13Specs() {
        deviceClassRemove()
        HomeSection.innerHTML = ""
        buyLink.innerHTML = devicesConfigs.Iphone13Pro.buyLink
        phoneImage.setAttribute("style", devicesConfigs.Iphone13Pro.ImageConfig)
        displaySection.innerHTML = devicesConfigs.Iphone13Pro.display
        chipsetSection.innerHTML = devicesConfigs.Iphone13Pro.chipset
        connectionSection.innerHTML = devicesConfigs.Iphone13Pro.connection
        cameraSection.innerHTML = devicesConfigs.Iphone13Pro.camera
        memorySection.innerHTML = devicesConfigs.Iphone13Pro.memory
        freaturesSection.innerHTML = devicesConfigs.Iphone13Pro.freatures
        DeviceList.classList.remove("open")
    },
    
    function m4proSpecs() {
        deviceClassRemove()
        HomeSection.innerHTML = ""
        buyLink.innerHTML = devicesConfigs.XiaomiPocoM4.buylink
        phoneImage.setAttribute("style", devicesConfigs.XiaomiPocoM4.ImageConfig)
        displaySection.innerHTML = devicesConfigs.XiaomiPocoM4.display
        chipsetSection.innerHTML = devicesConfigs.XiaomiPocoM4.chipset
        connectionSection.innerHTML = devicesConfigs.XiaomiPocoM4.connection
        cameraSection.innerHTML = devicesConfigs.XiaomiPocoM4.camera
        memorySection.innerHTML = devicesConfigs.XiaomiPocoM4.memory
        freaturesSection.innerHTML = devicesConfigs.XiaomiPocoM4.freatures
        DeviceList.classList.remove("open")
    },
    
    function s22UltraSpecs() {
        deviceClassRemove()
        HomeSection.innerHTML = ""
        buyLink.innerHTML = devicesConfigs.GalaxyS22Ultra.buylink
        phoneImage.setAttribute("style", devicesConfigs.GalaxyS22Ultra.ImageConfig)
        displaySection.innerHTML = devicesConfigs.GalaxyS22Ultra.display
        chipsetSection.innerHTML = devicesConfigs.GalaxyS22Ultra.chipset
        connectionSection.innerHTML = devicesConfigs.GalaxyS22Ultra.connection
        cameraSection.innerHTML = devicesConfigs.GalaxyS22Ultra.camera
        memorySection.innerHTML = devicesConfigs.GalaxyS22Ultra.memory
        freaturesSection.innerHTML = devicesConfigs.GalaxyS22Ultra.freatures
        DeviceList.classList.remove("open")                              
    },
    
    function a52Specs() {
        deviceClassRemove()
        HomeSection.innerHTML = ""
        buyLink.innerHTML = devicesConfigs.GalaxyA52.buylink
        phoneImage.setAttribute("style", devicesConfigs.GalaxyA52.ImageConfig)
        displaySection.innerHTML = devicesConfigs.GalaxyA52.display
        chipsetSection.innerHTML = devicesConfigs.GalaxyA52.chipset
        connectionSection.innerHTML = devicesConfigs.GalaxyA52.connection
        cameraSection.innerHTML = devicesConfigs.GalaxyA52.camera
        memorySection.innerHTML = devicesConfigs.GalaxyA52.memory
        freaturesSection.innerHTML = devicesConfigs.GalaxyA52.freatures
        DeviceList.classList.remove("open")                              
    },
    
    function x4proSpecs() {
        deviceClassRemove()
        HomeSection.innerHTML = ""
        buyLink.innerHTML = devicesConfigs.XiaomiPocoX4.buylink
        phoneImage.setAttribute("style", devicesConfigs.XiaomiPocoX4.ImageConfig)
        displaySection.innerHTML = devicesConfigs.XiaomiPocoX4.display
        chipsetSection.innerHTML = devicesConfigs.XiaomiPocoX4.chipset
        connectionSection.innerHTML = devicesConfigs.XiaomiPocoX4.connection
        cameraSection.innerHTML = devicesConfigs.XiaomiPocoX4.camera
        memorySection.innerHTML = devicesConfigs.XiaomiPocoX4.memory
        freaturesSection.innerHTML = devicesConfigs.XiaomiPocoX4.freatures
        DeviceList.classList.remove("open")                              
    },

]


