/**
 * ASTNode representing a variable declaration  
 */
class DeclStmt implements Stmt {
  constructor(private varName : string){ }
  
  public text() : string {
    return "var " + this.varName;
  }
}