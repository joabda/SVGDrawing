import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Stack } from 'src/app/classes/stack';
import { SVGElementInfos } from 'src/app/interfaces/svg-element-infos';

@Injectable({
  providedIn: 'root'
})
export class DrawStackService {

  constructor() {
    this.elements = new Stack<SVGElementInfos>();
    this.nextId = 0;
    this.isAdding = new BehaviorSubject<boolean>(false);
    // tslint:disable-next-line: no-magic-numbers | Reason : negative index references to outside of array
    this.changeAt = new BehaviorSubject<number>(-1);
    this.addedSVG = new BehaviorSubject<SVGElement | undefined>(undefined);
    this.addedToRedo = new BehaviorSubject<SVGElement | undefined>(undefined);
    this.reset = new BehaviorSubject<boolean>(false);
    this.newSVG = new BehaviorSubject<boolean>(false);
  }

  private elements: Stack<SVGElementInfos>;
  private nextId: number;
  isAdding: BehaviorSubject<boolean>;
  changeAt: BehaviorSubject<number>;
  addedSVG: BehaviorSubject<SVGElement | undefined>;
  addedToRedo: BehaviorSubject<SVGElement | undefined>;
  reset: BehaviorSubject<boolean>;
  newSVG: BehaviorSubject<boolean>;

  getAll(): Stack<SVGElementInfos> { return this.elements; }

  setCurrentID(id: number): void { this.nextId = id; }

  addElementWithInfos(toAdd: SVGElementInfos): void {
    if (toAdd !== undefined && !this.exists(toAdd.id)) {
      if (toAdd.id < this.nextId) {
        this.changeAt.next(toAdd.id);
      }
      this.elements.insert(toAdd, toAdd.id);
      this.nextId++;
    }
  }

  removeElement(toRemove: number): void  {
    for (const element of this.elements.getAll()) {
      if (element.id === toRemove) {
        this.elements.delete(element);
        this.nextId--;
      }
    }
  }

  removeLastElement(): SVGElementInfos | undefined {
    const lastElement = this.elements.popBack();
    if (lastElement !== undefined) {
      this.isAdding.next(false);
      this.nextId--;
    }
    return lastElement;
  }

  removeElements(from: number): Stack<SVGElementInfos> {
    const toRemove = new Stack<SVGElementInfos>();
    let poped = this.elements.popBack();
    while (poped !== undefined) {
      toRemove.pushFront(poped);
      poped = this.elements.popBack();
      if (poped !== undefined && poped.id < from) {
        this.elements.pushBack(poped);
        break;
      }
    }
    this.nextId -= (toRemove.getAll().length - 1);
    return toRemove;
  }

  addSVGWithNewElement(current: SVGElement): void {
    this.reset.next(true);
    this.addedSVG.next(current);
  }

  addingNewSVG(): void {
    this.newSVG.next(true);
  }

  isEmpty(): boolean {
    return this.elements.getAll().length === 0;
  }

  size(): number {
    return this.elements.getAll().length;
  }

  getRoot(): SVGElementInfos | undefined {
    return this.elements.getRoot();
  }

  getNextID(): number { return this.nextId; }

  private exists(id: number): boolean {
    for (const element of this.elements.getAll()) {
      if (element.id === id) {
        return true;
      }
    }
    return false;
  }
}
