class HelloWorld extends HTMLElement {
    constructor(){
      super();
      this.root = this.attachShadow({ mode: "open" });
    }
    connectedCallback(){
      this.init();
    }
    init(){
      this.root.innerHTML = `<h1>Hello World!</h1>`;
    }
  }
  
  window.customElements.define("hello-world", HelloWorld);