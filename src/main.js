class formatNum extends HTMLElement {
  static get observedAttributes() {
    return ['digits', 'num', 'si'];
  }
  
  get num() {
    return this.hasAttribute('num');
  }

  set num(val) {
    if (val) {
      this.setAttribute('num', '');
    } else {
      this.removeAttribute('num');
    }
  }
  
  get digits() {
    return this.hasAttribute('digits');
  }

  set digits(val) {
    if (val) {
      this.setAttribute('digits', '');
    } else {
      this.removeAttribute('digits');
    }
  }
  
  get si() {
    return this.hasAttribute('si');
  }

  set si(val) {
    if (val) {
      this.setAttribute('si', '');
    } else {
      this.removeAttribute('si');
    }
  }
  
  constructor() {
    super();
    let shadowRoot = this.attachShadow({mode: 'open'});
    const t = document.querySelector('#format-num');
    const instance = t.content.cloneNode(true);
    shadowRoot.appendChild(instance);
    this.shadowDOM = shadowRoot;
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    if (this.digits || this.num) {
      this.formatNum();
    }
  }
  
  formatNum() {
    const num = this.getAttribute('num');
    const digits = this.getAttribute('digits');
    const si = this.hasAttribute('si');
    this.shadowDOM.querySelector('slot').textContent = this.format(num, digits, si);
  }

  format(num, digits, si) {
    const unit = {
      normalUnit: [
        { value: 1000000000,  symbol: "B" },
        { value: 1000000,  symbol: "M" },
        { value: 1000,  symbol: "k" }
      ],
      siUnit: [
        { value: 1E18, symbol: "E" },
        { value: 1E15, symbol: "P" },
        { value: 1E12, symbol: "T" },
        { value: 1E9,  symbol: "G" },
        { value: 1E6,  symbol: "M" },
        { value: 1E3,  symbol: "k" }
      ],
    };
    const unitMap = si ? unit.siUnit : unit.normalUnit; 
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    for (let i = 0; i < unitMap.length; i++) {
      if (num >= unitMap[i].value) {
        return (num / unitMap[i].value).toFixed(digits).replace(rx, "$1") + unitMap[i].symbol;
      }
    }
    return num.toFixed(digits).replace(rx, "$1");
  }

}
customElements.define('format-num', formatNum);
