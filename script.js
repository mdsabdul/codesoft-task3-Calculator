let input = document.querySelector("#inputbox");
let button = document.querySelectorAll("button");
let btnarr = Array.from(button)
let string = "";
btnarr.forEach(function (e) {

   e.addEventListener("click", function (event) {

      if (event.target.innerHTML === "DEL") {

         string = string.substring(0, string.length - 1)
         input.value = string;
      } else if (event.target.innerHTML === "AC") {
         string = "";
         input.value = string;
      }
      else if (event.target.innerHTML === "=") {
         string = eval(string);
         input.value = string;
      }
      else {
         string += event.target.innerHTML;
         input.value = string;
      }
   })
})