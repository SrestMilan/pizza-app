import React from "react";
function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  //   if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  //   else alert("Sorry we're close");
  return (
    <footer>{new Date().toLocaleTimeString()} We're currently open</footer>
  );
}

export default Footer;
