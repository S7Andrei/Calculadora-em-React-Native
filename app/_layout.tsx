import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RootLayout() {
  const [expressao, setExpressao] = useState("");
  const [resultado, setResultado] = useState("");

  function adicionar(valor: string) {
    setExpressao(expressao + valor); //Essa função concatena os valores de strings recebidos. (Onpress envia valor ao adicionar, que é recebido ao valor e a expressao é nulo, fazendo a soma desse valor via string, concatenando eles.)
  }

  function calcular() {
    const partes = expressao.split(" "); //Isso quebra a string em partes, para executar a expressão quando for transformada em número.
    const num1 = Number(partes[0]); //Aqui é o primeiro módulo de string que é transformado em número passado para num1.
    const calc = partes[1]; //Operação em string mesmo.
    const num2 = Number(partes[2]); //Aqui é o segundo módulo de string que é transformado em número passado para num2.

    let res = 0; //Guardar resultado da operação, iniciando em 0.

    if (calc === "+") res = num1 + num2;
    if (calc === "-") res = num1 - num2;
    if (calc === "*") res = num1 * num2;
    if (calc === "/") res = num1 / num2;

    setResultado(String(res));
  }

  function limpar() {
    setExpressao("");
    setResultado("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.visor}>
        <Text style={styles.amostra}>{expressao}</Text>
        <Text style={styles.resultado}>
          {resultado !== "" ? `= ${resultado}` : " "}{" "}
          {/*Se estiver não estiver vazio, mostra. Se estiver, resultado mostra vazio. */}
        </Text>
      </View>

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
