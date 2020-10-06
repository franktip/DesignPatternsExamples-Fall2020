/**
 * ASTNode representing a string literal 
 */
class StringLiteral implements LiteralExpr {
  constructor(private literal : string){ }
  
  public text() : string {
    return "\"" + this.literal + "\"";
  }  
}