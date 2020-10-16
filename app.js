"use strict";

const Homey = require("homey");

// Enable zigbee-cluster logging
 const { Util } = require('homey-zigbeedriver');
 Util.debugZigbeeClusters(true);

class DresdenZigbeeApp extends Homey.App {
  onInit() {
    this.log("Dresden Zigbee app initiating...");
  }
}

module.exports = DresdenZigbeeApp;
