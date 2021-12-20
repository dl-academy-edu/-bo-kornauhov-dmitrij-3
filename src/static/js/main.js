const API_URL = "https://academy.directlinedev.com",
      VERSION_API = "1.0.0",
      body = document.querySelector("body"),
      logout = document.querySelector(".logout-js"),
      logoutMenu = document.querySelector(".logout-js--menu"),
      answerPopup = document.querySelector(".answer");


 function sendReauest({url, method = "GET", headers = null, body = null}) {
   const settings = {
     method,
     headers,
     body
   }
   return fetch(`${API_URL}${url}`, settings)
 }

//  function collectFormData() {
//    const inputs = form.querySelectorAll("input")
//    const body = {}

//    for (let input of inputs) {
//      body[input.name] = input.value
//    }

//    return JSON.stringify(body)
//  }

//  function updateToken() {
//    const  token = local.storage.getItem("token")

//    if (!token) return 
//  }
 


// -----popup login------ //


(() => {  
	const form = document.forms["login"],
        window = document.querySelector(".popup--login"),
				open = document.querySelector(".signin-js"),
        openMenu = document.querySelector(".signin-js--menu"),
        windowMenu = document.querySelector(".popup--login");

  const inputEmail = form.querySelector('input[name = "email"]'),
        inputPass = form.querySelector('input[name = "password"]');
               
   if (open) {
     open.addEventListener("click", () => {
       popup(window, open, form)
     })
   }
   
	if (openMenu) {
		openMenu.addEventListener("click", () => {
			popup(windowMenu, openMenu, form);
		})
	} 



  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = getDataFromForm(form);
    let errors = {}
    

    if (!checkEmail(data.email) || data.email === "") {  
        errors.email = 'Введите корректный адрес почты'
        setErrorMessage(inputEmail, errors.email)
    } else {
      setSuccessMessage(inputEmail)
    }

  if (data.password.length < 8 || data.password === "") {   
        errors.password = 'Пароль должен содержать не менее 8 символов'
        setErrorMessage(inputPass, errors.password)
    } else {
      setSuccessMessage(inputPass)
    }
  return errors;
})

})();


// -----popup register------ //


(() => {  
	const form = document.forms["register"],
        window = document.querySelector(".popup--register"),
				open = document.querySelector(".register-js"),
        openMenu = document.querySelector(".register-js--menu"),
        windowMenu = document.querySelector(".popup--register");

 const inputEmail = form.querySelector('input[name = "email"]'),
       inputName = form.querySelector('input[name = "name"]'),
       inputSurname = form.querySelector('input[name = "surname"]'),
       inputPassword = form.querySelector('input[name = "password"]'),
       inputRepeatPassword = form.querySelector('input[name = "repeatPassword"]'),
       inputLocation = form.querySelector('input[name = "location"]'),
       inputAge = form.querySelector('input[name = "age"]');

   if (open) {
     open.addEventListener("click", () => {
       popup(window, open, form)
     })
   }
   
	if (openMenu) {
		openMenu.addEventListener("click", () => {
			popup(windowMenu, openMenu, form);
		})
	}

//    function registerUser(event) {
//     event.preventDefault()

//     const userData = collectFormData(form)

//    sendReauest({
//      url: "/api/users",
//      method: "POST",
//      headers: {
//        "content-type": "application/json"
//      },
//     body: userData,
//    })
//     .then(response => {
//       if (response.ok) {
//         return response.json()
//       }
//       console.log(response)

//       throw Error("Error")
//     })
//     .then (userData => {
//       const {id, token} = userData

//       localStorage.setItem("id", id)
//       localStorage.setItem("token", token)

//       // updateToken()
//     })
//     .catch (err => console.error(`registerUser: ${err}`))
//  }

    form.addEventListener('submit', (event) => {
    // registerUser(event)
    event.preventDefault()
    const data = getDataFromForm(form)
    let errors = {};

    if (!checkEmail(data.email) || data.email === "") {  
        errors.email = 'Введите корректный адрес почты'
        setErrorMessage(inputEmail, errors.email)
    } else {
      setSuccessMessage(inputEmail)
    }

  if (data.name === "") {    
        errors.name = 'Введите корректное имя'
        setErrorMessage(inputName, errors.name);
    } else {
      setSuccessMessage(inputName)
    }

   if (data.surname === "") {    
        errors.surname = 'Введите корректную фамилию';
        setErrorMessage(inputSurname, errors.surname)
    } else {
      setSuccessMessage(inputSurname)
    }
 
  if (data.password.length <= 8 || data.password === "") {    
        errors.password = 'Пароль должен содержать не менее 8 символов';
        setErrorMessage(inputPassword, errors.password)
    } else {
      setSuccessMessage(inputPassword)
    }
    
   if (data.repeatPassword !== data.password || data.repeatPassword === "") {    
        errors.repeatPassword = 'Пароли должны совпадать'
        setErrorMessage(inputRepeatPassword, errors.repeatPassword)
    } else {
      setSuccessMessage(inputRepeatPassword)
    }
    
   if (data.location === "") {    
        errors.location = 'Введите корректное место жительства'
        setErrorMessage(inputLocation, errors.location)
    } else {
      setSuccessMessage(inputLocation)
    }

   if (isNaN(data.age) || data.age === "") {    
        errors.age = 'Введите корректный возраст'
        setErrorMessage(inputAge, errors.age)
    } else {
      setSuccessMessage(inputAge)
    }
  return errors;       
})

})();


// -----popup send------ //


(() => {  
	const form = document.forms["send"],
        window = document.querySelector(".popup--send"),
				open = document.querySelector(".send-js");


   if (open) {
     open.addEventListener("click", () => {
       popup(window, open, form)
     })
   }

   form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = getDataFromForm(form);
    let errors = {};
    const inputName = form.querySelector('input[name = "name"]')
    const inputmMessageSubject = form.querySelector('input[name = "messageSubject"]')
    const inputEmail = form.querySelector('input[name = "email"]')
    const inputTel = form.querySelector('input[name = "telephone"]')

   if (data.name === "") {   
        errors.name = 'Введите корректное имя'
        setErrorMessage(inputName, errors.name)
    }  else {
      setSuccessMessage(inputName)
    } 

    if (data.messageSubject === "") {    
        errors.messageSubject = 'Введите тему сообщения'
        setErrorMessage(inputmMessageSubject, errors.messageSubject)
    }  else {
      setSuccessMessage(inputmMessageSubject)
    }

    if (!checkEmail(data.email) || data.email === "") {   
        errors.email = 'Введите корректный адрес почты'
        setErrorMessage(inputEmail, errors.email)
    }  else {
      setSuccessMessage(inputEmail)
    }    

    if (!checkTelephone(data.telephone) || data.telephone === "" ) {
        errors.telephone = 'Введите корректный номер телефона'
        setErrorMessage(inputTel, errors.telephone);
  }  else {
      setSuccessMessage(inputTel)
    }
   return errors; 
})

})();


// -----answer function------ //


function answer(popup, text, type) {
	let close = popup.querySelector(".answer__close");
	let textBox = popup.querySelector(".answer__text");

	popup.classList.add("open_js-flex");
	body.classList.add("overflow_js");

	if (textBox.classList.contains("answer__text--success")) {
		textBox.classList.remove("answer__text--success");
	}
	if (textBox.classList.contains("answer__text--error")) {
		textBox.classList.remove("answer__text--error");
	}
	if (type === "success") {
		textBox.classList.add("answer__text--success");
	}
	if (type === "error") {
		textBox.classList.add("answer__text--error");
	}

	textBox.innerText = text;

	close.addEventListener("click", (e) => {
		e.preventDefault();
		popup.classList.remove("open_js");
		body.classList.remove("overflow_js");
	})

	window.addEventListener("keydown", (e) => {
		if (e.code === "Escape" && popup.classList.contains("open_js")) {
			popup.classList.remove("open_js");
			body.classList.remove("overflow_js");
		}
	})
}


// -----popup function------ //


function popup(popup, button, form) {
  const close = popup.querySelector(".popup__close"),
        focus = popup.querySelector(".popup__input"),
        checkbox = popup.querySelector(".popup__checkbox"),
        submit = popup.querySelector(".popup__button")

  popup.classList.add("open_js")
  body.classList.add("overflow_js")
  focus.focus()

	if (checkbox) {
		checkbox.addEventListener("click", () => {
			if (checkbox.checked) {
				submit.removeAttribute("disabled")
			} else {
				submit.setAttribute("disabled", true)
			}
		})
	}

  close.addEventListener("click", (e) => {
    e.preventDefault()
    popupClose(popup, button, form)
  })

  window.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && popup.classList.contains("open_js")) {
      popupClose(popup, button, form)
    }
  })
}

function popupClose(popup, button, form ) {
  popup.classList.remove("open_js")
  body.classList.remove("overflow_js")
	form.reset()
	clearForm(form)
  button.focus()
};

// -----validation------ //

function checkEmail(email) {
    return email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i)
}

function checkTelephone(telephone) {
	return telephone.match(/^(\s*)?(\+)?([-_():=+]?\d[- _():=+]?){10,14}(\s*)?$/)
}


function setErrorMessage(input, message) {
    if (input.hasAttribute("SuccessText", "success")) {
      input.removeAttribute("SuccessText", "success") 
  	}

    if (input.hasAttribute("ErrorText", "error")) {
		  return
  	}

    input.setAttribute("ErrorText", "error")
    const errorMessage = document.createElement('span')
    errorMessage.classList.add('popup__text--error')
    input.classList.add("popup__input--error")
    errorMessage.innerText = message
    input.insertAdjacentElement('afterend', errorMessage)
    input.addEventListener('input', function err() {
      input.classList.remove("popup__input--error")
      input.removeEventListener('input', err)
      errorMessage.remove()
    })
}


function setSuccessMessage(input) {
    if (input.hasAttribute("ErrorText", "error")) {
      input.removeAttribute("ErrorText", "error") 
  	}

    if (input.hasAttribute("SuccessText", "success")) {
      return
  	}

    input.setAttribute("SuccessText", "success")
    const successMessage = document.createElement('span')
    successMessage.innerText = "Успешно"
    successMessage.classList.add('popup__text--success')
    input.classList.add("popup__input--success")
    input.insertAdjacentElement('afterend', successMessage)
     input.addEventListener('input', function suc() {
      input.classList.remove("popup__input--success")
      input.removeEventListener('input', suc)
      successMessage.remove()
    })   
}


// -----clear form------ //


function clearInput(input) {
	if (input.hasAttribute("ErrorText")) {
		input.classList.remove("popup__input--error")
		input.removeAttribute("ErrorText")
	} else {
		input.classList.remove("popup__input--success")
		input.removeAttribute("SuccessText")
	}
}


function clearText(form) {
	let messages = [...form.querySelectorAll(".popup__text--error")].concat([...form.querySelectorAll(".popup__text--success")])

	for (let message of messages) {
		message.remove();
	}
}

function clearForm(form) {
	let inputs = form.querySelectorAll("input");

	for (let input of inputs) {
		clearInput(input);
	}

	clearText(form);
}



function getDataFromForm(form, data = {}, type = "json") {
	if (type === "json") {
		let inputs = form.querySelectorAll("input");

		for (let input of inputs) {
			switch (input.type) {
				case "radio":
					if (input.checked) {
						data[input.name] = input.value;
					}
					break;
				case "checkbox":
					if (!data[input.name]) {
						data[input.name] = [];
					}
					if (input.checked) {
						data[input.name].push(input.value);
					}
					break;
				case "file":
					data[input.name] = input.files;
					break;
				default:
					data[input.name] = input.value;
					break;
			}
		}

		let textareas = form.querySelectorAll("textarea");

		for (let textarea of textareas) {
			data[textarea.name] = textarea.value;
		}

		return data;
	} else {
		return new FormData(form);
	}
}


// function updateState() {
// 	const login = document.querySelector(".signin-js"),
// 				register = document.querySelector(".register-js"),
// 				profile = document.querySelector(".profile-js"),
// 				loginMenu = document.querySelector(".signin-js--menu"),
// 				registerMenu = document.querySelector(".register-js--menu"),
// 				profileMenu = document.querySelector(".profile-js--menu");

// 	if (localStorage.getItem("token")) {
// 		login.classList.add("disabled");
// 		register.classList.add("disabled");
// 		profile.classList.remove("disabled");
// 		logout.classList.remove("disabled");

// 		loginMenu.classList.add("disabled");
// 		registerMenu.classList.add("disabled");
// 		profileMenu.classList.remove("disabled");
// 		logoutMenu.classList.remove("disabled");
// 	} else {
// 		login.classList.remove("disabled");
// 		register.classList.remove("disabled");
// 		profile.classList.add("disabled");
// 		logout.classList.add("disabled");

// 		loginMenu.classList.remove("disabled");
// 		registerMenu.classList.remove("disabled");
// 		profileMenu.classList.add("disabled");
// 		logoutMenu.classList.add("disabled");
// 	}
// }

// updateState();

// logout.addEventListener("click", () => {
// 	answer(answerPopup, "Вы успешно вышли", "success");

// 	setTimeout(() => {
// 		logoutUser();
// 	}, 2000)
// })

// logoutMenu.addEventListener("click", () => {
// 	answer(answerPopup, "Вы успешно вышли", "success");

// 	setTimeout(() => {
// 		logoutUser();
// 	}, 2000)
// })

// function logoutUser() {
// 	localStorage.removeItem("token");
// 	localStorage.removeItem("userId");
// 	return window.location = "/";
// }


// -----slider------ //


function slider({ sliderEl, defaultActiveSlide = +localStorage.getItem("activeSlide") || 0 }) {
  const slider = document.querySelector(sliderEl),
				wrapper = slider.querySelector(".slider__wrapper"),
				innerWrapper = slider.querySelector(".slider__inner-wrapper"),
				slides = [...slider.querySelectorAll(".slider__slide")],
				pagination = slider.querySelector(".pagination"),
				buttonBack = slider.querySelector(".slider__button--prev"),
				buttonNext = slider.querySelector(".slider__button--next"),
				aniTime = 500;

  let activeSlide = defaultActiveSlide,
			slideWidth = 0,
			dots = [],
			timerId = null;

  initSlidesWidth();
  createPagination();
  setActiveSlide(activeSlide, false);

  window.addEventListener("resize", () => {
    initSlidesWidth();
    setActiveSlide(activeSlide, false);
  })

  function addAnimation(duration) {
    clearTimeout(timerId);
		innerWrapper.style.transition = `transform ${duration}ms`;
		
    timerId = setTimeout(() => {
      innerWrapper.style.transition = ``;
    }, duration);
  }

  function createPagination() {
    for (let i = 0; i < slides.length; i++) {
      let dot = createDot(i);
      pagination.insertAdjacentElement("beforeend", dot);
      dots.push(dot);
    }
  }

  function createDot(index) {
    let dot = document.createElement("button");
		dot.classList.add("pagination__button");
		dot.setAttribute("aria-label", `Slide number ${index + 1}`)

    if (index === activeSlide) {
      dot.classList.add("pagination__button--active");
		}
		
    dot.addEventListener("click", () => {
      setActiveSlide(index);
		})
		
    return dot;
  }

  function initSlidesWidth() {
		slideWidth = wrapper.clientWidth;
		
    slides.forEach((slide) => {
      slide.style.width = `${slideWidth}px`;
    })
  }

  function setActiveSlide(index = 0, playAnimation = true) {
    if (index < 0 || index >= slides.length) {
      return;
    }
    if (playAnimation) {
      addAnimation(aniTime);
		}
		
    dots[activeSlide].classList.remove("pagination__button--active");
		dots[index].classList.add("pagination__button--active");
		
    if (index === 0) {
      buttonBack.setAttribute("disabled", "");
    } else {
      buttonBack.removeAttribute("disabled");
    }
    if (index === slides.length - 1) {
      buttonNext.setAttribute("disabled", "");
    } else {
      buttonNext.removeAttribute("disabled");
		}
		
    innerWrapper.style.transform = `translateX(-${slideWidth * index}px)`;
		activeSlide = index;
		localStorage.setItem("activeSlide", activeSlide);
  }

  buttonBack.addEventListener("click", () => {
    setActiveSlide(activeSlide - 1);
  })

  buttonNext.addEventListener("click", () => {
    setActiveSlide(activeSlide + 1);
  })
}



// -----button top------ //


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


// -----mobile menu------ //


(() => {
  const menu = document.querySelector(".menu"),
				menuOpen = document.querySelector(".menu__open"),
				menuClose = document.querySelector(".menu__close"),
				focusLink = document.querySelector(".focus_js");

  menuOpen.addEventListener("click", () => {
    menu.classList.add("open_js-flex")
    body.classList.add("overflow_js")
    focusLink.focus()
  })

  menuClose.addEventListener("click", () => {
    menu.classList.remove("open_js-flex")
    body.classList.remove("overflow_js")
    menuOpen.focus()
  })

  window.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && menu.classList.contains("open_js-flex")) {
      menu.classList.remove("open_js-flex")
      body.classList.remove("overflow_js")
      menuOpen.focus()
    }
  })
})();
