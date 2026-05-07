class PrivacyNotice {
    constructor(text){
        this.textcontent = text || 'We value your privacy. This website uses cookies and other tracking technologies to improve your browsing experience, display personalized content and targeted ads, analyze our website traffic, and understand where our visitors are coming from. By clicking "Accept", you consent to our use of cookies and other tracking technologies in accordance with our Privacy Policy.';
    }

    render(){
        this.root = document.createElement('div');
        this.content = document.createElement('p');
        
        // Root styling for fixed centering at the bottom of the screen
        this.root.style.position = 'fixed';
        this.root.style.bottom = '20px';
        this.root.style.left = '0';
        this.root.style.right = '0';
        this.root.style.margin = 'auto';
        this.root.style.width = '80%';
        this.root.style.maxWidth = '800px';
        this.root.style.background = 'rgba(255, 255, 255, 0.95)';
        this.root.style.padding = '20px';
        this.root.style.borderRadius = '8px';
        this.root.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        this.root.style.zIndex = '1000';
        this.root.style.display = 'flex';
        this.root.style.flexDirection = 'column';
        this.root.style.alignItems = 'center';
        this.root.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        this.root.style.opacity = '1';

        // Content styling
        this.content.style.width = '100%';
        this.content.style.margin = '0 0 15px 0';
        this.content.style.fontSize = '14px';
        this.content.style.color = '#333';
        this.content.style.lineHeight = '1.5';
        this.content.style.textAlign = 'center';
        this.content.style.fontFamily = 'sans-serif';
        this.content.innerText = this.textcontent;

        // Add an accept button for realism
        this.button = document.createElement('button');
        this.button.innerText = 'Accept All Cookies';
        this.button.style.padding = '10px 25px';
        this.button.style.background = '#2b4c63';
        this.button.style.color = '#fff';
        this.button.style.border = 'none';
        this.button.style.borderRadius = '5px';
        this.button.style.cursor = 'pointer';
        this.button.style.fontWeight = 'bold';
        this.button.onclick = () => {
            this.root.style.opacity = '0';
            this.root.style.transform = 'translateY(20px)';
            setTimeout(() => {
                this.root.style.display = 'none';
            }, 1000);
        };

        this.root.appendChild(this.content);
        this.root.appendChild(this.button);
        
        return this.root;
    }
}

export { PrivacyNotice };