export class Todo {
  constructor(
    public content: string,
    public done: boolean = false,
    public id?: string
  ) {}
}
