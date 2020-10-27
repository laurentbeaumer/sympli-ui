export default class BaseService {
    public async post(service: string, method: string, data = {}): Promise<any> {
        return await fetch(
            this.url(service, method), {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data), // body data type must match "Content-Type" header
            }).then(response => response.json()); // parses JSON response into native JavaScript objects 
    }

    public async get(service: string, method: string): Promise<any> {
        return await fetch(
            this.url(service, method), {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                headers: { 'Content-Type': 'application/json' },
            }).then(response => response.json()); // parses JSON response into native JavaScript objects 
    }

    private url(service: string, method: string) {
        return `http://${window.location.host}/api/${service}/${method}`;
    }
}

