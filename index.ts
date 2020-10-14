import { myContainer } from "./inversify.config";
import { TYPES } from "./types";
import {Dog} from './dog';

class App {
	createDog() {
		//container that returns (in these case) an instance of Dog Class
		const dog = myContainer.get<Dog>(TYPES.Dog);
		dog.bark('bow-wow');
	}
}

const app = new App();
app.createDog()
