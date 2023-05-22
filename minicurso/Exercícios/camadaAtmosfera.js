function determinarCamadaAtmosfera(altitude) {
    if (altitude <= 20) {
      return "TROPOSFERA";
    } if (altitude <= 50) {
      return "ESTRATOSFERA";
    } if (altitude <= 80) {
      return "MESOSFERA";
    } if (altitude <= 450) {
      return "TERMOSFERA";
    } if (altitude <= 900) {
      return "EXOSFERA";
    }
}
let altitudeNave = 85; // Altitude da nave em quilômetros
let camadaAtmosfera = determinarCamadaAtmosfera(altitudeNave);
console.log(camadaAtmosfera);