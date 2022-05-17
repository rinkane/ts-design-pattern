import { Factory } from "./factory";
import { IceFactory } from "./ice-factory";

const factory: Factory = new IceFactory();

const soda = factory.create("ソーダ");
const remon = factory.create("レモン");
const chili = factory.create("唐辛子");

soda.use();
remon.use();
chili.use();
