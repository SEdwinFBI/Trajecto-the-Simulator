
const GRAVEDAD = 9.81

export function calcularTrayectoriaParabolica(angulo: number, velocidadInicial: number, masa: number) {

  const anguloRad = (angulo * Math.PI) / 180

  // velocidad
  const vx = velocidadInicial * Math.cos(anguloRad)
  const vy = velocidadInicial * Math.sin(anguloRad)

  // Tiempo de vuelo
  const tiempoVuelo = (2 * vy) / GRAVEDAD

  // Altura máxima 
  const alturaMaxima = (vy * vy) / (2 * GRAVEDAD)

  // Distancia máxima 
  const distanciaMaxima = vx * tiempoVuelo

  // Velocidad final 
  const velocidadFinal = vx

  // puntos
  const puntos: { x: number; y: number }[] = []
  const pasos = 200 
  const dt = tiempoVuelo / pasos

  for (let i = 0; i <= pasos; i++) {
    const t = i * dt
    const x = vx * t
    const y = vy * t - 0.5 * GRAVEDAD * t * t

  
    if (y >= 0) {
      puntos.push({ x, y })
    }
  }

  return {
    puntos,
    tiempoVuelo,
    alturaMaxima,
    distanciaMaxima,
    velocidadFinal,
  }
}
