export class ResponseModel {
  constructor(
    public Code?: number,
    public Message?: string,
    public Total?: number,
    public Data?: any
  ) {}
}