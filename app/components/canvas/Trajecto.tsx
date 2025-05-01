import type { RootState } from '@/store/store';
import { calcularTrayectoriaParabolica } from '@/utils/calculos';
import React, { useEffect, useMemo, useRef, useState, type FC } from 'react'
import { useSelector } from 'react-redux';

type propsTrajecto = {

}

const Trajecto: FC<propsTrajecto> = () => {
  const canvasTrajecto = useRef<HTMLCanvasElement>(null);
  const domIndex = useRef<number>(0);
  const frameId = useRef<number>(0);
  const parameters = useSelector((state: RootState) => state.simulator)

  const [puntos, setPuntos] = useState<{ x: number, y: number }[]>([
    {
      x: 0,
      y: 0
    }
  ])
  const [alturaMaxima, setAlturaMaxima] = useState<number>(0)
  const [distanciaMaxima, setDistanciaMaxima] = useState<number>(0)
  const [tiempoVuelo, setTiempoVuelo] = useState<number>(0)
  const [velocidadFinal, setVelocidadFinal] = useState<number>(0)
  const [tipoMovimiento, setTipoMovimiento] = useState<number>(1)



  //  cálculos de trayectoria
  useEffect(() => {
    const { puntos: p, alturaMaxima: hf, distanciaMaxima: df, tiempoVuelo: tf, velocidadFinal: vf } = calcularTrayectoriaParabolica(
      parameters.grade,
      parameters.speed,
      parameters.kg
    );
    setPuntos(p);
    setAlturaMaxima(hf);
    setDistanciaMaxima(df);
    setTiempoVuelo(tf);
    setVelocidadFinal(vf)
    setTipoMovimiento(parameters.type)

  
  }, [parameters])

  // iniciales
  const { escala, width, height } = useMemo(() => {
    const parentWidth = 600; 
    const parentHeight = 400;
    
    const margen = 40;
    const espacioDisponibleX = parentWidth - margen * 2;
    const espacioDisponibleY = parentHeight - margen * 2;
    
    let escalaBase = 1;
    if (distanciaMaxima > 0 && alturaMaxima > 0) {
      escalaBase = Math.min(
        espacioDisponibleX / distanciaMaxima,
        espacioDisponibleY / alturaMaxima
      );
    }
    
    return {
      escala: escalaBase * 1.07,
      width: parentWidth,
      height: parentHeight
    };
  }, [distanciaMaxima, alturaMaxima]);

  // animacion
  useEffect(() => {
    const canvas = canvasTrajecto.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;


    canvas.width = width;
    canvas.height = height;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // bordes arriba y abajo
      ctx.strokeStyle = "#e5e7eb";
      ctx.lineWidth = 2;

      // Eje X 
      ctx.beginPath();
      ctx.moveTo(20, height - 20);
      ctx.lineTo(width - 20, height - 20);
      ctx.stroke();

      // Eje Y
      ctx.beginPath();
      ctx.moveTo(20, height - 20);
      ctx.lineTo(20, 20);
      ctx.stroke();

      // posicion
      const calcularPosicion = (punto: { x: number; y: number }) => {
        let x, y;
        if (tipoMovimiento == 2 || tipoMovimiento == 3) {
          x = width / 2;
          y = height - (punto.y * (escala) + 20);
        } else {
          x = punto.x * escala + 20;
          y = height - (punto.y * escala + 20);
        }
        return { x, y };
      };

      // Dibujar 
      ctx.beginPath();
      ctx.strokeStyle = "white";
      ctx.lineWidth = 1;

      puntos.forEach((punto, i) => {
        const { x, y } = calcularPosicion(punto);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();

      // circulo
      if (domIndex.current < puntos.length) {
        const punto = puntos[domIndex.current];
        const { x, y } = calcularPosicion(punto);

        ctx.beginPath();
        ctx.arc(x, y, 12, 0, Math.PI * 2);
        ctx.fillStyle = "cyan";
        ctx.fill();
      }

      domIndex.current = (domIndex.current + 1) % puntos.length;
      frameId.current = requestAnimationFrame(animate);
    };

    frameId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId.current);
  }, [escala, height, puntos, width, parameters]);

  return (
    <div>
      <canvas
        className="w-full h-full"
        ref={canvasTrajecto}
      />
      <div className='text-center justify-center content-center'>
       <p> Altura maxima: <span className='text-cyan-400'>{alturaMaxima.toFixed(2)}m</span>,
        Distancia Maxima: <span className='text-cyan-400'>{distanciaMaxima.toFixed(2)}m</span></p>
       <p> Tiempo de vuelo: <span className='text-cyan-400'>{tiempoVuelo.toFixed(2)}s</span>, 
        Velocidad Final X: <span  className='text-cyan-400' >{velocidadFinal.toFixed(2)}m/s</span></p>
      </div>
    </div>
  );
};

export default Trajecto;