const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

function getMaxGifts(giftsCities, maxGifts, maxCities) {
    // Ordenamos las ciudades por el número de regalos de mayor a menor
    giftsCities.sort((a, b) => b - a);

    let totalRegalos = 0;
    let ciudades = 0;

    // Recorremos las ciudades en orden
    for (const regalosCiudad of giftsCities) {
      if (ciudades >= maxCities) 
        break; // Si hemos visitado el máximo de ciudades, paramos

      if (totalRegalos + regalosCiudad <= maxGifts) {
        totalRegalos += regalosCiudad;
        ciudades += 1;
      } else if (giftsCities[ciudades - 1] < maxGifts) {
        /* Si los regalos en la ciudad actual no caben en la bolsa,
            pero el número total de regalos en la última ciudad visitada es
            menos del máximo permitido, tomamos los regalos restantes */
        totalRegalos += maxGifts - giftsCities[ciudades - 1];
        break;
      }
    }

    return totalRegalos;
  }

  console.log(getMaxGifts(giftsCities, maxGifts, maxCities));