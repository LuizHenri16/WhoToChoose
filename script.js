let DeviceList  = document.getElementById("devices-list")
let DevicesButton = document.getElementById("Devices")

function OpenMenu() {
    DeviceList.classList.toggle("open")
    DevicesButton.setAttribute("style", "color: #6ca59a; border-bottom: 3px solid;border-color: #6ca59a;")
    
}

DeviceList.addEventListener("mouseleave", () => {
    DeviceList.classList.remove("open")
    DevicesButton.setAttribute("style", "default")
})
