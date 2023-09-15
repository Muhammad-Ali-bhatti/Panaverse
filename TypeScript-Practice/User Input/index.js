"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PromptSync = require("prompt-sync");
let prompt = PromptSync();
let Name = prompt("What Is Your Name: ");
console.log(`Hello! ${Name}`);
let x = prompt("x: ");
let y = prompt("y ");
console.log(parseInt(x) + parseInt(y));
