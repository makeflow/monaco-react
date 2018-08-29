import { observable } from "mobx";

export class EditorStore {
  @observable
  selectContent: string = "";

  @observable
  content: string = "";

  @observable
  isView: boolean = false;
}
