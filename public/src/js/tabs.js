const tabs= document.querySelectorAll("[data-filter]");
const tabContents = document.querySelectorAll("[data-tab-content]")
tabs.forEach(tab => {
    tab.addEventListener("click", ()=> {
        const target = document.querySelector(tab.dataset.filter);
        console.log(target)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove("activePortfolio")
        })
        target.classList.add("activePortfolio");
// console.log(target)

    })
})