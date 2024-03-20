import listaDeFrutas from "../dados/dados.js";
import input from 'readline-sync';

function forca(){

    const embaralhar = listaDeFrutas.sort(() => Math.random() - 0.5);
    const frutaEscolhida = embaralhar[0];
    let FrutaOculta = frutaEscolhida[0] + " _".repeat(frutaEscolhida.length - 1);
    let chances = 5;

    console.log('----------JOGO DA FORCA----------\n');
    console.log(`Nome de fruta com ${frutaEscolhida.length} letras: \n`);
    
    while(chances > 0 && FrutaOculta.includes(" _")){

        console.log(FrutaOculta);  
        let letra = input.question("Digite uma letra: ");
        
        if(frutaEscolhida.includes(letra)){
            console.log("Letra correta! \n");
        } else{
            console.log("Letra incorreta! você tem " + (chances - 1) + " chances!\n");
            chances --;
        }

        for(let i = 0; i < frutaEscolhida.length; i++){
            if(letra === frutaEscolhida[i]){
               FrutaOculta = FrutaOculta.slice(0,2*i) + letra + FrutaOculta.slice(2*i + 1);
            }
        }

        if(!FrutaOculta.includes(" _")){
            console.log("A palavra é: " + FrutaOculta.replaceAll(" ", ""));
            console.log("\n----------você ganhou!!!----------\n");
        } else if(chances == 0){
            console.log("A palavra era: " + frutaEscolhida);
            console.log("\n----------voce perdeu!!!----------\n");
        }

    }
   

};

export default forca;