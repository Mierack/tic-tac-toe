 let r1 = ["", "", ""];
      let r2 = ["", "", ""];
      let r3 = ["", "", ""];

      let x = `<img src="icons8-x-48.png"/>`;
      let circle = `<img src="icons8-circle-50.png" alt="">`;

      let move = x;

      const one = () => {
        turn(one, ".js-one", r1, 0);
      };

      const two = () => {
        turn(two, ".js-two", r1, 1);
      };
      const three = () => {
        turn(three, ".js-three", r1, 2);
      };
      const four = () => {
        turn(four, ".js-four", r2, 0);
      };
      const five = () => {
        turn(five, ".js-five", r2, 1);
      };
      const six = () => {
        turn(six, ".js-six", r2, 2);
      };
      const seven = () => {
        turn(seven, ".js-seven", r3, 0);
      };
      const eight = () => {
        turn(eight, ".js-eight", r3, 1);
      };

      const nine = () => {
        turn(nine, ".js-nine", r3, 2);
      };

      activate();

      function turn(func, box, arry, index) {
        if (move === x) {
          arry[index] = "x";
          console.log(r1);
          console.log(r2);
          console.log(r3);
          document.querySelector(box).innerHTML = move;
          document.querySelector(box).removeEventListener("click", func);

          let gameOver = checkWinner();
          if (gameOver) {
            clean();
          }
          move = circle;
        } else {
          arry[index] = "circle";
          console.log(r1);
          console.log(r2);
          console.log(r3);
          document.querySelector(box).innerHTML = move;
          document.querySelector(box).removeEventListener("click", func);

          let gameOver = checkWinner();
          if (gameOver) {
            clean();
          }
          move = x;
        }
      }

      function activate() {
        document.querySelector(".js-one").addEventListener("click", one);
        document.querySelector(".js-two").addEventListener("click", two);
        document.querySelector(".js-three").addEventListener("click", three);
        document.querySelector(".js-four").addEventListener("click", four);
        document.querySelector(".js-five").addEventListener("click", five);
        document.querySelector(".js-six").addEventListener("click", six);
        document.querySelector(".js-seven").addEventListener("click", seven);
        document.querySelector(".js-eight").addEventListener("click", eight);
        document.querySelector(".js-nine").addEventListener("click", nine);
      }

      function checkWinner() {
        //X win conditions
        if (r1[0] === "x" && r1[1] === "x" && r1[2] === "x") {
          displayWinner("x");
          return true;
        } else if (r1[0] === "x" && r2[0] === "x" && r3[0] === "x") {
          displayWinner("x");
          return true;
        } else if (r1[0] === "x" && r2[1] === "x" && r3[2] === "x") {
          displayWinner("x");
          return true;
        } else if (r2[0] === "x" && r2[1] === "x" && r2[2] === "x") {
          displayWinner("x");
          return true;
        } else if (r3[0] === "x" && r3[1] === "x" && r3[2] === "x") {
          displayWinner("x");
          return true;
        } else if (r3[0] === "x" && r2[1] === "x" && r1[3] === "x") {
          displayWinner("x");
          return true;
        } else if (r1[1] === "x" && r2[1] === "x" && r3[1] === "x") {
          displayWinner("x");
          return true;
        } else if (r1[2] === "x" && r2[2] === "x" && r3[2] === "x") {
          displayWinner("x");
          return true;
        } else if (r3[0] === "x" && r2[1] === "x" && r1[2] === "x") {
          displayWinner("x");
          return true;
        }

        // Circle win conditions
        else if (
          r1[0] === "circle" &&
          r1[1] === "circle" &&
          r1[2] === "circle"
        ) {
          displayWinner("circle");
          return true;
        } else if (
          r1[0] === "circle" &&
          r2[0] === "circle" &&
          r3[0] === "circle"
        ) {
          displayWinner("circle");
          return true;
        } else if (
          r1[0] === "circle" &&
          r2[1] === "circle" &&
          r3[2] === "circle"
        ) {
          displayWinner("circle");
          return true;
        } else if (
          r2[0] === "circle" &&
          r2[1] === "circle" &&
          r2[2] === "circle"
        ) {
          displayWinner("circle");
          return true;
        } else if (
          r3[0] === "circle" &&
          r3[1] === "circle" &&
          r3[2] === "circle"
        ) {
          displayWinner("circle");
          return true;
        } else if (
          r3[0] === "circle" &&
          r2[1] === "circle" &&
          r3[2] === "circle"
        ) {
          displayWinner("circle");
          return true;
        } else if (
          r1[1] === "circle" &&
          r2[1] === "circle" &&
          r3[1] === "circle"
        ) {
          displayWinner("circle");
          return true;
        } else if (
          r1[2] === "circle" &&
          r2[2] === "circle" &&
          r3[2] === "circle"
        ) {
          displayWinner("circle");
          return true;
        } else if (
          r1[2] === "circle" &&
          r2[1] === "circle" &&
          r3[0] === "circle"
        ) {
          displayWinner("circle");
          return true;
        }
      }

      function clean() {
        document.querySelector(".js-one").removeEventListener("click", one);
        document.querySelector(".js-two").removeEventListener("click", two);
        document.querySelector(".js-three").removeEventListener("click", three);
        document.querySelector(".js-four").removeEventListener("click", four);
        document.querySelector(".js-five").removeEventListener("click", five);
        document.querySelector(".js-six").removeEventListener("click", six);
        document.querySelector(".js-seven").removeEventListener("click", seven);
        document.querySelector(".js-eight").removeEventListener("click", eight);
        document.querySelector(".js-nine").removeEventListener("click", nine);
      }

      function displayWinner(winner) {
        document.querySelector(".after").classList.add("longer");
        document.querySelector(".result").innerHTML = winner + " Wins";
      }

      document.querySelector(".js-replay").addEventListener("click", () => {
        document.querySelectorAll(".box").forEach((value) => {
          value.innerHTML = "";
        });

        gameOver = false;
        move = x;
        r1 = ["", "", ""];
        r2 = ["", "", ""];
        r3 = ["", "", ""];
        activate();
        document.querySelector(".result").innerHTML = "";
        document.querySelector(".after").classList.remove("longer");
      });