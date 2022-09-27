function calcular(tipo, valor){
    if(tipo ==='acao'){
        switch(valor){
            case'*':
            case'-':
            case'+':
            case'/':
            case'.':
            document.getElementById('display').value += valor;
            break;
            case 'c':
            document.getElementById('display').value = '';
            break;

            case '=':
            var result = document.getElementById('display').value;
            document.getElementById('display').value = eval(result);
            break;
        }



    }else if(tipo === 'valor'){
        document.getElementById('display'). value += valor
    }
}