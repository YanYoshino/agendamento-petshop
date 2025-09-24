document.addEventListener("DOMContentLoaded", () => {
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementById("cancel");
    const container = document.getElementById("container");
    const modal = document.getElementById("modal")

    openModalBtn.addEventListener("click", () => {
        document.body.classList.add("block");
        container.classList.add("blur");
        modal.classList.add("dp-block");
    })

    closeModalBtn.addEventListener("click", () => {
        document.body.classList.remove("block");
        container.classList.remove("blur");
        modal.classList.remove("dp-block");
    })

})