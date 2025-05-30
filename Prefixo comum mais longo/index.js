/**
 * Encontra o maior prefixo comum entre uma lista de strings.
 * @param {string[]} strs - Lista de strings.
 * @returns {string} O maior prefixo comum.
 */
function longestCommonPrefix(strs) {
  if (!strs.length) return ""; // Lista vazia

  // Vamos assumir o prefixo comum inicial como a primeira palavra inteira
  let prefixo = strs[0];

  // Vamos percorrer as outras palavras
  for (let i = 1; i < strs.length; i++) {
    // Enquanto a palavra atual não começa com o prefixo atual
    while (strs[i].indexOf(prefixo) !== 0) {
      // Reduzimos o prefixo removendo o último caractere
      prefixo = prefixo.substring(0, prefixo.length - 1);
      // Se o prefixo ficar vazio, significa que não existe prefixo comum
      if (!prefixo) return "";
    }
  }

  return prefixo;
}

// Exemplos de uso:
console.log(longestCommonPrefix(["flor", "fluxo", "voo"])); // Saída: "fl"
// console.log(longestCommonPrefix(["cachorro", "carro de corrida", "carro"])); // Saída: ""
