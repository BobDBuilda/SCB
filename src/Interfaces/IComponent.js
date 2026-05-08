class IComponent {
    constructor() {
        if (this.constructor === IComponent) {
            throw new Error("Interface 'IComponent' cannot be instantiated directly.");
        }
    }

    /**
     * Renders the component and returns the root element.
     * @returns {HTMLElement}
     */
    render() {
        throw new Error("Method 'render()' must be implemented.");
    }
}

export { IComponent };
