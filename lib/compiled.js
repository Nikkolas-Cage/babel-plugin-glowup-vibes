"use strict";

require("core-js/modules/es.promise.js");
async function sis() {
  await vibeCheck;
}
function vibeCheck() {
  const theVibe = false;
  const rizz = confirm("u simpin'?") ? false : true;
  const depression = true;
  const myGuy = {
    heat: "Yuh I'm droppin dis heat ❗❗",
    letHimCook: function letHimCook() {
      return this.heat;
    }
  };
  console.debug("The crow screams murder");
  console.log(myGuy.letHimCook());
  console.warn("the vibes might be off 💀");
  assert(typeof sis === "function");
  if (!theVibe) {
    const severalSeats = new Array(2);
    severalSeats.fill(true);
    if (!rizz) {
      throw new Error("mid af");
    } else {
      console.error("yikes fam");
      throw new Error("major L");
    }
  } else {
    if (depression === true) {
      console.info("you should talk to someone about that queen 👑");
      return depression;
    }
    console.log("SLAY".toLowerCase());
    return null;
  }
}
module.exports = vibeCheck;
