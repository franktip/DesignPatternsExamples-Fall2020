/**
 * ASTNode representing a binary "+" expression 
 */
class PlusExp implements Expr {
  constructor(private left: Expr, private right: Expr){ }

  public text() : string {
       return this.left.text() + " + " + this.right.text(); 
  }
}