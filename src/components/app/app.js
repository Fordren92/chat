

export default class App {
    constructor({
        el,
        data,
    }){
        this.el = el;
    }


    render(){
        this.el.append(`
            <h1>Приложение запущено!</h1>
        `);
    }
}