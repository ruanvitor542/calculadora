function calcular (tipo, valor){
    console.log(tipo, valor)
    if (tipo === 'valor') {
        document.getElementById('tela').value += valor
    } else if (tipo === 'acao'){
        if (valor === 'c') {
            document.getElementById('tela').value = ''
        }

        if (valor === '+' || valor === '-' || valor === '/' || valor === '*' || valor === '.') {
            document.getElementById('tela').value += valor
        }

        if (valor === '=') {
            var valor_campo = document.getElementById('tela').value
            document.getElementById('tela').value = eval(valor_campo)
        }
    }
}