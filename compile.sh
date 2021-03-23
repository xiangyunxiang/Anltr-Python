export CLASSPATH=".:antlr.jar:$CLASSPATH"
alias antlr4='java -jar antlr.jar'
antlr4 -Dlanguage=JavaScript -visitor grammar/Python3.g4