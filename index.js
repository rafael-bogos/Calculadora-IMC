const calcular = document.querySelector('.calc')
// Função principal para calcular e retornar o resultado
function imc(event) {
  event.preventDefault()

  const nomeInput = document.getElementById('nome')
  const nome = capitalizeFirstLetter(nomeInput.value)
  const altura = parseFloat(
    document.getElementById('altura').value.replace(',', '.')
  )
  const peso = parseFloat(
    document.getElementById('peso').value.replace(',', '.')
  )
  const resultado = document.getElementById('result')

  if (isValidInput(nome, altura, peso)) {
    // Calculo IMC
    const valorIMC = (peso / (altura * altura)).toFixed(1)

    resultado.classList.add('resp')

    let classificacao = ''

    if (valorIMC < 18.5) {
      classificacao = 'abaixo do peso'
    } else if (valorIMC < 25) {
      classificacao = 'com peso ideal, parabéns!'
    } else if (valorIMC < 30) {
      classificacao = 'levemente acima do peso.'
    } else if (valorIMC < 35) {
      classificacao = 'com obesidade grau I.'
    } else if (valorIMC < 40) {
      classificacao = 'com obesidade grau II.'
    } else {
      classificacao = 'com obesidade grau III. Cuidado!!'
    }

    resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`
  } else {
    resultado.textContent = 'Preencha todos os campos!'
    resultado.classList.add('resp')
  }
}

// Validar dados
function isValidInput(nome, altura, peso) {
  return nome !== '' && !isNaN(altura) && !isNaN(peso) && altura > 0 && peso > 0
}

function capitalizeFirstLetter(nome) {
  return nome.charAt(0).toUpperCase() + nome.slice(1)
}

calcular.addEventListener('click', imc)
