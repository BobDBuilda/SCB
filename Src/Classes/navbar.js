//what should comprise a navbar?
//links to other pages/sections
//search bar
//logo
//but in terms of layout, should be a flex or grid
//logo to the far left, everything else to the far right,
//search bar to the rightmost of it, since its functionality is
//not a standout feature.

class Navbar{
    constructor(){
        this.links = ['Home', 'About', 'Services', 'Contact', 'Search'];
    }

    render(){
        this.root = document.createElement('div');
        this.root.className = 'navbar';

        this.logoContainer = document.createElement('div');
        this.logoContainer.dataset.name = 'logo-container';
        this.funcContainer = document.createElement('div');
        this.funcContainer.dataset.name = 'func-container';
        this.logo = document.createElement('img');
        this.logo.src = './Src/Assets/logo.png';

        this.logoContainer.appendChild(this.logo);

        this.links.forEach(link => {
            console.log(link);
            if(link === 'Search'){
                const search = document.createElement('input');
                search.className = 'nav-item';
                search.type = 'search';
                search.dataset.name = 'search-bar'
                this.funcContainer.appendChild(search);
            }else{
                const a = document.createElement('a');
                a.className = 'nav-item';
                a.href = `#${link.toLowerCase()}`;
                a.textContent = link;
                this.funcContainer.appendChild(a);
            }
        });

        this.root.appendChild(this.logoContainer);
        this.root.appendChild(this.funcContainer);

        return this.root;
    }   

   
}

export { Navbar };