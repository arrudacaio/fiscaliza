import currency from "currency.js";

export const parseToCurrency = (value) => {
    return currency(parseFloat(value.toFixed(2)), {
        separator: ".",
        decimal: ",",
      }).format(false)
}

export const somaValores = (lista) => {
    let total = 0;
    for (let i = 0; i < lista.length; i++) {
      total += lista[i];
    }
    return total;
}