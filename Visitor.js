const Python3Lexer = require("./grammar/Python3Lexer.js");
const Python3Parser = require("./grammar/Python3Parser.js");
const Python3Visitor = require("./grammar/Python3Visitor.js");

class Visitor extends Python3Visitor {
    memory = new Map();
    visitSingle_input(ctx) {
        console.log("visitSingle_input");
        return this.visit(ctx.simple_stmt(0));
    }

    // Visit a parse tree produced by Python3Parser#file_input.
    visitFile_input(ctx) {
        console.log("visitFile_input");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#eval_input.
    visitEval_input(ctx) {
        console.log("visitEval_input");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#decorator.
    visitDecorator(ctx) {
        console.log("visitDecorator");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#decorators.
    visitDecorators(ctx) {
        console.log("visitDecorators");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#decorated.
    visitDecorated(ctx) {
        console.log("visitDecorated");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#funcdef.
    visitFuncdef(ctx) {
        console.log("visitFuncdef");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#parameters.
    visitParameters(ctx) {
        console.log("visitParameters");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#typedargslist.
    visitTypedargslist(ctx) {
        console.log("visitTypedargslist");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#tfpdef.
    visitTfpdef(ctx) {
        console.log("visitTfpdef");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#varargslist.
    visitVarargslist(ctx) {
        console.log("visitVarargslist");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#vfpdef.
    visitVfpdef(ctx) {
        console.log("visitVfpdef");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#stmt.
    visitStmt(ctx) {
        console.log("visitStmt");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#simple_stmt.
    visitSimple_stmt(ctx) {
        console.log("visitSimple_stmt");
        return this.visit(ctx.small_stmt(0));
    }

    // Visit a parse tree produced by Python3Parser#small_stmt.
    visitSmall_stmt(ctx) {
        console.log("visitSmall_stmt");
        return this.visit(ctx.expr_stmt(0));
    }

    // Visit a parse tree produced by Python3Parser#expr_stmt.
    visitExpr_stmt(ctx) {
        console.log("visitExpr_stmt");
        return this.visit(ctx.testlist_star_expr(0));
    }

    // Visit a parse tree produced by Python3Parser#testlist_star_expr.
    visitTestlist_star_expr(ctx) {
        console.log("visitTestlist_star_expr");
        return this.visit(ctx.test(0));
    }

    // Visit a parse tree produced by Python3Parser#augassign.
    visitAugassign(ctx) {
        console.log("visitAugassign");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#del_stmt.
    visitDel_stmt(ctx) {
        console.log("visitSivisitDel_stmtngle_input");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#pass_stmt.
    visitPass_stmt(ctx) {
        console.log("visitPass_stmt");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#flow_stmt.
    visitFlow_stmt(ctx) {
        console.log("visitFlow_stmt");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#break_stmt.
    visitBreak_stmt(ctx) {
        console.log("visitBreak_stmt");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#continue_stmt.
    visitContinue_stmt(ctx) {
        console.log("visitContinue_stmt");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#return_stmt.
    visitReturn_stmt(ctx) {
        console.log("visitReturn_stmt");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#yield_stmt.
    visitYield_stmt(ctx) {
        console.log("visitYield_stmt");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#raise_stmt.
    visitRaise_stmt(ctx) {
        console.log("visitRaise_stmt");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#import_stmt.
    visitImport_stmt(ctx) {
        console.log("visitImport_stmt");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#import_name.
    visitImport_name(ctx) {
        console.log("visitImport_name");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#import_from.
    visitImport_from(ctx) {
        console.log("visitImport_from");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#import_as_name.
    visitImport_as_name(ctx) {
        console.log("visitImport_as_name");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#dotted_as_name.
    visitDotted_as_name(ctx) {
        console.log("visitDotted_as_name");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#import_as_names.
    visitImport_as_names(ctx) {
        console.log("visitImport_as_names");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#dotted_as_names.
    visitDotted_as_names(ctx) {
        console.log("visitDotted_as_names");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#dotted_name.
    visitDotted_name(ctx) {
        console.log("visitDotted_name");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#global_stmt.
    visitGlobal_stmt(ctx) {
        console.log("visitGlobal_stmt");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#nonlocal_stmt.
    visitNonlocal_stmt(ctx) {
        console.log("visitNonlocal_stmt");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#assert_stmt.
    visitAssert_stmt(ctx) {
        console.log("visitAssert_stmt");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#compound_stmt.
    visitCompound_stmt(ctx) {
        console.log("visitCompound_stmt");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#if_stmt.
    visitIf_stmt(ctx) {
        console.log("visitIf_stmt");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#while_stmt.
    visitWhile_stmt(ctx) {
        console.log("visitWhile_stmt");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#for_stmt.
    visitFor_stmt(ctx) {
        console.log("visitFor_stmt");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#try_stmt.
    visitTry_stmt(ctx) {
        console.log("visitTry_stmt");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#with_stmt.
    visitWith_stmt(ctx) {
        console.log("visitWith_stmt");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#with_item.
    visitWith_item(ctx) {
        console.log("visitWith_item");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#except_clause.
    visitExcept_clause(ctx) {
        console.log("visitExcept_clause");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#suite.
    visitSuite(ctx) {
        console.log("visitSuite");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#test.
    visitTest(ctx) {
        console.log("visitTest");
        if (ctx.IF() !== null) {
            return {
                test: [
                    this.visit(ctx.or_test(1)),
                    this.visit(ctx.or_test(0)),
                    this.visit(ctx.test()),
                ],
            };
        } else if (ctx.or_test() !== null) {
            return this.visit(ctx.or_test(0));
        } else {
            return this.visit(ctx.lambdef());
        }
    }

    // Visit a parse tree produced by Python3Parser#test_nocond.
    visitTest_nocond(ctx) {
        console.log("visitTest_nocond");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#lambdef.
    visitLambdef(ctx) {
        console.log("visitLambdef");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#lambdef_nocond.
    visitLambdef_nocond(ctx) {
        console.log("visitLambdef_nocond");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#or_test.
    visitOr_test(ctx) {
        console.log("visitOr_test");
        let length = ctx.getChildCount();
        let value = this.visit(ctx.and_test(0));
        for (var i = 1; i * 2 < length; i = i + 1) {
            if (ctx.OR() !== null) {
                value = { or_test: [value, this.visit(ctx.and_test(i))] };
            }
        }
        return value;
    }

    // Visit a parse tree produced by Python3Parser#and_test.
    visitAnd_test(ctx) {
        console.log("visitAnd_test");
        let length = ctx.getChildCount();
        let value = this.visit(ctx.not_test(0));
        for (var i = 1; i * 2 < length; i = i + 1) {
            if (ctx.AND() !== null) {
                value = { and_test: [value, this.visit(ctx.not_test(i))] };
            }
        }
        return value;
    }

    // Visit a parse tree produced by Python3Parser#not_test.
    visitNot_test(ctx) {
        console.log("visitNot_test");
        if (ctx.NOT() !== null) {
            return { not_test: this.visit(ctx.not_test()) };
        } else {
            return this.visit(ctx.comparison());
        }
    }

    // Visit a parse tree produced by Python3Parser#comparison.
    visitComparison(ctx) {
        console.log("visitComparison");
        let length = ctx.getChildCount();
        let value = this.visit(ctx.star_expr(0));
        for (var i = 1; i * 2 < length; i = i + 1) {
            if (this.visit(ctx.comp_op(i - 1)) === "<") {
                value = {
                    comparison: ["<", value, this.visit(ctx.star_expr(i))],
                };
            } else if (this.visit(ctx.comp_op(i - 1)) === ">") {
                value = {
                    comparison: [">", value, this.visit(ctx.star_expr(i))],
                };
            } else if (this.visit(ctx.comp_op(i - 1)) === "==") {
                value = {
                    comparison: ["==", value, this.visit(ctx.star_expr(i))],
                };
            } else if (this.visit(ctx.comp_op(i - 1)) === ">=") {
                value = {
                    comparison: [">=", value, this.visit(ctx.star_expr(i))],
                };
            } else if (this.visit(ctx.comp_op(i - 1)) === "<=") {
                value = {
                    comparison: ["<=", value, this.visit(ctx.star_expr(i))],
                };
            } else if (this.visit(ctx.comp_op(i - 1)) === "<>") {
                value = {
                    comparison: ["<>", value, this.visit(ctx.star_expr(i))],
                };
            } else if (this.visit(ctx.comp_op(i - 1)) === "!=") {
                value = {
                    comparison: ["!=", value, this.visit(ctx.star_expr(i))],
                };
            } else if (this.visit(ctx.comp_op(i - 1)) === "in") {
                value = {
                    comparison: ["in", value, this.visit(ctx.star_expr(i))],
                };
            } else if (this.visit(ctx.comp_op(i - 1)) === "not in") {
                value = {
                    comparison: ["not in", value, this.visit(ctx.star_expr(i))],
                };
            } else if (this.visit(ctx.comp_op(i - 1)) === "is") {
                value = {
                    comparison: ["is", value, this.visit(ctx.star_expr(i))],
                };
            } else if (this.visit(ctx.comp_op(i - 1)) === "is not") {
                value = {
                    comparison: ["is not", value, this.visit(ctx.star_expr(i))],
                };
            }
        }
        return value;
    }

    // Visit a parse tree produced by Python3Parser#comp_op.
    visitComp_op(ctx) {
        console.log("visitComp_op");
        let length = ctx.getChildCount();
        if (length === 1) {
            if (ctx.getChild(0).getText() === "<") {
                return "<";
            } else if (ctx.getChild(0).getText() === ">") {
                return ">";
            } else if (ctx.getChild(0).getText() === "==") {
                return "==";
            } else if (ctx.getChild(0).getText() === ">=") {
                return ">=";
            } else if (ctx.getChild(0).getText() === "<=") {
                return "<=";
            } else if (ctx.getChild(0).getText() === "<>") {
                return "<>";
            } else if (ctx.getChild(0).getText() === "!=") {
                return "!=";
            } else if (ctx.getChild(0).getText() === "is") {
                return "is";
            } else if (ctx.getChild(0).getText() === "in") {
                return "in";
            }
        } else {
            if (ctx.getChild(0).getText() === "not") {
                return "not in";
            } else if (ctx.getChild(0).getText() === "is") {
                return "is not";
            }
        }
    }

    // Visit a parse tree produced by Python3Parser#star_expr.
    visitStar_expr(ctx) {
        console.log("visitStar_expr");
        if (ctx.STAR() !== null) {
            return { star_expr: this.visit(ctx.expr()) };
        }
        return this.visit(ctx.expr());
    }

    // Visit a parse tree produced by Python3Parser#expr.
    visitExpr(ctx) {
        console.log("visitExpr");
        let length = ctx.getChildCount();
        let value = this.visit(ctx.xor_expr(0));
        for (var i = 1; i * 2 < length; i = i + 1) {
            if (ctx.getChild(i * 2 - 1).getText() === "|") {
                value = { expr: ["|", value, this.visit(ctx.xor_expr(i))] };
            }
        }
        return value;
    }

    // Visit a parse tree produced by Python3Parser#xor_expr.
    visitXor_expr(ctx) {
        console.log("visitXor_expr");
        let length = ctx.getChildCount();
        let value = this.visit(ctx.and_expr(0));
        for (var i = 1; i * 2 < length; i = i + 1) {
            if (ctx.getChild(i * 2 - 1).getText() === "^") {
                value = { xor_expr: ["^", value, this.visit(ctx.and_expr(i))] };
            }
        }
        return value;
    }

    // Visit a parse tree produced by Python3Parser#and_expr.
    visitAnd_expr(ctx) {
        console.log("visitAnd_expr");
        let length = ctx.getChildCount();
        let value = this.visit(ctx.shift_expr(0));
        for (var i = 1; i * 2 < length; i = i + 1) {
            if (ctx.getChild(i * 2 - 1).getText() === "&") {
                value = {
                    and_expr: ["&", value, this.visit(ctx.shift_expr(i))],
                };
            }
        }
        return value;
    }

    // Visit a parse tree produced by Python3Parser#shift_expr.
    visitShift_expr(ctx) {
        console.log("visitShift_expr");
        let length = ctx.getChildCount();
        let value = this.visit(ctx.arith_expr(0));
        for (var i = 1; i * 2 < length; i = i + 1) {
            if (ctx.getChild(i * 2 - 1).getText() === "<<") {
                value = {
                    shift_expr: ["<<", value, this.visit(ctx.arith_expr(i))],
                };
            } else if (ctx.getChild(i * 2 - 1).getText() === ">>") {
                value = {
                    shift_expr: [">>", value, this.visit(ctx.arith_expr(i))],
                };
            }
        }
        return value;
    }

    // Visit a parse tree produced by Python3Parser#arith_expr.
    visitArith_expr(ctx) {
        console.log("visitArith_expr");
        let length = ctx.getChildCount();
        let value = this.visit(ctx.term(0));
        for (var i = 1; i * 2 < length; i = i + 1) {
            if (ctx.getChild(i * 2 - 1).getText() === "+") {
                value = { arith_expr: ["+", value, this.visit(ctx.term(i))] };
            } else if (ctx.getChild(i * 2 - 1).getText() === "-") {
                value = { arith_expr: ["-", value, this.visit(ctx.term(i))] };
            }
        }
        return value;
    }

    // Visit a parse tree produced by Python3Parser#term.
    visitTerm(ctx) {
        console.log("visitTerm");
        let length = ctx.getChildCount();
        let value = this.visit(ctx.factor(0));
        for (var i = 1; i * 2 < length; i = i + 1) {
            if (ctx.getChild(i * 2 - 1).getText() === "*") {
                value = { term: ["*", value, this.visit(ctx.factor(i))] };
            } else if (ctx.getChild(i * 2 - 1).getText() === "/") {
                value = { term: ["/", value, this.visit(ctx.factor(i))] };
            } else if (ctx.getChild(i * 2 - 1).getText() === "%") {
                value = { term: ["%", value, this.visit(ctx.factor(i))] };
            } else if (ctx.getChild(i * 2 - 1).getText() === "//") {
                value = { term: ["//", value, this.visit(ctx.factor(i))] };
            } else if (ctx.getChild(i * 2 - 1).getText() === "@") {
                throw "@ operator has not been implemented";
            }
        }
        return value;
    }

    // Visit a parse tree produced by Python3Parser#factor.
    visitFactor(ctx) {
        console.log("visitFactor");
        let operator = null;
        let second = null;
        if (ctx.ADD() !== null) {
            operator = "+";
            second = this.visit(ctx.factor());
            return { factor: [operator, second] };
        } else if (ctx.MINUS() !== null) {
            operator = "-";
            second = this.visit(ctx.factor());
            return { factor: [operator, second] };
        } else if (ctx.NOT_OP() !== null) {
            operator = "~";
            second = this.visit(ctx.factor());
            return { factor: [operator, second] };
        } else if (ctx.power() !== null) {
            return this.visit(ctx.power());
        }
    }

    // Visit a parse tree produced by Python3Parser#power.
    visitPower(ctx) {
        console.log("visitPower");
        let atom = this.visit(ctx.atom());
        let trailer_list = [];
        let factor = null;
        if (ctx.trailer().length > 0) {
            for (var i = 0; i < ctx.trailer().length; i++) {
                trailer_list.push(this.visit(ctx.trailer(i)));
            }
        }
        if (ctx.factor() !== null) {
            factor = this.visit(ctx.factor());
        }
        if (trailer_list.length === 0 && factor === null) {
            return atom;
        } else {
            return { power: [atom, trailer_list, factor] };
        }
    }

    // Visit a parse tree produced by Python3Parser#atom.
    visitAtom(ctx) {
        console.log("visitAtom");
        if (ctx.TRUE() !== null) {
            return { bool: true };
        } else if (ctx.FALSE() !== null) {
            return { bool: false };
        } else if (ctx.NONE() !== null) {
            return { null: null };
        } else if (ctx.number() !== null) {
            return this.visit(ctx.number());
        } else if (ctx.NAME() !== null) {
            return { name: ctx.NAME().getText() };
        } else if (ctx.str().length > 0) {
            let value = "";
            for (var i = 0; i < ctx.str().length; i++) {
                value = value + this.visit(ctx.str(i)).string;
            }
            return { string: value };
        } else if (ctx.OPEN_PAREN() !== null) {
            if (ctx.yield_expr() !== null) {
                return { tuple: this.visit(ctx.yield_expr()) };
            } else if (ctx.testlist_comp() !== null) {
                return { tuple: this.visit(ctx.testlist_comp()) };
            } else {
                return { tuple: null };
            }
        } else if (ctx.OPEN_BRACK() !== null) {
            if (ctx.testlist_comp() !== null) {
                return { list: this.visit(ctx.testlist_comp()) };
            } else {
                return { list: null };
            }
        } else if (ctx.OPEN_BRACE() !== null) {
            if (ctx.dictorsetmaker() !== null) {
                return { dict: this.visit(ctx.dictorsetmaker()) };
            } else {
                return { dict: null };
            }
        } else {
            return "Atom: Not Implemented!";
        }
    }

    // Visit a parse tree produced by Python3Parser#testlist_comp.
    visitTestlist_comp(ctx) {
        console.log("visitTestlist_comp");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#trailer.
    visitTrailer(ctx) {
        console.log("visitTrailer");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#subscriptlist.
    visitSubscriptlist(ctx) {
        console.log("visitSubscriptlist");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#subscript.
    visitSubscript(ctx) {
        console.log("visitSubscript");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#sliceop.
    visitSliceop(ctx) {
        console.log("visitSliceop");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#exprlist.
    visitExprlist(ctx) {
        console.log("visitExprlist");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#testlist.
    visitTestlist(ctx) {
        console.log("visitTestlist");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#dictorsetmaker.
    visitDictorsetmaker(ctx) {
        console.log("visitDictorsetmaker");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#classdef.
    visitClassdef(ctx) {
        console.log("visitClassdef");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#arglist.
    visitArglist(ctx) {
        console.log("visitArglist");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#argument.
    visitArgument(ctx) {
        console.log("visitArgument");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#comp_iter.
    visitComp_iter(ctx) {
        console.log("visitComp_iter");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#comp_for.
    visitComp_for(ctx) {
        console.log("visitComp_for");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#comp_if.
    visitComp_if(ctx) {
        console.log("visitComp_if");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#yield_expr.
    visitYield_expr(ctx) {
        console.log("visitYield_expr");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#yield_arg.
    visitYield_arg(ctx) {
        console.log("visitYield_arg");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#str.
    visitStr(ctx) {
        console.log("visitStr");
        //TODO: Support r String
        let value = null;
        if (ctx.STRING_LITERAL() !== null) {
            value = ctx.STRING_LITERAL().getText();
        } else if (ctx.BYTES_LITERAL() !== null) {
            value = ctx.BYTES_LITERAL().getText();
        }
        if (value.startsWith('"')) {
            value = value.replace(/^"+|"+$/g, "");
        } else if (value.startsWith("'")) {
            value = value.replace(/^'+|'+$/g, "");
        }
        return { string: value };
    }

    // Visit a parse tree produced by Python3Parser#number.
    visitNumber(ctx) {
        console.log("visitNumber");
        let value = 0;
        if (ctx.FLOAT_NUMBER() !== null) {
            value = parseFloat(ctx.FLOAT_NUMBER().getText());
            return { number: value };
        } else if (ctx.IMAG_NUMBER() !== null) {
            value = ctx.IMAG_NUMBER().getText();
            return { number: value };
            // TODO: Implement imaginary number
        } else {
            return this.visit(ctx.integer());
        }
    }

    // Visit a parse tree produced by Python3Parser#integer.
    visitInteger(ctx) {
        console.log("visitInteger");
        let value = 0;
        if (ctx.DECIMAL_INTEGER() !== null) {
            value = ctx.DECIMAL_INTEGER().getText();
        } else if (ctx.OCT_INTEGER() !== null) {
            value = ctx.OCT_INTEGER().getText();
        } else if (ctx.HEX_INTEGER() !== null) {
            value = ctx.HEX_INTEGER().getText();
        } else {
            value = ctx.BIN_INTEGER().getText();
        }
        return { number: Number(value) };
    }
}
module.exports = Visitor;
