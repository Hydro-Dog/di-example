import { Container } from "inversify";
import "reflect-metadata";
import { TYPES } from "./types";
import { IOutput } from "./interfaces";
import { CliOutput } from "./cli-output";
import { Dog } from "./dog";

// here we register the injectable classes.
// that's how IoC Container figures out how to instantiate injectables

const myContainer = new Container();

// thete are could be many types of output services
// but only one entity of dog. so we use IOutput interface
// for defining the output service

myContainer.bind<IOutput>(TYPES.IOutput).to(CliOutput);
myContainer.bind<Dog>(TYPES.Dog).to(Dog);

export { myContainer };
