class Router {
    constructor(rootElement) {
        this.root = rootElement || document.querySelector('[name="Main"]');
        this.routes = new Map();
    }

    register(path, handler) {
        this.routes.set(path, handler);
    }

    goto(path) {
        history.pushState({}, "", path);
        this.render(path);
    }

    render(path = location.pathname) {
        const handler = this.routes.get(path) || this.routes.get('/404');
        if (!handler) {
            this.root.innerHTML = '<h1>404 Not Found</h1>';
            return;
        }

        this.root.replaceChildren(handler());
    }

    start() {
        window.addEventListener('popstate', () => {
            this.render(location.pathname);
        });

        document.addEventListener("click", (e) => {
            const link = e.target.closest("a");

            if (!link || 
                link.target === "_blank" || 
                e.ctrlKey || 
                e.metaKey || 
                e.shiftKey || 
                e.altKey) return;

            const url = new URL(link.href);

            if (url.origin !== location.origin || url.hash) return;

            e.preventDefault();
            this.goto(url.pathname);
        });

        this.render();
    }
}

export { Router };