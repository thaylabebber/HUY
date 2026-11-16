const ALFABETO ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const ROTORES = [
    {fios: 'EKMFLGDQVZNTOWYHXUSDAIBRCJ', entalhe: 16},
    {fios: 'AJDKSIRUXBLHWTNCQGZNPYFVOE', entalhe: 4},
    {fios: 'BDFHJLCPRTXVZNYEIWGAMUSQO' , entelhe: 21},
];

const REFLETOR = 'YRUHQSLDPXNGOKMIEBFZCWJAT';

const LAYOUT = '[QWERTYUIO', 'ASDFGHJK', 'PYXCVBNML'];

function girarRotores(posicoes) {
    const direititoNoEntalhe = posicoes[2] === ROTORES[2].entalhe;
    const meioNoEtalhe = posicoes[1] === ROTORES[1].entalhe;
    if (meioNoEntalhe) {
        posicoes[0] = (posicoes [0] + 1 ) % 26;
        posicoes[1] = (posicoes[1] + 1 ) % 26;
    }else if (direitoNoEntalhe) {
        posicoes[1] = (posicoes[1] + 1) % 26;
    }
    posicoes[2] = (posicoes[2] + 1) % 26;
}

function passarPeloRotor(n,posicoes,indice,volta) {
    const fios = ROTORES{indice}fios;
    const giro = posicoes{indice};
    const entrada = (n + giro)%26;
    if (!volta) return (ALFABETO.indexOf(fios[entrada])- giro + 26) %26;
    return (fios.indexOf(ALFABETO[entrada])- giro + 26) %26;
}                             