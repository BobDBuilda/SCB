class emailForm{
    constructor(scaffold) {
        this.scaffold = scaffold;
        //this.handleClick = this.handleClick.bind(this);
        //without these id probably have to keep track of all the elements
        //within the DOM that i created(possibly as an array)
        //and invoke render for each
        //praobably within index.js
    }

    init(){
        //attach event listeners in here
        //the thing is submit was created outside of here
        //and the scope is not global,
        //should i have submit be binded to the object
        this.root.addEventListener('submit', (e) => {
            //if(e.target === this.submit){
             console.log("SUBMIT FIRED");
                e.preventDefault(); 
                this.createEmail();
                this.sendEmail();
            //}
            
           //would importing css be the best option to avoid large 
           //css files?
           //just have multiple and import them when necessary
        })
    }

    //gonna abstract this later
    render() {
        this.root = document.createElement('form');
        this.root.name = 'email-form';
        Object.entries(this.scaffold).forEach(([key, value]) => {
            this.label = document.createElement('label');
            this.label.textContent = key;
            if (value === "textarea"){
                this.message = document.createElement('textarea');
                this.message.style.height = "200px";
                this.message.name = key;
                this.root.appendChild(this.label);
                this.root.appendChild(this.message);
            } else {
                this.input = document.createElement('input');
                this.input.type = value;
                this.input.name = key;
                this.root.appendChild(this.label);
                this.root.appendChild(this.input);
            }
        });
        
        this.submit = document.createElement('button');
        this.submit.textContent = "Submit";
        this.submit.type = "submit";

        this.root.appendChild(this.submit);
        this.init();
        return this.root;
    }

    async sendEmail(data){
        return await fetch(('http://localhost:8080/send-email'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' ,
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Accept': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
                'Referer': 'http://localhost:5173/',
                'Cache-Control': 'no-cache',
            },
            body: JSON.stringify({
                data
            })
        });
    }

    createEmail(){
        //this creates the email body etc
        //should i create these into the dat object
        //by running through the scaffold object
        //and creating the key value pairs, based on name and the message
        //within them?
        const data = {
            
        }
    }
}

export { emailForm };

