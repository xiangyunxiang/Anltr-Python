const antlr4 = require("antlr4");
const PythonLexer = require("./grammar/Python3Lexer.js");
const PythonParser = require("./grammar/Python3Parser.js");
const Visitor = require("./Visitor.js");

const input = "1\n";

const chars = new antlr4.InputStream(input);
const lexer = new PythonLexer(chars);

lexer.strictMode = false; // do not use js strictMode

const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new PythonParser(tokens);

parser.buildParseTrees = true;
var tree = parser.single_input();

var visitor = new Visitor();
console.log("Visitor:");
console.log(visitor.visit(tree));
