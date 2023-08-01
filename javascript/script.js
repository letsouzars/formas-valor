// Retangulo
function calcularMultiplicacao() {
    // Solicita ao usuário o primeiro valor
    let valor1 = Number(prompt("Informe o primeiro valor:"));



    // Solicita ao usuário o segundo valor
    let valor2 = Number(prompt("Informe o segundo valor:"));


    // Calcula a multiplicação dos valores
    let resultado = valor1 * valor2;

    // Exibe o resultado em uma caixa de alerta
    alert("O resultado da área do retângulo é: " + resultado);
    document.getElementById('a_ret').innerHTML=resultado
  }

//   Triangulo

function calcularAreaTriangulo() {
    // Solicita a base do triângulo ao usuário
    let base = Number(prompt("Informe a base do triângulo:"));


    // Solicita a altura do triângulo ao usuário
    let altura = Number(prompt("Informe a altura do triângulo:"));


    // Calcula a área do triângulo (base * altura / 2)
    let area = (base * altura) / 2;

    // Exibe o resultado em uma caixa de alerta
    alert("A área do triângulo é: " + area + "");

   
  }

//   Circulo
function calcularAreaCirculo() {
    // Solicita o raio do círculo ao usuário
    let raio = Number(prompt("Informe o raio do círculo:"));

    // Calcula a área do círculo (pi * raio^2)
    const pi = Math.PI;
    let area = pi * raio * raio;

    // Exibe o resultado em uma caixa de alerta
    alert("A área do círculo é: " + area + "");
  }

//   Trapezio
function calcularAreaTrapezio() {
    // Solicita a medida da base maior do trapézio ao usuário
    let baseMaior = Number(prompt("Informe a medida da base maior do trapézio:"));

    // Solicita a medida da base menor do trapézio ao usuário
    let baseMenor = Number(prompt("Informe a medida da base menor do trapézio:"));

    // Solicita a altura do trapézio ao usuário
    let altura = Number(prompt("Informe a altura do trapézio:"));

    // Calcula a área do trapézio ((baseMaior + baseMenor) * altura / 2)
    let area = ((baseMaior + baseMenor) * altura) / 2;

    // Exibe o resultado em uma caixa de alerta
    alert("A área do trapézio é: " + area + " ");
  }

//   Losango
function calcularAreaLosango() {
    // Solicita a medida da diagonal maior do losango ao usuário
    let diagonalMaior = Number(prompt("Informe a medida da diagonal maior do losango:"));

    // Solicita a medida da diagonal menor do losango ao usuário
    let diagonalMenor = Number(prompt("Informe a medida da diagonal menor do losango:"));


    // Calcula a área do losango (diagonalMaior * diagonalMenor / 2)
    let area = (diagonalMaior * diagonalMenor) / 2;

    // Exibe o resultado em uma caixa de alerta
    alert("A área do losango é: " + area + " unidades de área.");
  }