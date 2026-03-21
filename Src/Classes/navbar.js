//what should comprise a navbar?
//links to other pages/sections
//search bar
//logo
//but in terms of layout, should be a flex or grid
//logo to the far left, everything else to the far right,
//search bar to the rightmost of it, since its functionality is
//not a standout feature.

class Navbar{
    constructor(mountPoint){
        this.links = ['Home', 'About', 'Services', 'Contact', 'Search'];
        this.mountPoint = mountPoint;
        this.root = document.createElement('nav');
        this.root.className = 'navbar';
        this.render();
        this.mount();
    }

    render(){
        this.links.forEach(link => {
            const a = document.createElement('a');
            a.href = `#${link.toLowerCase()}`;
            a.textContent = link;
            this.root.appendChild(a);
        });
    }   

    mount(){
        this.mountPoint.appendChild(this.root);
    }
}

export { Navbar };