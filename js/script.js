let headerButtons
let allItems

window.addEventListener("load", () => {
    headerButtons = document.querySelectorAll(".header-cell")
    allItems = document.querySelector("#all-items")

    for(let i = 0; i < headerButtons.length; i++) {
        headerButtons[i].onclick = function () {
            openTab(parseInt(this.id.substring(this.id.length -1)))
        }
    }

    examineHash()

    let contentInput = document.querySelector("#content")
    let addButton = document.querySelector("#add-btn")


    let allItemsContainer = document.querySelector("#all-items-container")
    let activeItemsContainer = document.querySelector("#active-items-container")
    let completedItemsContainer = document.querySelector("#completed-items-container")

    let toDoApp = new ToDo(allItemsContainer, activeItemsContainer, completedItemsContainer)

    addButton.addEventListener("click", () => {
        if(contentInput.value !== "") {
            toDoApp.add(contentInput.value)
            contentInput.value = ""
        }
    })
})

window.addEventListener("hashchange", (e) => {
    examineHash()
})
function examineHash () {
    switch (window.location.hash) {

        case "#all-items":
        case "": 
            openTab(1)
            break;
        case "#pending-items":
            openTab(2)
            break;
        case "#active-items":
            openTab(3)
            break;
    }
}

function openTab(no) {
    document.querySelectorAll(".header-cell").forEach(item => {
        item.classList.add("inactive-header-cell")
    })

    document.querySelector("#tab-" + no).classList.remove("inactive-header-cell")

    switch (no) {
        case 1:
            allItems.style.marginLeft = "0%"
            window.location.hash = "#all-items"
            break;
        case 2: 
            allItems.style.marginLeft = "-100%"
            window.location.hash = "#pending-items"
            break;
        case 3: 
            allItems.style.marginLeft = "-200%"
            window.location.hash = "#active-items"
            break;

    }
}