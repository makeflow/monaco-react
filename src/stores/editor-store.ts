import { observable } from "mobx";

export class EditorStore {
  @observable
  selectContent: string = "";

  @observable
  content: string = "";

  @observable
  isView: boolean = false;

  @observable
  currentView: "diff" | "regular" | "preview" = "regular";

  @observable
  markdownContent: string = "";

  @observable
  width: string = "0px";

  @observable
  height: string = "0px";
}
