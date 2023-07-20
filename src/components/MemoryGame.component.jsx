import React, { useEffect } from "react";

function MemoryGame() {
  useEffect(() => {
    const emojis = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇"];
    let shuf_emojis = emojis.sort(() => (Math.random() > 0.5 ? 1 : -1));

    for (let i = 0; i < emojis.length; i++) {
      let box = document.createElement("div");
      box.className = "card";
      box.innerHTML = shuf_emojis[i];

      box.onclick = function () {
        this.classList.add("cardOpen");
        setTimeout(function () {
          if (document.querySelectorAll(".cardOpen").length > 1) {
            if (
              document.querySelectorAll(".cardOpen")[0].innerHTML ===
              document.querySelectorAll(".cardOpen")[1].innerHTML
            ) {
              document
                .querySelectorAll(".cardOpen")[0]
                .classList.add("cardMatch");
              document
                .querySelectorAll(".cardOpen")[1]
                .classList.add("cardMatch");

              document
                .querySelectorAll(".cardOpen")[1]
                .classList.remove("cardOpen");
              document
                .querySelectorAll(".cardOpen")[0]
                .classList.remove("cardOpen");

              if (document.querySelectorAll(".cardMatch").length === 20) {
                alert("win");
              }
            } else {
              document
                .querySelectorAll(".cardOpen")[1]
                .classList.remove("cardOpen");
              document
                .querySelectorAll(".cardOpen")[0]
                .classList.remove("cardOpen");
            }
          }
        }, 500);
      };

      document.querySelector(".game-screen").appendChild(box);
    }
  }, []);

  return (
    <div className="section">
      <h1 className="title">Simple Memory Game</h1>
      <div className="container glass">
        <div className="game-screen"></div>
        <button className="reset" onClick={() => window.location.reload()}>
          reset
        </button>
      </div>
    </div>
  );
}

export default MemoryGame;
