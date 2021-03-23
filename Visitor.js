const PythonLexer = require("./grammar/Python3Lexer.js");
const PythonParser = require("./grammar/Python3Parser.js");
const PythonVisitor = require("./grammar/Python3Visitor.js");

class Visitor extends PythonVisitor {
    visitSingle_input(ctx) {
        console.log("visitSingle_input");
        return this.visitChildren(ctx);
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
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#small_stmt.
    visitSmall_stmt(ctx) {
        console.log("visitSmall_stmt");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#expr_stmt.
    visitExpr_stmt(ctx) {
        console.log("visitExpr_stmt");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#testlist_star_expr.
    visitTestlist_star_expr(ctx) {
        console.log("visitTestlist_star_expr");
        return this.visitChildren(ctx);
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
        return this.visitChildren(ctx);
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
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#and_test.
    visitAnd_test(ctx) {
        console.log("visitAnd_test");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#not_test.
    visitNot_test(ctx) {
        console.log("visitNot_test");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#comparison.
    visitComparison(ctx) {
        console.log("visitComparison");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#comp_op.
    visitComp_op(ctx) {
        console.log("visitComp_op");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#star_expr.
    visitStar_expr(ctx) {
        console.log("visitStar_expr");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#expr.
    visitExpr(ctx) {
        console.log("visitExpr");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#xor_expr.
    visitXor_expr(ctx) {
        console.log("visitXor_expr");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#and_expr.
    visitAnd_expr(ctx) {
        console.log("visitAnd_expr");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#shift_expr.
    visitShift_expr(ctx) {
        console.log("visitShift_expr");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#arith_expr.
    visitArith_expr(ctx) {
        console.log("visitArith_expr");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#term.
    visitTerm(ctx) {
        console.log("visitTerm");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#factor.
    visitFactor(ctx) {
        console.log("visitFactor");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#power.
    visitPower(ctx) {
        console.log("visitPower");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#atom.
    visitAtom(ctx) {
        console.log("visitAtom");
        return this.visitChildren(ctx);
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
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#number.
    visitNumber(ctx) {
        console.log("visitNumber");
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by Python3Parser#integer.
    visitInteger(ctx) {
        console.log("visitInteger");
        return this.visitChildren(ctx);
    }
}
module.exports = Visitor;
