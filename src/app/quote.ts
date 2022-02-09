export class Quote {
  public showDetails: boolean;
  constructor(
    public id: number,
    public quote: string,
    public Author: string,
    public details: string,
    public submitted: string
  ) {
    this.showDetails = false;
  }
}
