
let valor
const calcular = document.querySelector('#btCalcular')
let c1
let c2
let k1
let k2
let f1
let f2
const mensagem = document.querySelector('#resultado')
const escolhaDe = document.querySelector('#opcao01')
const escolhaDa = document.querySelector('#opcao02')

calcular.onclick = function calcularTemperatura()
{
    valor = parseFloat(document.querySelector('#temperatura').value)

    //CÁLCULO
    c1 = valor * 1.8 + 32                        //C para F                    
    c2 = valor + 273.15                          //C para K                               
    k1 = valor - 273.15                          //K para C
    k2 = (valor - 273.15) * 1.8 + 32             //K para F                                      
    f1 = (valor - 32) / 1.8                      //F para C
    f2 = (valor - 32) * 0.55 + 273.15            //F para K

    console.log(escolhaDe.options[escolhaDe.selectedIndex].value)
    

        if(escolhaDe.options[escolhaDe.selectedIndex].value=='1' && escolhaDa.options[escolhaDa.selectedIndex].value=='5')
        {
            mensagem.innerHTML="<p>VALOR DA TEMPERATURA DE CELSIUS PARA:</p><p>KELVIN: "+c2.toFixed(2)+"</p>" 
        }
        else if(escolhaDe.options[escolhaDe.selectedIndex].value=='1' && escolhaDa.options[escolhaDa.selectedIndex].value=='6')
        {
            mensagem.innerHTML="<p>VALOR DA TEMPERATURA DE CELSIUS PARA:</p><p>FAHRENHEIT: "+c1.toFixed(2)+"</p>"
        }
        else if(escolhaDe.options[escolhaDe.selectedIndex].value=='2' && escolhaDa.options[escolhaDa.selectedIndex].value=='4')
        {
            mensagem.innerHTML="<p>VALOR DA TEMPERATURA DE KELVIN PARA:</p><p>CELSIUS: "+k1.toFixed(2)+"</p>"
        }
        else if(escolhaDe.options[escolhaDe.selectedIndex].value=='2' && escolhaDa.options[escolhaDa.selectedIndex].value=='6')
        {
            mensagem.innerHTML="<p>VALOR DA TEMPERATURA DE KELVIN PARA:</p><p>FAHRENHEIT: "+k2.toFixed(2)+"</p>"
        }
        else if(escolhaDe.options[escolhaDe.selectedIndex].value=='3' && escolhaDa.options[escolhaDa.selectedIndex].value=='4')
        {
            mensagem.innerHTML="<p>VALOR DA TEMPERATURA DE FAHRENHEIT PARA:</p><p>CELSIUS: "+f1.toFixed(2)+"</p>"
        }
        else if(escolhaDe.options[escolhaDe.selectedIndex].value=='3' && escolhaDa.options[escolhaDa.selectedIndex].value=='5')
        {
            mensagem.innerHTML="<p>VALOR DA TEMPERATURA DE FAHRENHEIT PARA:</p><p>KELVIN: "+f2.toFixed(2)+"</p>"
        }
}
















/*let peso
let altura
let escolha
const calcular = document.querySelector('#btCalcular')
let imc
const mensagem = document.querySelector('#resultado')
calcular.onclick = function calcularIMC()

{
    peso = parseFloat(document.querySelector('#peso').value)
    altura = parseFloat(document.querySelector('#altura').value)
    escolha = document.querySelector('#selecaoGenero').value

    //CÁLCULO
    imc = peso/Math.pow(altura,2)
    switch (escolha){
        case '1':
            if(imc < 18.6)
            {
                mensagem.innerHTML="<p>HOMEM MAGRO</p><p>IMC: "+imc.toFixed(1)+"</p><img src'' alt='homem magro'>"
            }
            else if(imc > 24.9)
            {
                mensagem.innerHTML="<p>HOMEM GORDO</p><p>IMC: "+imc.toFixed(1)+"</p><img src'' alt='homem gordo'>"
            }
            else
            {
                mensagem.innerHTML="<p>HOMEM PESO IDEAL</p><p>IMC: "+imc.toFixed(1)+"</p><img src'' alt='homem peso ideal'>"
            }
        break;
        case '2':
        break;
        case '3':
        break;
        default:
    }

}*/