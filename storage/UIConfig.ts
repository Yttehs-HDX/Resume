import { Theme } from "@/constants/Theme";
import { makeAutoObservable, runInAction } from "mobx";

const ColorList = Theme.ColorList;

class UiController {
  static Instance: UiController | null = null;
  static getInstance() {
    if (UiController.Instance === null) {
      UiController.Instance = new UiController();
    }
    return UiController.Instance;
  }

  private constructor() {
    makeAutoObservable(this);
  }

  private _color: string = ColorList[0];


  get color() { return this._color; }
  switchColor() {
    const index = ColorList.indexOf(this._color);
    if (index === -1) {
      runInAction(() => {
        this._color = ColorList[0];
      });
    } else {
      runInAction(() => {
        this._color = ColorList[(index + 1) % ColorList.length];
      });
    }
  }
}

export function useUiController() {
  return UiController.getInstance();
}
