import io from 'socket.io-client';
import convertToSimpleArray from './../../utils/convertToSimpleArray.js';

import Table from './../../Components/Table/Table';

export default class App {
    constructor(server) {
        this.socket = io(server);
        this.rootNode = document.querySelector('#root');
        this.table = new Table(null);

        fetch('/data')
            .then(response => response.json())
            .then(response => {
                this.table.setState(convertToSimpleArray(response.data));
                this.rootNode.innerHTML = this.render();
            });
    }

    init() {
        this.socket.on('data', (response) => {
            this.table.setState(convertToSimpleArray(response.data));
            this.rootNode.innerHTML = this.render();
        });
    }

    render() {
        return `
            <div class="app">
                ${this.table.render()}
            </div>
        `;
    }
}
