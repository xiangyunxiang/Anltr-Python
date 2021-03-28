const Python3Lexer = require("./grammar/Python3Lexer.js");
const Python3Parser = require("./grammar/Python3Parser.js");
const Python3Visitor = require("./grammar/Python3Visitor.js");

class Visitor extends Python3Visitor {
    visitSingle_input(ctx) {
        console.log("visitSingle_input");
        if (ctx.simple_stmt() !== null) {
            return {
                type: "SimpleStatement",
                value: this.visit(ctx.simple_stmt()),
            };
        } else {
            return {
                type: "CompoundStatement",
                value: this.visit(ctx.compound_stmt()),
            };
        }
    }

    // Visit a parse tree produced by Python3Parser#file_input.
    visitFile_input(ctx) {
        console.log("visitFile_input");
        let stmt_list = [];
        for (var i = 0; i < ctx.stmt().length; i++) {
            stmt_list.push(this.visit(ctx.stmt(i)));
        }
        return { type: "FileInput", value: stmt_list };
    }

    // Visit a parse tree produced by Python3Parser#eval_input.
    visitEval_input(ctx) {
        console.log("visitEval_input");
        //TODO
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#decorator.
    visitDecorator(ctx) {
        console.log("visitDecorator");
        if (ctx.arglist() !== null) {
            return {
                type: "Decorator",
                name: this.visit(ctx.dotted_name()),
                arglist: this.visit(ctx.arglist()),
            };
        } else {
            return {
                type: "Decorator",
                name: this.visit(ctx.dotted_name()),
                arglist: [],
            };
        }
    }

    // Visit a parse tree produced by Python3Parser#decorators.
    visitDecorators(ctx) {
        console.log("visitDecorators");
        let decorators = [];
        for (var i = 0; i < ctx.decorator().length; i++) {
            decorators.push(this.visit(ctx.decorator(i)));
        }
        return decorators;
    }

    // Visit a parse tree produced by Python3Parser#decorated.
    visitDecorated(ctx) {
        console.log("visitDecorated");
        if (ctx.funcdef() !== null) {
            return {
                type: "Decorated",
                decorators: this.visit(ctx.decorators()),
                function: this.visit(ctx.funcdef()),
            };
        } else {
            return {
                type: "Decorated",
                decorators: this.visit(ctx.decorators()),
                function: this.visit(ctx.classdef()),
            };
        }
    }

    // Visit a parse tree produced by Python3Parser#funcdef.
    visitFuncdef(ctx) {
        console.log("visitFuncdef");
        //TODO: Support type declaration
        return {
            type: "FunctionDef",
            name: ctx.NAME().getText(),
            parameters: this.visit(ctx.parameters()),
            body: this.visit(ctx.suite()),
        };
    }

    // Visit a parse tree produced by Python3Parser#parameters.
    visitParameters(ctx) {
        console.log("visitParameters");
        if (ctx.typedargslist() !== null) {
            return this.visit(ctx.typedargslist());
        } else {
            return [];
        }
    }

    // Visit a parse tree produced by Python3Parser#typedargslist.
    visitTypedargslist(ctx) {
        console.log("visitTypedargslist");
        //TODO
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#tfpdef.
    visitTfpdef(ctx) {
        console.log("visitTfpdef");
        //TODO
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#varargslist.
    visitVarargslist(ctx) {
        console.log("visitVarargslist");
        //TODO
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#vfpdef.
    visitVfpdef(ctx) {
        console.log("visitVfpdef");
        //TODO
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#stmt.
    visitStmt(ctx) {
        console.log("visitStmt");
        if (ctx.simple_stmt() !== null) {
            return {
                type: "SimpleStatement",
                value: this.visit(ctx.simple_stmt()),
            };
        } else {
            return {
                type: "CompoundStatement",
                value: this.visit(ctx.compound_stmt()),
            };
        }
    }

    // Visit a parse tree produced by Python3Parser#simple_stmt.
    visitSimple_stmt(ctx) {
        console.log("visitSimple_stmt");
        let stmt_list = [];
        for (var i = 0; i < ctx.small_stmt().length; i++) {
            stmt_list.push(this.visit(ctx.small_stmt(i)));
        }
        return stmt_list;
    }

    // Visit a parse tree produced by Python3Parser#small_stmt.
    visitSmall_stmt(ctx) {
        console.log("visitSmall_stmt");
        if (ctx.expr_stmt() !== null) {
            return this.visit(ctx.expr_stmt());
        } else if (ctx.del_stmt() !== null) {
            return this.visit(ctx.del_stmt());
        } else if (ctx.pass_stmt() !== null) {
            return this.visit(ctx.pass_stmt());
        } else if (ctx.flow_stmt() !== null) {
            return this.visit(ctx.flow_stmt());
        } else if (ctx.import_stmt() !== null) {
            return this.visit(ctx.import_stmt());
        } else if (ctx.global_stmt() !== null) {
            return this.visit(ctx.global_stmt());
        } else if (ctx.nonlocal_stmt() !== null) {
            return this.visit(ctx.nonlocal_stmt());
        } else if (ctx.assert_stmt() !== null) {
            return this.visit(ctx.assert_stmt());
        }
    }

    // Visit a parse tree produced by Python3Parser#expr_stmt.
    visitExpr_stmt(ctx) {
        console.log("visitExpr_stmt");
        if (ctx.augassign() !== null) {
            return {
                type: "AugAssign",
                left: this.visit(ctx.testlist_star_expr(0)),
                right: this.visit(ctx.getChild(2)),
            };
        } else {
            let length = ctx.getChildCount();
            let right = this.visit(ctx.getChild(length - 1));
            for (var i = length; i > 1; i = i - 2) {
                let temp_left = this.visit(ctx.getChild(i - 3));
                right = {
                    type: "Assignment",
                    left: temp_left,
                    right: right,
                };
            }
            return right;
        }
    }

    // Visit a parse tree produced by Python3Parser#testlist_star_expr.
    visitTestlist_star_expr(ctx) {
        console.log("visitTestlist_star_expr");
        let length = ctx.getChildCount();
        if (length === 1) {
            if (ctx.test() !== null) {
                return this.visit(ctx.test(0));
            } else {
                return this.visit(ctx.star_expr(0));
            }
        } else {
            let valuelist = [this.visit(ctx.getChild(0))];
            for (var i = 1; i < length; i++) {
                if (ctx.getChild(i).getText() !== ",") {
                    valuelist.push(this.visit(ctx.getChild(i)));
                }
            }
            return { type: "TestListStarExpression", value: valuelist };
        }
    }

    // Visit a parse tree produced by Python3Parser#augassign.
    visitAugassign(ctx) {
        console.log("visitAugassign");
        return this.visit(ctx.getChild(0).getText());
    }

    // Visit a parse tree produced by Python3Parser#del_stmt.
    visitDel_stmt(ctx) {
        console.log("visitSivisitDel_stmt");
        return { type: "DeleteStatement", deleted: this.visit(ctx.exprlist()) };
    }

    // Visit a parse tree produced by Python3Parser#pass_stmt.
    visitPass_stmt(ctx) {
        console.log("visitPass_stmt");
        return { type: "PassStatement" };
    }

    // Visit a parse tree produced by Python3Parser#flow_stmt.
    visitFlow_stmt(ctx) {
        console.log("visitFlow_stmt");
        if (ctx.break_stmt() !== null) {
            return this.visit(ctx.break_stmt());
        } else if (ctx.continue_stmt() !== null) {
            return this.visit(ctx.continue_stmt());
        } else if (ctx.return_stmt() !== null) {
            return this.visit(ctx.return_stmt());
        } else if (ctx.raise_stmt() !== null) {
            return this.visit(ctx.raise_stmt());
        } else if (ctx.yield_stmt() !== null) {
            return this.visit(ctx.yield_stmt());
        }
    }

    // Visit a parse tree produced by Python3Parser#break_stmt.
    visitBreak_stmt(ctx) {
        console.log("visitBreak_stmt");
        return { type: "BreakStatement" };
    }

    // Visit a parse tree produced by Python3Parser#continue_stmt.
    visitContinue_stmt(ctx) {
        console.log("visitContinue_stmt");
        return { type: "ContinueStatement" };
    }

    // Visit a parse tree produced by Python3Parser#return_stmt.
    visitReturn_stmt(ctx) {
        console.log("visitReturn_stmt");
        if (ctx.testlist() !== null) {
            return {
                type: "ReturnStatement",
                returned: this.visit(ctx.testlist()),
            };
        } else {
            return {
                type: "ReturnStatement",
                returned: [],
            };
        }
    }

    // Visit a parse tree produced by Python3Parser#yield_stmt.
    visitYield_stmt(ctx) {
        console.log("visitYield_stmt");
        return { type: "YieldStatement", body: this.visit(ctx.yield_expr()) };
    }

    // Visit a parse tree produced by Python3Parser#raise_stmt.
    visitRaise_stmt(ctx) {
        console.log("visitRaise_stmt");
        //TODO
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#import_stmt.
    visitImport_stmt(ctx) {
        console.log("visitImport_stmt");
        //TODO
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#import_name.
    visitImport_name(ctx) {
        console.log("visitImport_name");
        //TODO
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#import_from.
    visitImport_from(ctx) {
        console.log("visitImport_from");
        //TODO
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#import_as_name.
    visitImport_as_name(ctx) {
        console.log("visitImport_as_name");
        //TODO
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#dotted_as_name.
    visitDotted_as_name(ctx) {
        console.log("visitDotted_as_name");
        //TODO
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#import_as_names.
    visitImport_as_names(ctx) {
        console.log("visitImport_as_names");
        //TODO
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#dotted_as_names.
    visitDotted_as_names(ctx) {
        console.log("visitDotted_as_names");
        //TODO
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#dotted_name.
    visitDotted_name(ctx) {
        console.log("visitDotted_name");
        //TODO
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#global_stmt.
    visitGlobal_stmt(ctx) {
        console.log("visitGlobal_stmt");
        let globallist = [];
        for (var i = 0; i < ctx.NAME().length; i++) {
            globallist.push(this.visit(ctx.NAME(i)));
        }
        return { type: "GlobalStatement", globallist: globallist };
    }

    // Visit a parse tree produced by Python3Parser#nonlocal_stmt.
    visitNonlocal_stmt(ctx) {
        console.log("visitNonlocal_stmt");
        let nonlocallist = [];
        for (var i = 0; i < ctx.NAME().length; i++) {
            nonlocallist.push(this.visit(ctx.NAME(i)));
        }
        return { type: "NonlocalStatement", nonlocallist: nonlocallist };
    }

    // Visit a parse tree produced by Python3Parser#assert_stmt.
    visitAssert_stmt(ctx) {
        console.log("visitAssert_stmt");
        //TODO
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#compound_stmt.
    visitCompound_stmt(ctx) {
        console.log("visitCompound_stmt");
        if (ctx.if_stmt() !== null) {
            return this.visit(ctx.if_stmt());
        } else if (ctx.while_stmt() !== null) {
            return this.visit(ctx.while_stmt());
        } else if (ctx.for_stmt() !== null) {
            return this.visit(ctx.for_stmt());
        } else if (ctx.try_stmt() !== null) {
            return this.visit(ctx.try_stmt());
        } else if (ctx.with_stmt() !== null) {
            return this.visit(ctx.with_stmt());
        } else if (ctx.funcdef() !== null) {
            return this.visit(ctx.funcdef());
        } else if (ctx.classdef() !== null) {
            return this.visit(ctx.classdef());
        } else if (ctx.decorated() !== null) {
            return this.visit(ctx.decorated());
        }
    }

    // Visit a parse tree produced by Python3Parser#if_stmt.
    visitIf_stmt(ctx) {
        console.log("visitIf_stmt");
        let right = null;
        let suite_length = ctx.suite().length;
        let test_length = ctx.test().length;
        if (ctx.ELSE() !== null) {
            right = this.visit(ctx.suite(suite_length - 1));
        }
        for (var i = test_length - 1; i >= 0; i--) {
            right = {
                type: "ConditionalExpression",
                judge: this.visit(ctx.test(i)),
                judge_true: this.visit(ctx.suite(i)),
                judge_false: right,
            };
        }
        return right;
    }

    // Visit a parse tree produced by Python3Parser#while_stmt.
    visitWhile_stmt(ctx) {
        console.log("visitWhile_stmt");
        if (ctx.suite().length > 1) {
            return {
                type: "WhileStatement",
                condition: this.visit(ctx.test()),
                body: this.visit(ctx.suite(0)),
                else: this.visit(ctx.suite(1)),
            };
        } else {
            return {
                type: "WhileStatement",
                condition: this.visit(ctx.test()),
                body: this.visit(ctx.suite(0)),
                else: [],
            };
        }
    }

    // Visit a parse tree produced by Python3Parser#for_stmt.
    visitFor_stmt(ctx) {
        console.log("visitFor_stmt");
        if (ctx.suite().length > 1) {
            return {
                type: "ForStatement",
                iter: this.visit(ctx.exprlist()),
                iterated: this.visit(ctx.testlist()),
                body: this.visit(ctx.suite(0)),
                else: this.visit(ctx.suite(1)),
            };
        } else {
            return {
                type: "ForStatement",
                iter: this.visit(ctx.exprlist()),
                iterated: this.visit(ctx.testlist()),
                body: this.visit(ctx.suite(0)),
                else: [],
            };
        }
    }

    // Visit a parse tree produced by Python3Parser#try_stmt.
    visitTry_stmt(ctx) {
        console.log("visitTry_stmt");
        //TODO
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#with_stmt.
    visitWith_stmt(ctx) {
        console.log("visitWith_stmt");
        //TODO
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#with_item.
    visitWith_item(ctx) {
        console.log("visitWith_item");
        //TODO
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#except_clause.
    visitExcept_clause(ctx) {
        console.log("visitExcept_clause");
        //TODO
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#suite.
    visitSuite(ctx) {
        console.log("visitSuite");
        if (ctx.simple_stmt() !== null) {
            return this.visit(ctx.simple_stmt());
        } else {
            let stmtlist = [];
            for (var i = 0; i < ctx.stmt().length; i++) {
                stmtlist.push(this.visit(ctx.stmt(i)));
            }
            return stmtlist;
        }
    }

    // Visit a parse tree produced by Python3Parser#test.
    visitTest(ctx) {
        console.log("visitTest");
        if (ctx.IF() !== null) {
            return {
                type: "ConditionalExpression",
                judge: this.visit(ctx.or_test(1)),
                judge_true: this.visit(ctx.or_test(0)),
                judge_false: this.visit(ctx.test()),
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
        if (ctx.or_test() !== null) {
            return this.visit(ctx.or_test());
        } else {
            return this.visit(ctx.lambdef_nocond());
        }
    }

    // Visit a parse tree produced by Python3Parser#lambdef.
    visitLambdef(ctx) {
        console.log("visitLambdef");
        //TODO
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#lambdef_nocond.
    visitLambdef_nocond(ctx) {
        console.log("visitLambdef_nocond");
        //TODO
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#or_test.
    visitOr_test(ctx) {
        console.log("visitOr_test");
        let length = ctx.getChildCount();
        let value = this.visit(ctx.and_test(0));
        for (var i = 1; i * 2 < length; i = i + 1) {
            if (ctx.OR(i - 1) !== null) {
                value = {
                    type: "BinaryExpression",
                    operator: "or",
                    left: value,
                    right: this.visit(ctx.and_test(i)),
                };
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
            if (ctx.AND(i - 1) !== null) {
                value = {
                    type: "BinaryExpression",
                    operator: "and",
                    left: value,
                    right: this.visit(ctx.not_test(i)),
                };
            }
        }
        return value;
    }

    // Visit a parse tree produced by Python3Parser#not_test.
    visitNot_test(ctx) {
        console.log("visitNot_test");
        if (ctx.NOT() !== null) {
            return {
                type: "UnaryExpression",
                operator: "not",
                operand: this.visit(ctx.not_test()),
            };
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
                    type: "BinaryExpression",
                    operator: "<",
                    left: value,
                    right: this.visit(ctx.star_expr(i)),
                };
            } else if (this.visit(ctx.comp_op(i - 1)) === ">") {
                value = {
                    type: "BinaryExpression",
                    operator: ">",
                    left: value,
                    right: this.visit(ctx.star_expr(i)),
                };
            } else if (this.visit(ctx.comp_op(i - 1)) === "==") {
                value = {
                    type: "BinaryExpression",
                    operator: "==",
                    left: value,
                    right: this.visit(ctx.star_expr(i)),
                };
            } else if (this.visit(ctx.comp_op(i - 1)) === ">=") {
                value = {
                    type: "BinaryExpression",
                    operator: ">=",
                    left: value,
                    right: this.visit(ctx.star_expr(i)),
                };
            } else if (this.visit(ctx.comp_op(i - 1)) === "<=") {
                value = {
                    type: "BinaryExpression",
                    operator: "<=",
                    left: value,
                    right: this.visit(ctx.star_expr(i)),
                };
            } else if (this.visit(ctx.comp_op(i - 1)) === "<>") {
                value = {
                    type: "BinaryExpression",
                    operator: "<>",
                    left: value,
                    right: this.visit(ctx.star_expr(i)),
                };
            } else if (this.visit(ctx.comp_op(i - 1)) === "!=") {
                value = {
                    type: "BinaryExpression",
                    operator: "!=",
                    left: value,
                    right: this.visit(ctx.star_expr(i)),
                };
            } else if (this.visit(ctx.comp_op(i - 1)) === "in") {
                value = {
                    type: "BinaryExpression",
                    operator: "in",
                    left: value,
                    right: this.visit(ctx.star_expr(i)),
                };
            } else if (this.visit(ctx.comp_op(i - 1)) === "not in") {
                value = {
                    type: "BinaryExpression",
                    operator: "not in",
                    left: value,
                    right: this.visit(ctx.star_expr(i)),
                };
            } else if (this.visit(ctx.comp_op(i - 1)) === "is") {
                value = {
                    type: "BinaryExpression",
                    operator: "is",
                    left: value,
                    right: this.visit(ctx.star_expr(i)),
                };
            } else if (this.visit(ctx.comp_op(i - 1)) === "is not") {
                value = {
                    type: "BinaryExpression",
                    operator: "is not",
                    left: value,
                    right: this.visit(ctx.star_expr(i)),
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
            return { type: "StarExpression", value: this.visit(ctx.expr()) };
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
                value = {
                    type: "BinaryExpression",
                    operator: "|",
                    left: value,
                    right: this.visit(ctx.xor_expr(i)),
                };
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
                value = {
                    type: "BinaryExpression",
                    operator: "^",
                    left: value,
                    right: this.visit(ctx.and_expr(i)),
                };
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
                    type: "BinaryExpression",
                    operator: "&",
                    left: value,
                    right: this.visit(ctx.shift_expr(i)),
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
                    type: "BinaryExpression",
                    operator: "<<",
                    left: value,
                    right: this.visit(ctx.arith_expr(i)),
                };
            } else if (ctx.getChild(i * 2 - 1).getText() === ">>") {
                value = {
                    type: "BinaryExpression",
                    operator: ">>",
                    left: value,
                    right: this.visit(ctx.arith_expr(i)),
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
                value = {
                    type: "BinaryExpression",
                    operator: "+",
                    left: value,
                    right: this.visit(ctx.term(i)),
                };
            } else if (ctx.getChild(i * 2 - 1).getText() === "-") {
                value = {
                    type: "BinaryExpression",
                    operator: "-",
                    left: value,
                    right: this.visit(ctx.term(i)),
                };
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
                value = {
                    type: "BinaryExpression",
                    operator: "*",
                    left: value,
                    right: this.visit(ctx.factor(i)),
                };
            } else if (ctx.getChild(i * 2 - 1).getText() === "/") {
                value = {
                    type: "BinaryExpression",
                    operator: "/",
                    left: value,
                    right: this.visit(ctx.factor(i)),
                };
            } else if (ctx.getChild(i * 2 - 1).getText() === "%") {
                value = {
                    type: "BinaryExpression",
                    operator: "%",
                    left: value,
                    right: this.visit(ctx.factor(i)),
                };
            } else if (ctx.getChild(i * 2 - 1).getText() === "//") {
                value = {
                    type: "BinaryExpression",
                    operator: "//",
                    left: value,
                    right: this.visit(ctx.factor(i)),
                };
            } else if (ctx.getChild(i * 2 - 1).getText() === "@") {
                throw "@ operator has not been implemented";
            }
        }
        return value;
    }

    // Visit a parse tree produced by Python3Parser#factor.
    visitFactor(ctx) {
        console.log("visitFactor");
        if (ctx.ADD() !== null) {
            return {
                type: "UnaryExpression",
                operator: "+",
                operand: this.visit(ctx.factor()),
            };
        } else if (ctx.MINUS() !== null) {
            return {
                type: "UnaryExpression",
                operator: "-",
                operand: this.visit(ctx.factor()),
            };
        } else if (ctx.NOT_OP() !== null) {
            return {
                type: "UnaryExpression",
                operator: "~",
                operand: this.visit(ctx.factor()),
            };
        } else if (ctx.power() !== null) {
            return this.visit(ctx.power());
        }
    }

    // Visit a parse tree produced by Python3Parser#power.
    visitPower(ctx) {
        console.log("visitPower");
        let atom = this.visit(ctx.atom());
        let trailer_list = [];
        if (ctx.trailer().length > 0) {
            for (var i = 0; i < ctx.trailer().length; i++) {
                trailer_list.push(this.visit(ctx.trailer(i)));
            }
        }
        if (trailer_list.length !== 0) {
            atom = { type: "Trailer", base: atom, trailer: trailer_list };
            //Property return a dict, arglist and subscriptlist return a list
        }
        if (ctx.factor() !== null) {
            atom = {
                type: "BinaryExpression",
                operator: "**",
                left: atom,
                right: this.visit(ctx.factor()),
            };
        }
        return atom;
    }

    // Visit a parse tree produced by Python3Parser#atom.
    visitAtom(ctx) {
        console.log("visitAtom");
        if (ctx.TRUE() !== null) {
            return { type: "Bool", value: true };
        } else if (ctx.FALSE() !== null) {
            return { type: "Bool", value: false };
        } else if (ctx.NONE() !== null) {
            return { type: "Null", value: null };
        } else if (ctx.number() !== null) {
            return this.visit(ctx.number());
        } else if (ctx.NAME() !== null) {
            return { type: "Name", value: ctx.NAME().getText() };
        } else if (ctx.str().length > 0) {
            let value = "";
            for (var i = 0; i < ctx.str().length; i++) {
                value = value + this.visit(ctx.str(i)).value;
            }
            return { type: "String", value: value };
        } else if (ctx.OPEN_PAREN() !== null) {
            if (ctx.yield_expr() !== null) {
                return { type: "Atom", value: this.visit(ctx.yield_expr()) };
            } else if (ctx.testlist_comp() !== null) {
                return { type: "Atom", value: this.visit(ctx.testlist_comp()) };
            } else {
                return { type: "Atom", value: null };
            }
        } else if (ctx.OPEN_BRACK() !== null) {
            if (ctx.testlist_comp() !== null) {
                return this.visit(ctx.testlist_comp());
            } else {
                return { type: "List", value: null };
            }
        } else if (ctx.OPEN_BRACE() !== null) {
            if (ctx.dictorsetmaker() !== null) {
                return this.visit(ctx.dictorsetmaker());
            } else {
                return { type: "Dict", value: null };
            }
        } else {
            return "Atom: Not Implemented!";
        }
    }

    // Visit a parse tree produced by Python3Parser#testlist_comp.
    visitTestlist_comp(ctx) {
        console.log("visitTestlist_comp");
        if (ctx.comp_for() !== null) {
            //[i for i in range(4)]
            return {
                type: "List",
                element: this.visit(ctx.test(0)),
                comp_for: this.visit(ctx.comp_for()),
            };
        } else {
            //[1,2,3]
            let element = [];
            for (var i = 0; i < ctx.test().length; i++) {
                element.push(this.visit(ctx.test(i)));
            }
            return {
                type: "List",
                element: element,
                comp_for: null,
            };
        }
    }

    // Visit a parse tree produced by Python3Parser#trailer.
    visitTrailer(ctx) {
        console.log("visitTrailer");
        if (ctx.OPEN_PAREN() !== null) {
            return { type: "ArgList", value: this.visit(ctx.arglist()) };
        } else if (ctx.OPEN_BRACK() !== null) {
            return {
                type: "SubscriptList",
                value: this.visit(ctx.subscriptlist()),
            };
        } else {
            return {
                type: "Property",
                value: this.visit(ctx.NAME().getText()),
            };
        }
    }

    // Visit a parse tree produced by Python3Parser#subscriptlist.
    visitSubscriptlist(ctx) {
        console.log("visitSubscriptlist");
        let subscriptlist = [];
        for (var i = 0; i < ctx.subscript().length; i++) {
            subscriptlist.push(this.visit(ctx.subscript(i)));
        }
        return subscriptlist;
    }

    // Visit a parse tree produced by Python3Parser#subscript.
    visitSubscript(ctx) {
        console.log("visitSubscript");
        if (ctx.COLON() !== null) {
            //TODO
        } else {
            return this.visit(ctx.test(0));
        }
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#sliceop.
    visitSliceop(ctx) {
        console.log("visitSliceop");
        //TODO
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#exprlist.
    visitExprlist(ctx) {
        console.log("visitExprlist");
        let exprlist = [];
        for (var i = 0; i < ctx.star_expr().length; i++) {
            exprlist.push(this.visit(ctx.star_expr(i)));
        }
        return exprlist;
    }

    // Visit a parse tree produced by Python3Parser#testlist.
    visitTestlist(ctx) {
        console.log("visitTestlist");
        let testlist = [];
        for (var i = 0; i < ctx.test().length; i++) {
            testlist.push(this.visit(ctx.test(i)));
        }
        return testlist;
    }

    // Visit a parse tree produced by Python3Parser#dictorsetmaker.
    visitDictorsetmaker(ctx) {
        console.log("visitDictorsetmaker");
        if (ctx.COLON() !== null) {
            if (ctx.comp_for() !== null) {
                //[i for i in range(4)]
                return {
                    type: "Set",
                    element: this.visit(ctx.test(0)),
                    comp_for: this.visit(ctx.comp_for()),
                };
            } else {
                //[1,2,3]
                let element = [];
                for (var i = 0; i < ctx.test().length; i++) {
                    element.push(this.visit(ctx.test(i)));
                }
                return {
                    type: "Set",
                    element: element,
                    comp_for: null,
                };
            }
        } else {
            //TODO
        }
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#classdef.
    visitClassdef(ctx) {
        console.log("visitClassdef");
        if (ctx.arglist() !== null) {
            return {
                type: "ClassDefinition",
                arglist: this.visit(ctx.arglist()),
                body: this.visit(ctx.suite()),
            };
        } else {
            return {
                type: "ClassDefinition",
                arglist: [],
                body: this.visit(ctx.suite()),
            };
        }
    }

    // Visit a parse tree produced by Python3Parser#arglist.
    visitArglist(ctx) {
        console.log("visitArglist");
        let arglist = [];
        //TODO: implement *args and **kwargs
        if (ctx.test() === null) {
            for (var i = 0; i < ctx.argument().length; i++) {
                arglist.push(this.visit(ctx.argument(i)));
            }
        } else {
            throw "*args and **kwargs have not been implemented!";
        }
        return arglist;
    }

    // Visit a parse tree produced by Python3Parser#argument.
    visitArgument(ctx) {
        console.log("visitArgument");
        //TODO: argument with comp_for
        //if ()
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#comp_iter.
    visitComp_iter(ctx) {
        console.log("visitComp_iter");
        if (ctx.comp_for() !== null) {
            return this.visit(ctx.comp_for());
        } else {
            return this.visit(ctx.comp_if());
        }
    }

    // Visit a parse tree produced by Python3Parser#comp_for.
    visitComp_for(ctx) {
        console.log("visitComp_for");
        if (ctx.comp_iter() !== null) {
            return {
                type: "CompFor",
                iter: this.visit(ctx.exprlist()),
                iterated: this.visit(ctx.or_test()),
                comp_iter: this.visit(ctx.comp_iter()),
            };
        } else {
            return {
                type: "CompFor",
                iter: this.visit(ctx.exprlist()),
                iterated: this.visit(ctx.or_test()),
                comp_iter: null,
            };
        }
    }

    // Visit a parse tree produced by Python3Parser#comp_if.
    visitComp_if(ctx) {
        console.log("visitComp_if");
        if (ctx.comp_iter() !== null) {
            return {
                type: "CompIf",
                condition: this.visit(ctx.test_nocond()),
                comp_iter: this.visit(ctx.comp_iter()),
            };
        } else {
            return {
                type: "CompIf",
                condition: this.visit(ctx.test_nocond()),
                comp_iter: null,
            };
        }
    }

    // Visit a parse tree produced by Python3Parser#yield_expr.
    visitYield_expr(ctx) {
        console.log("visitYield_expr");
        //TODO
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#yield_arg.
    visitYield_arg(ctx) {
        console.log("visitYield_arg");
        //TODO
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
        return { type: "String", value: value };
    }

    // Visit a parse tree produced by Python3Parser#number.
    visitNumber(ctx) {
        console.log("visitNumber");
        let value = 0;
        if (ctx.FLOAT_NUMBER() !== null) {
            value = parseFloat(ctx.FLOAT_NUMBER().getText());
            return { type: "Float", value: value };
        } else if (ctx.IMAG_NUMBER() !== null) {
            value = ctx.IMAG_NUMBER().getText();
            return { type: "Imag", value: value };
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
        return { type: "Integer", value: Number(value) };
    }
}
module.exports = Visitor;
