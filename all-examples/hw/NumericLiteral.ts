/**
 * ASTNode representing a numeric literal 
 */
class NumericLiteral implements LiteralExpr {
  constructor(private value: number){
  }
  
  text() : string {
    return this.value.toString();
  }
}