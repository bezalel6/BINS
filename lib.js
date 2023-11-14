document.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.key == "F2") {
    let e;
    if (
      (e = document.querySelector(".image")) ||
      (e = document.querySelector("image"))
    ) {
      if (e.style.scale != "2") {
        document.body.style.overflow = "hidden";
        e.style.scale = "2";
        console.log("set scale to 2");
      } else {
        e.style.scale = "1";
        document.body.style.overflow = "auto";

        console.log("set scale back to 1");
      }
    }
  }
});
