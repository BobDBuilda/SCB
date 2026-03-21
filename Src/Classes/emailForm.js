class emailForm{
    constructor(scaffold) {
        this.scaffold = scaffold;
        //bind handlers once (important for removeEventListener later)
        this.handleClick = this.handleClick.bind(this);
        //this.Render();
        //this.Mount();
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
        this.submit.addEventListener('click', (e) => {
            //ideally you do not want to be calling a send email function
            //from in here
            //i think having the senEmail function here is fine
            //even though it breaks SRP, simply because this is not
            //too complex
            this.createEmail();
            this.sendEmail();
        })
    }

    //gonna abstract this later
    render() {
        Object.entries(this.scaffold).forEach(([key, value]) => {
            this.label = document.createElement('label');
            this.label.textContent = key;
            if (value === "textarea"){
                this.message = document.createElement('textarea');
                this.message.style.height = "200px";
                this.message.name = key;
                this.root.appendChild(label);
                this.root.appendChild(textarea);
            } else {
                this.input = document.createElement('input');
                this.input.type = value;
                this.input.name = key;
                this.root.appendChild(label);
                this.root.appendChild(input);
            }
        });
        this.root = document.createElement('form');
        this.root.name = 'email-form';

        this.submit = document.createElement('button');
        this.submit.textContent = "Submit";
        this.submit.type = "submit";

        this.root.appendChild(submit);
    }

    async sendEmail(data){
        return await fetch(('http://localhost:3000/send-email'), {
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

