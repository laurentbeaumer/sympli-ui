import { Subject } from 'rxjs';
import OccurencesService from '../services/OccurencesService';

const service = new OccurencesService();

export default class Repository {
  public static $Keywords: Subject<String[]> = new Subject();
  public static Keywords: String[] = [];

  public static $SearchEngines: Subject<string[]> = new Subject();
  public static SearchEngines: string[] = [];

  public static $Occurences: Subject<string[][]> = new Subject();
  public static Occurences: string[][] = [];

  private static timespan: number = 5000;

  static initialize() {
    Repository.$Occurences.subscribe(Occurences => {
      Repository.Occurences = Occurences;
    });

    Repository.$Keywords.subscribe(Keywords => {
      Repository.Keywords = Keywords;
    });

    service.getKeywords()
      .then(values => Repository.$Keywords.next(values))
      .catch(error => console.error(error));


    Repository.$SearchEngines.subscribe(Engines => {
      Repository.SearchEngines = Engines;
    });

    service.getSearchEngines()
      .then(values => Repository.$SearchEngines.next(values))
      .catch(error => console.error(error));

      Repository.refresh();
  }

  static refresh() {
    service.getOccurences()
      .then(values => Repository.$Occurences.next(values))
      .catch(error => console.error(error));
    setTimeout(Repository.refresh, Repository.timespan);
  }
}

Repository.initialize();