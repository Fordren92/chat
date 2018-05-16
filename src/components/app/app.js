

export default class App {
    constructor({
        el,
        data,
    }){
        this.el = el;
    }


    render(){
        this.el.innerHTML = `
            <h1>Приложение запущено!</h1>
        `;
    }
}