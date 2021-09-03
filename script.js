
const resultado = document.getElementById('resultado');


var precosDDD = {
    preco1: 1.90,
    preco2: 2.90,
    preco3: 1.70,
    preco4: 2.70,
    preco5: 0.90,
    preco6: 1.90,
}




function CALCULO(){
const plano = document.getElementById('plano').value;
const resultado = document.getElementById('resultado');

if (plano == '30'){
    faleMais30();
    semPlano();
    console.log('30');
    }else if (plano == '60'){
        faleMais60();
        semPlano();
        console.log('60');
    }else if (plano == '120'){
        faleMais120();
        semPlano();
        console.log('120');
    }else{
        resultado.textContent = 'Digite numeros válidos!'
        resultado2.textContent = 'Digite numeros válidos!'
    }
}




calcular.addEventListener('click', CALCULO);


function faleMais30(){
const origem = document.getElementById('origem').value;
const destino = document.getElementById('destino').value;
const min = document.getElementById('min').value;
const resultado = document.getElementById('resultado');


    if(origem !== '' && destino !== ''){
        
        // CALCULO
        if(origem == '011' && destino == '016'){
        const conta = (min - 30)*(precosDDD.preco1+(precosDDD.preco1*(10/100)));
        resultado.textContent = `Com o plano: Você ira pagar ${conta.toFixed(2)} R$`
    }else if(origem == '016' && destino == '011'){
        const conta = (min - 30)*(precosDDD.preco2+(precosDDD.preco2*(10/100)));
        resultado.textContent = `Com o plano: Você ira pagar ${conta.toFixed(2)} R$`
    }else if(origem == '011' && destino == '017'){
        const conta = (min - 30)*(precosDDD.preco3+(precosDDD.preco3*(10/100)));
        resultado.textContent = `Com o plano: Você ira pagar ${conta.toFixed(2)} R$`
    }else if(origem == '017' && destino == '011'){
        const conta = (min - 30)*(precosDDD.preco4+(precosDDD.preco4*(10/100)));
        resultado.textContent = `Com o plano: Você ira pagar ${conta.toFixed(2)} R$`
    }else if(origem == '011' && destino == '018'){
        const conta = (min - 30)*(precosDDD.preco5+(precosDDD.preco5*(10/100)));
        resultado.textContent = `Com o plano: Você ira pagar ${conta.toFixed(2)} R$`
    }else if(origem == '018' && destino == '011'){
        const conta = (min - 30)*(precosDDD.preco6+(precosDDD.preco6*(10/100)));
        resultado.textContent = `Com o plano: Você ira pagar ${conta.toFixed(2)} R$`
    }


    }else{
        
        resultado.textContent = 'Digite numeros válidos!'
    }

}

function faleMais60(){
    const origem = document.getElementById('origem').value;
    const destino = document.getElementById('destino').value;
    const min = document.getElementById('min').value;
    const resultado = document.getElementById('resultado');
    
        if(origem !== '' && destino !== ''){
            // CALCULO
            if(origem == '011' && destino == '016'){
            const conta = (min - 60)*(precosDDD.preco1+(precosDDD.preco1*(10/100)));
            resultado.textContent = `Com o plano: Você ira pagar ${conta.toFixed(2)} R$`
        }else if(origem == '016' && destino == '011'){
            const conta = (min - 60)*(precosDDD.preco2+(precosDDD.preco2*(10/100)));
            resultado.textContent = `Com o plano: Você ira pagar ${conta.toFixed(2)} R$`
        }else if(origem == '011' && destino == '017'){
            const conta = (min - 60)*(precosDDD.preco3+(precosDDD.preco3*(10/100)));
            resultado.textContent = `Com o plano: Você ira pagar ${conta.toFixed(2)} R$`
        }else if(origem == '017' && destino == '011'){
            const conta = (min - 60)*(precosDDD.preco4+(precosDDD.preco4*(10/100)));
            resultado.textContent = `Com o plano: Você ira pagar ${conta.toFixed(2)} R$`
        }else if(origem == '011' && destino == '018'){
            const conta = (min - 60)*(precosDDD.preco5+(precosDDD.preco5*(10/100)));
            resultado.textContent = `Com o plano: Você ira pagar ${conta.toFixed(2)} R$`
        }else if(origem == '018' && destino == '011'){
            const conta = (min - 60)*(precosDDD.preco6+(precosDDD.preco6*(10/100)));
            resultado.textContent = `Com o plano: Você ira pagar ${conta.toFixed(2)} R$`
        }
    
    
        }else{
            
            resultado.textContent = 'Digite numeros válidos!'
        }
    
    
    }

    function faleMais120(){
        const origem = document.getElementById('origem').value;
        const destino = document.getElementById('destino').value;
        const min = document.getElementById('min').value;
        const resultado = document.getElementById('resultado');
        
            if(origem !== '' && destino !== ''){
                // CALCULO
                if(origem == '011' && destino == '016'){
                const conta = (min - 120)*(precosDDD.preco1+(precosDDD.preco1*(10/100)));
                resultado.textContent = `Com o plano: Você ira pagar ${conta.toFixed(2)} R$`
            }else if(origem == '016' && destino == '011'){
                const conta = (min - 120)*(precosDDD.preco2+(precosDDD.preco2*(10/100)));
                resultado.textContent = `Com o plano: Você ira pagar ${conta.toFixed(2)} R$`
            }else if(origem == '011' && destino == '017'){
                const conta = (min - 120)*(precosDDD.preco3+(precosDDD.preco3*(10/100)));
                resultado.textContent = `Com o plano: Você ira pagar ${conta.toFixed(2)} R$`
            }else if(origem == '017' && destino == '011'){
                const conta = (min - 120)*(precosDDD.preco4+(precosDDD.preco4*(10/100)));
                resultado.textContent = `Com o plano: Você ira pagar ${conta.toFixed(2)} R$`
            }else if(origem == '011' && destino == '018'){
                const conta = (min - 120)*(precosDDD.preco5+(precosDDD.preco5*(10/100)));
                resultado.textContent = `Com o plano: Você ira pagar ${conta.toFixed(2)} R$`
            }else if(origem == '018' && destino == '011'){
                const conta = (min - 120)*(precosDDD.preco6+(precosDDD.preco6*(10/100)));
                resultado.textContent = `Com o plano: Você ira pagar ${conta.toFixed(2)} R$`
            }
        
        
            }else{
                
                resultado.textContent = 'Digite numeros válidos!'
            }
        
        }

function semPlano(){

    const origem = document.getElementById('origem').value;
        const destino = document.getElementById('destino').value;
        const min = document.getElementById('min').value;
        const resultado2 = document.getElementById('resultado2');
        
            if(origem !== '' && destino !== ''){
                // CALCULO
                if(origem == '011' && destino == '016'){
                const conta = min * precosDDD.preco1;
                resultado2.textContent = `Sem o plano: Você ira pagar ${conta.toFixed(2)} R$`
            }else if(origem == '016' && destino == '011'){
                const conta = min * precosDDD.preco2;
                resultado2.textContent = `Sem o plano: Você ira pagar ${conta.toFixed(2)} R$`
            }else if(origem == '011' && destino == '017'){
                const conta = min * precosDDD.preco3;
                resultado2.textContent = `Sem o plano: Você ira pagar ${conta.toFixed(2)} R$`
            }else if(origem == '017' && destino == '011'){
                const conta = min * precosDDD.preco4;
                resultado2.textContent = `Sem o plano: Você ira pagar ${conta.toFixed(2)} R$`
            }else if(origem == '011' && destino == '018'){
                const conta = min * precosDDD.preco5;
                resultado2.textContent = `Sem o plano: Você ira pagar ${conta.toFixed(2)} R$`
            }else if(origem == '018' && destino == '011'){
                const conta = min * precosDDD.preco6;
                resultado2.textContent = `Sem o plano: Você ira pagar ${conta.toFixed(2)} R$`
            }
            }else{
                
                resultado2.textContent = 'Digite numeros válidos!'
            }
}
