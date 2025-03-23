async function gerarFrase() {
  const frase = await fetch("https://api.kanye.rest").then(res => res.json());
  return frase.quote;
}

const button = document.querySelector("button");

button.addEventListener("click", async () => {
  document.querySelector(".frase").innerHTML = `"${await gerarFrase()}"`;
})
