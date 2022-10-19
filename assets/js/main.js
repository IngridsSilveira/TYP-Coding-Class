const checkBtn = document.querySelector("#check-btn"); 
    const icon = document.querySelector(".bi-moon");
    const btn_secondary = [...document.querySelectorAll(".btn-secondary")]
    const text = [...document.querySelectorAll(".counter")]


    function change() {

      if (checkBtn.checked) {

        icon.classList.remove("bi-brightness-high");
        icon.classList.add("bi-moon");
        document.body.style.background = "#FFFEFD";
        document.querySelector("#container").style.background = "#f1f3f4";

        document.querySelector(".dropdown-menu").style.backgroundColor = "#fff"

        btn_secondary.map((el) => {
          el.style.background = "#d6d8d8e0";
          el.classList.remove("text-white")
          el.classList.add("text-dark")
        })

        text.map((el) => {
          el.style.color = "#121315";
        })
        
      }
      else {
        
        icon.classList.remove("bi-moon"); 
        icon.classList.add("bi-brightness-high");
        document.body.style.background = "#121315"; 
        document.querySelector("#container").style.background = "#212122";

        document.querySelector(".dropdown-menu").style.backgroundColor = "#121315"

        btn_secondary.map((el) => {
          el.style.background = "#121315";
          el.classList.toggle("text-white")
        })

        text.map((el) => {
          el.style.color = "#fff";
        })
      }
    }