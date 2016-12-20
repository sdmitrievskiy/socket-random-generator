import './Table.styl';

export default class Table {
    constructor(initState) {
        this.prevState = null;
        this.state = initState;
    }

    setState(state) {
        this.prevState = this.state;
        this.state = state;
    }

    renderOptions() {
        return this.state.reduce((html, cell, index) => {
            let cssClass = '';

            if (this.prevState != null) {
                if (cell < this.prevState[index]) {
                    cssClass = 'cell_down';
                }
                else if (cell > this.prevState[index]) {
                    cssClass = 'cell_up';
                }
            }

            const cellHTML = `
                <div class='cell ${cssClass}'>
                    ${this.state[index]}
                </div>
            `;

            return html + cellHTML;
        }, '');
    }

    render() {
        return (`
            <div class='table'>
                ${this.renderOptions()}
            </div>
        `);
    }
}
