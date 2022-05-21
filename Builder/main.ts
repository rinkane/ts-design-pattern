import { text } from "stream/consumers";
import { Director } from "./director";
import { MarkdownBuilder } from "./markdown-builder";
import { TextBuilder } from "./text-builder";

const markDownBuilder = new MarkdownBuilder();
const textBuilder = new TextBuilder();
const markDownDirector = new Director(markDownBuilder);
const textDirector = new Director(textBuilder);

markDownDirector.construct();
textDirector.construct();

console.log(markDownBuilder.getResult());
console.log(textBuilder.getResult());
