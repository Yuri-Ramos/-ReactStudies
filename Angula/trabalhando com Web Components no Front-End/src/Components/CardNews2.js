class CardNews2 extends HTMLElement {
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
        autor.textContent = "by " + (this.getAttribute("autor") || "Anonymous");
        const link = document.createElement("a");
        link.textContent = this.getAttribute("link");
        link.href = (this.getAttribute("link-url") || "#");
        const newsContent = document.createElement("p");
        newsContent.textContent= (this.getAttribute("newsContent") || "Sem noticias no momento");
        
        cardLeft.appendChild( autor);
        cardLeft.appendChild(link);
        cardLeft.appendChild(newsContent);
      
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");
        const newsImage = document.createElement("img");
        newsImage.src= this.getAttribute("newsImage");
        cardRight.appendChild(newsImage);
        
        
        
        
        
        
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);


        return componentRoot
     }
    

    styles() {
        const style = document.createElement("style");
        style.textContent = `
        
        
        
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', sans-serif;
           
        }
        
        .card{
            width: 80%;
           
            /* border: 1px solid black; */
            display: flex;
            flex-direction: row;
            -webkit-box-shadow: 10px 10px 21px 0px rgba(0,0,0,0.48);
            -moz-box-shadow: 10px 10px 21px 0px rgba(0,0,0,0.48);
            box-shadow: 10px 10px 21px 0px rgba(0,0,0,0.48);
            flex-direction: row;
            justify-content: space-between;
        }
        .card__left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: .5rem;
        }
        .card__left > span{
            font-weight: 400;
         }
        .card__left >a{
           margin-top: 1rem;
           font-size: 1.5rem;
           color:black;
           text-decoration: none;
           font-weight: bold;
        }
        .card__left >p{
            color:gray;
           margin-top: 1rem;
        
        }
        
        
        
        
        `;
        return style
    }

}

customElements.define('card-news',CardNews2);
