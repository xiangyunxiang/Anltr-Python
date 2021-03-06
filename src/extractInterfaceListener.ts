import { ClassDeclarationContext } from "./grammar/PythonParser";
import { MethodDeclarationContext } from "./grammar/PythonParser";
import { TerminalNode } from "antlr4ts/tree";

import { TokenStream } from "antlr4ts/TokenStream";
import { PythonParser } from "./grammar/PythonParser";
import { PythonListener } from "./grammar/PythonListener";

export class ExtractInterfaceListener implements PythonListener {
    private parser: PythonParser;
    constructor(parser: PythonParser) {
        this.parser = parser;
    }

    public enterClassDeclaration(ctx: ClassDeclarationContext) {
        console.log("interface I" + ctx.Identifier() + " {");
    }

    public exitClassDeclaration(ctx: ClassDeclarationContext) {
        console.log("}");
    }

    public enterMethodDeclaration(ctx: MethodDeclarationContext) {
        let tokens = this.parser.inputStream;

        let type = "void";
        if (ctx.type() != null) {
            type = tokens.getText(ctx.type());
        }
        let args = tokens.getText(ctx.formalParameters());
        console.log(`\t${type} ${ctx.Identifier()}${args};`);
    }
}
