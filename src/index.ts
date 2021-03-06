"use strict";

import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { TerminalNode, ParseTreeWalker } from "antlr4ts/tree";
import { PythonLexer } from "./grammar/PythonLexer";
import { PythonParser } from "./grammar/PythonParser";
import { ExtractInterfaceListener } from "./extractInterfaceListener";

import * as fs from "fs";

import * as os from "os";
class Startup {
    public static main(): number {
        fs.readFile("./testing/Demo.py", (err, data) => {
            if (!err) {
                Startup.walk(data.toString());
            } else {
                console.log(err);
            }
        });

        return 0;
    }

    public static walk(data: string) {
        // Create the lexer and parser
        let inputStream = new ANTLRInputStream(data);
        let lexer = new PythonLexer(inputStream);
        let tokenStream = new CommonTokenStream(lexer);
        let parser = new PythonParser(tokenStream);
        parser.buildParseTree = true;
        console.log(parser);
    }
}

Startup.main();
