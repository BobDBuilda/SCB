class TemplateEngine {
    /**
     * Converts an HTML string into a DOM element.
     * @param {string} htmlString 
     * @param {string} [cssString] - Optional CSS to scope to this element
     * @returns {HTMLElement}
     */
    static create(htmlString, cssString = '') {
        const template = document.createElement('template');
        template.innerHTML = htmlString.trim();
        const element = template.content.firstElementChild;

        if (cssString) {
            const style = document.createElement('style');
            style.textContent = cssString;
            element.appendChild(style);
        }

        return element;
    }

    /**
     * Helper to find elements within a root by their data-ref.
     */
    static getRefs(root) {
        const refs = {};
        root.querySelectorAll('[data-ref]').forEach(el => {
            refs[el.dataset.ref] = el;
        });
        return refs;
    }
}

export { TemplateEngine };