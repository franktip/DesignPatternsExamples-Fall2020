/**
 * ASTNode representing a sequence of statements.
 */
class Sequence implements Stmt {
  constructor(private stat1: Stmt, private stat2: Stmt){ }
  
  public text() : string {
    return this.stat1.text() + "; " + this.stat2.text();
  }
}