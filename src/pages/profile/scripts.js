


(() => {  
		const popup = document.querySelector(".popup--pass"),
          body = document.body,
				  openPopup = document.querySelector(".profile__change-pass"),
				  closePopup = document.querySelector(".popup__close--pass"),
          popupPassInput = document.querySelector(".popup__input--pass");

    openPopup.addEventListener("click", (e) => {
    e.preventDefault()
    popup.classList.add("open_js")
    body.classList.add("body_scroll")
    popupPassInput.focus()
  })

    closePopup.addEventListener("click", (e) => {
    e.preventDefault()
    body.classList.remove("body_scroll")
    popup.classList.remove("open_js")
  })


   window.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && popup.classList.contains("open_js")) {
      popup.classList.remove("open_js")
		  popupButton.focus()
    }
  })
})();


(() => {  
		const popup = document.querySelector(".popup--data"),
          body = document.body,
				  openPopup = document.querySelector(".profile__change-data"),
				  closePopup = document.querySelector(".popup__close--data"),
          popupDataInput = document.querySelector(".popup__input--data");


  openPopup.addEventListener("click", (e) => {
    e.preventDefault()
    popup.classList.add("open_js")
    body.classList.add("body_scroll")
    popupDataInput.focus()
  })

    closePopup.addEventListener("click", (e) => {
    e.preventDefault()
    body.classList.remove("body_scroll")
    popup.classList.remove("open_js")
  })


   window.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && popup.classList.contains("open_js")) {
      popup.classList.remove("open_js")
		  popupButton.focus()
    }
  })
})();


(() => {
  const menu = document.querySelector(".menu"),
				menuOpen = document.querySelector(".menu__open--js"),
        focusItem = document.querySelector(".menu-focus"),
				menuClose = document.querySelector(".menu__close--js");

    menuOpen.addEventListener("click", () => {
      menu.classList.add("open_js-flex");
      body.classList.add("body_scroll");
      focusItem.focus();
    })

  menuClose.addEventListener("click", (e) => {
    menu.classList.remove("open_js-flex");
    body.classList.remove("body_scroll");
  })

  window.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && menu.classList.contains("open_js")) {
      menu.classList.remove("open_js-flex");
      body.classList.remove("body_scroll");
      menuOpen.focus();
    }
  })
})();
