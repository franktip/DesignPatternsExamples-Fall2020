/**
 * ASTNode representing an assignment statement  
 */
class Assignment implements Stmt {
  constructor(private varName: string, private exp: Expr){ }
  
  public text() : string {
    return this.varName + " = " + this.exp.text();
  } 
}