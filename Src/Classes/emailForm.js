class emailForm{
    constructor(scaffold,mountPoint) {
        this.mountPoint = mountPoint;
        this.scaffold = scaffold;
        this.root = document.createElement('form');
        this.Render();
        this.Mount();
    }

    Render() {
        Object.entries(this.scaffold).forEach(([key, value]) => {
            const label = document.createElement('label');
            label.textContent = key;
            if (value === "textarea"){
                const textarea = document.createElement('textarea');
                textarea.style.height = "200px";
                textarea.name = key;
                this.root.appendChild(label);
                this.root.appendChild(textarea);
            } else {
                const input = document.createElement('input');
                input.type = value;
                input.name = key;
                this.root.appendChild(label);
                this.root.appendChild(input);
            }
        });
        const submit = document.createElement('button');
        submit.textContent = "Submit";
        submit.type = "submit";
        submit.addEventListener('click', this.SendEmail);
        this.root.appendChild(submit);
    }

    Mount(){
        this.mountPoint.appendChild(this.root);
    }

    //data will be an object with the form data
    async SendEmail(data){
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
}

export { emailForm };

const getData = (element) => {

};