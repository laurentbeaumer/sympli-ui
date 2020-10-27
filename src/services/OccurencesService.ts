import BaseService from "./BaseService";

export default class OccurencesService extends BaseService {
    private service: string = "occurences";

    public async post(method: string, data = {}): Promise<any> {
        return await super.post(this.service, method, data);
    }   

    public async get(method: string): Promise<any> {
        return await super.get(this.service, method);
    }

    public async getOccurences(): Promise<any> {
        return await this.get("values");
    }

    public async getKeywords(): Promise<any> {
      return await this.get("keywords");
    }

    public async postKeywords(keywords: string[]): Promise<any> {
        return await this.post("keywords", keywords);
    }

    public async getSearchEngines(): Promise<any> {
      return await this.get("searchengines");
    }

    public async postSearchEngines(engines: string[]): Promise<any> {
        return await this.post("searchengines", engines);
    }
}

