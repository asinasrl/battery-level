let level = document.querySelector(".level");
//HEIGHT - BACKGROUND-IMAGE (linear)
let percentageText = document.querySelector("#percentage");
let chargeStatus = document.querySelector("#status");

navigator.getBattery().then((battery) => {
  uptade = () => {
    let currentBattery = Math.floor(battery.level * 100);

    percentageText.textContent = `${currentBattery}%`;
    /*TEXT IS OK*/

    level.style.height = `${currentBattery}%`;

    window.addEventListener("load", () => {
      if (currentBattery <= 20) {
        level.style.backgroundImage =
          "linear-gradient(90deg, hsl(7, 89%, 46%) 15%, hsl(11, 93%, 68%) 100%)";
      } else if (currentBattery > 20 && currentBattery <= 30) {
        level.style.backgroundImage =
          "linear-gradient(90deg, hsl(22,89%,46%) 15%,hsl(54,90%,68%)100%)";
      } else if (currentBattery > 30 && currentBattery <= 50) {
        level.style.backgroundImage =
          "linear-gradient(90deg,hsl(54,89%,46%) 15%,hsl(92,90%,45%)100%);";
      } else {
        level.style.backgroundImage =
          "linear-gradient(90deg,hsl(92,89%,46%) 15%,hsl(92,90%,68%)100%)";
      }
    });
    /*BATTER LEVEL AND TEXT STATUS METHOD*/

    window.addEventListener("load", () => {
      if (currentBattery <= 20) {
        chargeStatus.innerHTML = `Low Charge <i class="ri-plug-fill"></i>`;
      } else {
        chargeStatus.innerHTML = "";
      }
      //
      //
      //
      let charging = battery.charging;

      if (charging) {
        chargeStatus.innerHTML = `Charging... <i class="ri-battery-2-charge-fill"></i>`;
      } else {
        chargeStatus.innerHTML = "";
      }
      //
      //
      //
      if (currentBattery === 100) {
        charging = false;
        chargeStatus.innerHTML = `Battery Full <i class="ri-battery-charge-fill"></i> `;
      }
    });
    /*LOW BATERY, FULL BATTERY AND CHARGING METHOD */
  };
  uptade();
  battery.addEventListener("chargingchange", uptade);
  battery.addEventListener("levelchange", uptade);
});
