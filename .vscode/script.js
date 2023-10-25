function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a img

  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a img light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a img normal
    img.setAttribute("src", "./assets/Avatar.png")
  }
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a img light
    img.setAttribute("alt", "teste")
  } else {
    // se tiver sem light mode, manter a img normal
    img.setAttribute(
      "alt",
      "Foto da Rebeca Maffra usando blusa rosa com fundo azul marinho com o queixo apoiando o rosto na mão"
    )
  }
}
