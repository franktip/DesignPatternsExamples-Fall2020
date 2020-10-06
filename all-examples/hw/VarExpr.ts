/**
 * ASTNode representing a variable 
 */
class VarExp implements Expr {
  constructor(private varName: string){ }
  
  public text() : string {
       return this.varName; 
  } 
}