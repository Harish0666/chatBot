const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {
    if (text.includes("hello")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "Hi";
        texts.appendChild(p);
      }

    if (text.includes("how are you")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I am fine";
      texts.appendChild(p);
    }



    if (text.includes("where is Taj Mahal")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "INDIA";
      texts.appendChild(p);
    }

    if (text.includes("Who build Taj Mahal")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "shah jahan";
      texts.appendChild(p);
    }

    if (text.includes("mobile price")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "12000";
        texts.appendChild(p);
      }
    

    if (text.includes("Nike shoe price")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "5000";
        texts.appendChild(p);
      }

      

      

    if (
      text.includes("what's your name") ||
      text.includes("what is your name")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "My Name is Harish";
      texts.appendChild(p);
    }
  
    p = document.createElement("p");
  }
   


});



recognition.addEventListener("end", () => {
  
  recognition.start();
});

recognition.start();
