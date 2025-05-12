import { makeAutoObservable, runInAction } from "mobx";

const ColorList = [
  "#B7BDF8",
  "#A6DA95",
  "#F5A97F",
  "#C6A0F6",
];

class UI {
  static Instance: UI | null = null;
  static getInstance() {
    if (UI.Instance === null) {
      UI.Instance = new UI();
    }
    return UI.Instance;
  }

  private constructor() {
    makeAutoObservable(this);
  }

  private _color: string = ColorList[0];


  get color() { return this._color; }
  rollToNextColor() {
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

export function useUi() {
  return UI.getInstance();
}
