//Inicia lib. do AOS.
AOS.init();

const dataDoEvento = new Date("Dec 12, 2025 19:00:00"); //define o dia do Evento Ficticio.

const timeStampDoEvento = dataDoEvento.getTime(); //Recupera o TimeStamp.

//Função para Trabalhar com intervalo.
const contaAsHoras = setInterval(function() {
    const agora = new Date(); //Pega data atual.
    const timeStampAtual = agora.getTime();//Recupera TimeStamp atual.

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual; //Pega o tempo entre o dia do evento e subtrai com o tempo atual(agora) a cada segundo.


    //Calcular o tempo até o evento.

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    //A função do JS  Math.floor, arrendonda para baixo.

    //Calcula dias até o Evento.
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);

    //O sinal de % retorna o resto da divisão.
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);


    //Inserir conteudo no HTML (SPAN).
    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    //Quando a distancia até o evento for Negativa, limpamos o intervalo e iserimos uma mensagem.
    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras); //Função do JS, clearInterval limpa o intervalo.
        document.getElementById('contador').innerHTML = 'Evento expirado'; //Inseri a mensagem no HTML.
    }

}, 1000);