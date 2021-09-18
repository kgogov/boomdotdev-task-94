import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();

    this.emojis = [];
    this.banana = "🍌";
    this.mainDiv = document.querySelector('#emojis');

    this.emit(Application.events.READY);
  }

  clearEmojis() {
    this.mainDiv.textContent = '';
  }

  setEmojis(emojis) {
    this.emojis = emojis;

    if (!this.mainDiv.textContent) {

      this.emojis.forEach(item => {
        const p = document.createElement('p');
        const text = document.createTextNode(item);

        p.appendChild(text);
        this.mainDiv.appendChild(p);
      });
    }
  }

  addBananas() {
    const emojis = this.emojis.map(monkey => monkey + this.banana);
    this.setEmojis(emojis);
  }
}