export class CalculadoraService {

  suma(a: number, b: number): number {
    return a + b;
  }

  resta(a: number, b: number): number {
    return a - b;
  }

  multiplicacion(a: number, b: number): number {
    return a * b;
  }

  division(a: number, b: number): number {
    if (b === 0) {
      throw new Error('No se puede dividir entre cero');
    }
    return a / b;
  }

  factorial(n: number): number {
    let r:number = 1;
    for (let i = 1; i <= n; i++) {
      r *= i;
    }
    return r;
  }
}
