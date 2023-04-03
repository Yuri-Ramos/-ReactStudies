class TituloDinamico extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" })
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "by " + this.getAttribute("autor") || "Anonymous";
        const link = document.createElement("a");
        const newsContent = document.createElement("p");
        
        cardLeft.appendChild(link);
        cardLeft.appendChild( autor);
        cardLeft.appendChild(newsContent);
        
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");
        const newsImage = document.createElement("img");
        cardRight.appendChild(newsImage);
        
        
        
        
        
        
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);


        return componentRoot
     }
    

    styles() {}

}

customElements.define('titulo-dinamico',TituloDinamico);
