import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sub-element')
export class SubElement extends LitElement {
    constructor() {
        super();
        console.info("Sub element created.");
    }

    override render() {
        return html`<div>Sub element</div>`;
    }
}