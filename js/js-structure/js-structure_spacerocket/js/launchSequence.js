// Implement the launch sequence function here and export it as the default export.
import { countdown } from "./core/countdown.js";
import { loadPayload } from "./core/load.js";
import { NFSAT, FISHSAT } from "./payload/satellites.js";
import { fuel } from "./core/fuel.js";
import { liftoff } from "./core/liftoff.js";
import { getRocket } from "./core/rocket.js";
import { deployPayload } from "./core/deploy.js";

export default function launch() {
  //Step 1
  loadPayload(NFSAT);
  loadPayload(FISHSAT);

  //Step 2
  fuel();

  //Step 3
  while (getRocket().countdown < getRocket().requiredCountdown) {
    countdown();
  }

  //Step 4
  liftoff();

  //Step 5
  deployPayload();
}
