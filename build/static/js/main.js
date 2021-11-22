const body = document.querySelector("body");



(() => {
	const scrollButton = document.querySelector(".scroll-button")

  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 1500) {
      scrollButton.classList.add("open_js");
    } else {
      scrollButton.classList.remove("open_js");
    }
  })

  scrollButton.addEventListener("click", () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		
  })
})();


(() => {  
		const popup = document.querySelector(".popup--login"),
				  openPopup = document.querySelector(".popup__open-login"),
				  closePopup = document.querySelector(".popup__close--login"),
          focusInput = document.querySelector(".popup__focus-js"),
          form = document.forms["login"];


  openPopup.addEventListener("click", (e) => {
    e.preventDefault()
    popup.classList.add("open_js")
    body.classList.add("body_scroll")
    focusInput.focus()
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
		const popupMenu = document.querySelector(".popup--login"),
				  openPopupMenu = document.querySelector(".menu__link--sign-js"),
				  closePopupMenu = document.querySelector(".popup__close--login"),
          popupMenuLoginInput = document.querySelector(".popup__input--login");


  openPopupMenu.addEventListener("click", (e) => {
    e.preventDefault()
    popupMenu.classList.add("open_js")
    body.classList.add("body_scroll")
    popupMenuLoginInput.focus()
  })

    closePopupMenu.addEventListener("click", (e) => {
    e.preventDefault()
    body.classList.remove("body_scroll")
    popupMenu.classList.remove("open_js")
  })


   window.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && popupMenu.classList.contains("open_js")) {
      popupMenu.classList.remove("open_js")
		  popupButton.focus()
    }
  })
})();



(() => {  
		const popup = document.querySelector(".popup--register"),
				  openPopup = document.querySelector(".popup__open-register"),
				  closePopup = document.querySelector(".popup__close--register"),
          popupRegisterInput = document.querySelector(".popup__input--register");


  openPopup.addEventListener("click", (e) => {
    e.preventDefault()
    popup.classList.add("open_js")
    body.classList.add("body_scroll")
    popupRegisterInput.focus()
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
		const popupMenu = document.querySelector(".popup--register"),
				  openPopupMenu = document.querySelector(".menu__link--register-js"),
				  closePopupMenu = document.querySelector(".popup__close--register"),
          popupMenuInput = document.querySelector(".popup__input--register");


  openPopupMenu.addEventListener("click", (e) => {
    e.preventDefault()
    popupMenu.classList.add("open_js")
    body.classList.add("body_scroll")
    popupMenuInput.focus()
  })

    closePopupMenu.addEventListener("click", (e) => {
    e.preventDefault()
    body.classList.remove("body_scroll")
    popupMenu.classList.remove("open_js")
  })


   window.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && popupMenu.classList.contains("open_js")) {
      popupMenu.classList.remove("open_js")
		  popupButton.focus()
    }
  })
})();



(() => {  
		const popup = document.querySelector(".popup--send"),
				  openPopup = document.querySelector(".contacts__button"),
				  closePopup = document.querySelector(".popup__close--send"),
          popupSendInput = document.querySelector(".popup__input--send");


  openPopup.addEventListener("click", (e) => {
    e.preventDefault()
    popup.classList.add("open_js")
    body.classList.add("body_scroll")
    popupSendInput.focus()
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
