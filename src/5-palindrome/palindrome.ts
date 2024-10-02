export const IsPalindrome = (str: string): boolean => {
  const cleanStr = str.toLowerCase().replace(/\s+/g, ""); // Normaliza a string (ignora espaços e maiúsculas)
  return cleanStr === cleanStr.split("").reverse().join(""); // Verifica se a string é igual à sua versão invertida
};
