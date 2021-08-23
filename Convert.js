class Convert {
    constructor() {
      console.log("Temperature Converter");
    }
    fromCelcius(to, inputnum) {
      if (to == "cel") {
        return inputnum;
      }
      if (to == "rea") {
        return (4 / 5) * inputnum;
      }
      if (to == "far") {
        return (9 / 5) * inputnum + 32;
      }
    }
    fromReamur(to, inputnum) {
      if (to == "rea") {
        return inputnum;
      }
      if (to == "cel") {
        return (5 / 4) * inputnum;
      }
      if (to == "far") {
        return (9 / 4) * inputnum + 32;
      }
    }
    fromFarenheit(to, inputnum) {
      if (to == "far") {
        return inputnum;
      }
      if (to == "cel") {
        return (5 / 9) * (inputnum - 32);
      }
      if (to == "rea") {
        return (4 / 9) * (inputnum - 32);
      }
    }
  }
  
module.exports = Convert;