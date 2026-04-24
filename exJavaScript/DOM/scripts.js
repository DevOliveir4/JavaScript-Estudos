const guests = document.querySelector("ul")
const input = document.querySelector("input")
const form = document.querySelector("form")



/*form.onsubmit = (e) => {
    e.preventDefault()

    const newGuest = document.createElement("li")
    newGuest.classList.add("guest")
    const guestName = document.createElement("span")
    guestName.textContent = input.value

    newGuest.append(guestName)

    guests.prepend(newGuest)
    input.value = ""
}*/

input.addEventListener("input", () => { 
    const value = input.value

    const regex = /\D+/g
    
    console.log(value.match(regex))
})