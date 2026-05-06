class Navbar{
    constructor(){
        this.links = ['Home', 'About', 'Services', 'Contact'];
    }

    render(){
        this.root = document.createElement('div');
        this.root.className = 'navbar';

        this.logoContainer = document.createElement('div');
        this.logoContainer.dataset.name = 'logo-container';
        this.funcContainer = document.createElement('div');
        this.funcContainer.dataset.name = 'func-container';
        this.title = document.createElement('div');
        this.title.style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
        this.title.style.display = 'flex';
        this.title.style.alignItems = 'center';
        this.title.style.lineHeight = '1';

        const sChar = document.createElement('span');
        sChar.textContent = 'S';
        sChar.style.fontSize = '100px';
        sChar.style.fontWeight = 'bold';

        const stackedText = document.createElement('div');
        stackedText.style.display = 'flex';
        stackedText.style.flexDirection = 'column';
        stackedText.style.fontSize = '40px';
        stackedText.style.textTransform = 'uppercase';
        stackedText.style.fontWeight = 'bold';
        stackedText.style.marginLeft = '5px';
        stackedText.style.fontFamily = "inherit";

        const upreme = document.createElement('span');
        upreme.textContent = 'upreme';
        const counselling = document.createElement('span');
        counselling.style.fontSize = '25px';
        counselling.textContent = 'Counselling';

        stackedText.appendChild(upreme);
        stackedText.appendChild(counselling);

        this.title.appendChild(sChar);
        this.title.appendChild(stackedText);
        this.title.style.color = '#fff';
        this.logo = document.createElement('img');
        this.logo.src = './Src/Assets/logo.png';

        this.logoContainer.appendChild(this.title);

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