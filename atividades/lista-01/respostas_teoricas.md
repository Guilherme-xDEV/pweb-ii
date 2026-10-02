### 1.Sobre tipagem de dados em linguagens de programação e, especificamente em JavaScript, responda o que se pede:

---

`a) O que caracteriza uma linguagem de tipagem estática? Como a verificação de tipos ocorre em linguagens com tipagem estática?`

Uma linguagem de tipagem estática é aquela em que os tipos das variáveis são determinados e verificados em tempo de compilação, antes da execução do programa.

O processo ocorre durante a compilação e segue os seguintes passos:
1.É escrito o código fonte
2. O compilador analisa as declarações e expressões
3. Ele determina / verifica tipos envolvidos nas operações
4. Caso encontre uma operação incompatível, produz erro de compilação.
5. Somente depois de o código passar por essas verificações que ele pode ser executado.

O JavaScript pelo contrário usa tipagem dinâmica!

---
`b) Quais são os principais benefícios da tipagem estática em termos de performance e segurança?`

Performance, Segurança e Detecção antecipada de erros são os principais benefícos da tipagem estática.

performance: Os tipos são conhecidos durante compilação, logo o compilador pode realizar otimizações com mais informações sobre os dados que o programa usa.

Segurança: Erros são identificados antes que o programa seja executado. Isso permite correção de incompatibilidade.

---
`c) Como funciona a tipagem dinâmica em relação à verificação de tipos em tempo de execução? Quais são os principais desafios de performance enfrentados por linguagens de tipagem dinâmica?`

Em uma linguagem de tipagem dinâmica, os tipos são determinados e verificados em terpo de execução do programa. A variável não possui necessariamente um tipo fixo, ela pode receber valores por diferentes tipos ao longo da execução.

Alguns desafios podem atrapalhar na performance. A verificação em tempo de execução é o que mais pode atrapalhar, além disso, os tipos podem mudar devido a flexibilidade da linguagem, logo não seria correto assumir que uma variável permanecerá somente de um certo tipo. Engines modernas até possuem técnicas como o JIT para reduzir custos, tentando otimizar código.

---
`d) Quais são as diferenças entre linguagens com tipagem forte e fraca?`

tipagem Forte / Fraca : "quão permissiva é a linguagem ao misturar tipos diferentes e realizar conversões"

resposta: A diferença está em como a linguagem trata valores de tipos diferentes quando eles são usados em uma mesma operação.

Uma linguagem dita de tipagem forte tende a impedir operações entre tipos incompatíveis, ou exige conversão explícita.

Uma linguagem de tipagem fraca permite mais conversões implícitas entre tipos distindos.

---
`e) Como linguagens híbridas conseguem combinar características de tipagem estática e dinâmica? Qual o papel da inferência de tipos em linguagens de tipagem estática?`

Uma linguagem pode permitir que algumas partes do programa tenham seus tipos verificados estaticamente, enquanto outras permitem maior flexibilidade e verificações em tempo de execução.
O TypeScript, por exemplo, adiciona um sistema de tipos estáticos ao JavaScript, o compilador do TypeScript pode detectar incompatibilidade de tipos ao reatribuirmos uma variável com tipo diferente, porém o código pode ser mesmo assim compilado e convertido para JavaScript que tem tipagem dinâmica e permite essa operação.

A inferência de tipos permite que linguagens estaticamente tipadas sejam menos verbosas sem abandonar a verificação estática. O kotlin, por exemplo permite escolher determinar ou não o tipo da variável:
val nome: String = "João" ou val nome = "João"

---
f) `Como a linguagem JavaScript lida com a tipagem de dados?`

O JavaScript utiliza tipagem dinâmica e também conversões implícitas entre determinados tipos. Isso significa que variável pode referenciar valores de tipos diferentes, ou seja o valor é que possui um tipo.

portanto é válido:
let valor = 10;
valor = "dez";

Os mecanismos de coerção permitem converter valores automaticamente então algo assim é valido:

let a = 11 + "11" <-- retorna 1111