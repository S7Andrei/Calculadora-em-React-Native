# Calculadora-em-React-Native

Desafio do professor Hugo. implementar uma calculadora em React-Native.

Interface do protótipo

<img width="300" height="400" alt="image" src="https://github.com/user-attachments/assets/e60efdac-3107-42bb-97fd-85711b088c0f" />

Interface do sistema desenvolvido
![Image alt](https://github.com/S7Andrei/Calculadora-em-React-Native/blob/f8f466cbd4361aa43d5eaf7f1ad38d709cfb4d6a/assets/images/AppCalculadoraAndrei.png)

# Explicação

Funcionalidade

```
//Essa função concatena os valores de strings recebidos. (Onpress envia valor ao adicionar, que é recebido ao valor e a expressao é nulo, fazendo a soma desse valor via string, concatenando eles.)
  function adicionar(valor: string) {
    setExpressao(expressao + valor); 
  }
```

```
 function calcular() {
    const partes = expressao.split(" "); 
    const num1 = Number(partes[0]); //Aqui é o primeiro módulo de string que é transformado em número passado para num1.
    const calc = partes[1]; //Operação em string mesmo.
    const num2 = Number(partes[2]); //Aqui é o segundo módulo de string que é transformado em número passado para num2.

    let res = 0; //Guardar resultado da operação, iniciando em 0.

    //Os valores de operaçóes em "calc" irá averiguar igualando para se comparar com a operação devida, aceitando a devida operação é realizado o cálculo e armazenado em "res".

    if (calc === "+") res = num1 + num2;
    if (calc === "-") res = num1 - num2;
    if (calc === "*") res = num1 * num2;
    if (calc === "/") res = num1 / num2;

    setResultado(String(res)); //res contém o resultado do cálculado que irá instanciar para resultado.
  }
```

```
// Função limpar atualiza o estado de Expressão e Resultado para nulo.
  function limpar() {
    setExpressao("");
    setResultado(""); 
  }                 
```

Arquitetura

```
//
return (
    <View style={styles.container}> 
      <View style={styles.visor}> //Campo de valores em exibição.
        <Text style={styles.amostra}>{expressao}</Text>//Campo dos valores a serem inseridos, expressão irá renderizar.
        <Text style={styles.resultado}>
          {resultado !== "" ? `= ${resultado}` : " "}{" "}
          {/* Este campo mostra o resultado da operação. Se não estiver vazio, o resultado aparece. Se o resultado estiver vazio, resultado mostra vazio. */}
        </Text>
      </View>
```

A arquitetura dos botões estão dividos em rows verticais, definindo 4 campos de pressionamento e seus devidos valores de números contendo no quarto campo o símbolo de operação.  

Utilizado a tag "TouchableOpacity" para um campo de pressionamento de ação, campos texts para strings. Função (OnPress) para envio dos valores. 
```
<View style={styles.linha}>
        <TouchableOpacity style={styles.botao} onPress={() => adicionar("7")}>
          <Text style={styles.textoestilo}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => adicionar("8")}>
          <Text style={styles.textoestilo}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => adicionar("9")}>
          <Text style={styles.textoestilo}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botaoCalc}
          onPress={() => adicionar(" / ")} //Pulo do gato, contém espaçamento aos valores para funcionar ao split.
        >
          <Text style={styles.textoestilo}>/</Text>
        </TouchableOpacity>
      </View>
```
Assim por diante aos outros
```
      <View style={styles.linha}>
        <TouchableOpacity style={styles.botao} onPress={() => adicionar("4")}>
          <Text style={styles.textoestilo}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => adicionar("5")}>
          <Text style={styles.textoestilo}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => adicionar("6")}>
          <Text style={styles.textoestilo}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botaoCalc}
          onPress={() => adicionar(" * ")}
        >
          <Text style={styles.textoestilo}>X</Text>
        </TouchableOpacity>
      </View>
```

```
<View style={styles.linha}>
        <TouchableOpacity style={styles.botao} onPress={() => adicionar("1")}>
          <Text style={styles.textoestilo}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => adicionar("2")}>
          <Text style={styles.textoestilo}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => adicionar("3")}>
          <Text style={styles.textoestilo}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botaoCalc}
          onPress={() => adicionar(" - ")}
        >
          <Text style={styles.textoestilo}>-</Text>
        </TouchableOpacity>
      </View>
```

```
<View style={styles.linha}>
        <TouchableOpacity style={styles.botao} onPress={limpar}>
          <Text style={styles.textoestilo}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => adicionar("0")}>
          <Text style={styles.textoestilo}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={calcular}>
          <Text style={styles.textoestilo}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botaoCalc}
          onPress={() => adicionar(" + ")}
        >
          <Text style={styles.textoestilo}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
```

Estilização

Campo com as configurações e suas devidas estilizações, sendo exportada como styles para o módulo de indicativo para importar a classe devidamente criada.
```
const styles = StyleSheet.create({
  container: {
    marginTop: 230,
  },

  visor: {
    height: 90,
    justifyContent: "center",
    marginBottom: 15,
    backgroundColor: "#c9c8c8ff",
    borderRadius: 10,
    marginHorizontal: 20,
    paddingVertical: 10,
  },

  amostra: {
    fontSize: 18,
    alignSelf: "flex-end",
    marginRight: 10,
    color: "#747373",
  },

  resultado: {
    fontSize: 32,
    alignSelf: "flex-end",
    marginRight: 10,
    color: "#000000",
  },

  linha: {
    flexDirection: "row",
    justifyContent: "center",
  },

  botao: {
    backgroundColor: "#bcbfc0",
    margin: 5,
    padding: 20,
    width: 65,
    alignItems: "center",
    borderRadius: 8,
  },

  botaoCalc: {
    backgroundColor: "#00cbff",
    margin: 5,
    padding: 20,
    width: 65,
    alignItems: "center",
    borderRadius: 8,
  },

  textoestilo: {
    fontSize: 16,
    fontWeight: "600",
  },
});
```

