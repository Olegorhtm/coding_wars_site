let entrance = document.getElementById("entrance")
  let open_entrance = document.getElementById("open_entrance")
  let show_entrance = document.getElementById("show_entrance")

  open_entrance.addEventListener("click", () => {
    if (entrance.style.display === "block") {
      entrance.style.display = "none"
    } else {
      entrance.style.display = "block"
    } } )

  show_entrance.addEventListener("click", ()=> {   
      if (entrance.style.display === "block") {
      entrance.style.display = "none"
    } else {
      entrance.style.display = "block"
    }}
  )

  let registration = document.getElementById("registration")
  let open_registration = document.getElementById("open_registration")
  let show_registration = document.getElementById("show_registration")

  open_registration.addEventListener("click", () => {
    if (registration.style.display === "block") {
      registration.style.display = "none"
    } else {
      registration.style.display = "block"
    } } )

  show_registration.addEventListener("click", ()=> {   
      if (registration.style.display === "block") {
      registration.style.display = "none"
    } else {
      registration.style.display = "block"
    }}
  )