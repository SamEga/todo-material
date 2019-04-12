export class CreateTask {
  constructor(id, status, title, desc, date, important, tag) {
    this.id = id;
    this.status = status;
    this.title = title;
    this.desc = desc;
    this.date = date;
    this.important = important;
    this.tag = tag;
  }
}
