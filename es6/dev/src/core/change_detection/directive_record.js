import { normalizeBool } from 'angular2/src/facade/lang';
import { isDefaultChangeDetectionStrategy } from './constants';
export class DirectiveIndex {
    constructor(elementIndex, directiveIndex) {
        this.elementIndex = elementIndex;
        this.directiveIndex = directiveIndex;
    }
    get name() { return `${this.elementIndex}_${this.directiveIndex}`; }
}
export class DirectiveRecord {
    constructor({ directiveIndex, callAfterContentInit, callAfterContentChecked, callAfterViewInit, callAfterViewChecked, callOnChanges, callDoCheck, callOnInit, callOnDestroy, changeDetection, outputs } = {}) {
        this.directiveIndex = directiveIndex;
        this.callAfterContentInit = normalizeBool(callAfterContentInit);
        this.callAfterContentChecked = normalizeBool(callAfterContentChecked);
        this.callOnChanges = normalizeBool(callOnChanges);
        this.callAfterViewInit = normalizeBool(callAfterViewInit);
        this.callAfterViewChecked = normalizeBool(callAfterViewChecked);
        this.callDoCheck = normalizeBool(callDoCheck);
        this.callOnInit = normalizeBool(callOnInit);
        this.callOnDestroy = normalizeBool(callOnDestroy);
        this.changeDetection = changeDetection;
        this.outputs = outputs;
    }
    isDefaultChangeDetection() {
        return isDefaultChangeDetectionStrategy(this.changeDetection);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlX3JlY29yZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtcjNrcHRvSm0udG1wL2FuZ3VsYXIyL3NyYy9jb3JlL2NoYW5nZV9kZXRlY3Rpb24vZGlyZWN0aXZlX3JlY29yZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxFQUFnQixhQUFhLEVBQVUsTUFBTSwwQkFBMEI7T0FDdkUsRUFBQyxnQ0FBZ0MsRUFBMEIsTUFBTSxhQUFhO0FBRXJGO0lBQ0UsWUFBbUIsWUFBb0IsRUFBUyxjQUFzQjtRQUFuRCxpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUFTLG1CQUFjLEdBQWQsY0FBYyxDQUFRO0lBQUcsQ0FBQztJQUUxRSxJQUFJLElBQUksS0FBSyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdEUsQ0FBQztBQUVEO0lBY0UsWUFBWSxFQUFDLGNBQWMsRUFBRSxvQkFBb0IsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFDaEYsb0JBQW9CLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUMzRSxlQUFlLEVBQUUsT0FBTyxFQUFDLEdBWWxDLEVBQUU7UUFDSixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLHVCQUF1QixHQUFHLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVELHdCQUF3QjtRQUN0QixNQUFNLENBQUMsZ0NBQWdDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7QUFDSCxDQUFDO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N0cmluZ1dyYXBwZXIsIG5vcm1hbGl6ZUJvb2wsIGlzQmxhbmt9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge2lzRGVmYXVsdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneX0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY2xhc3MgRGlyZWN0aXZlSW5kZXgge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudEluZGV4OiBudW1iZXIsIHB1YmxpYyBkaXJlY3RpdmVJbmRleDogbnVtYmVyKSB7fVxuXG4gIGdldCBuYW1lKCkgeyByZXR1cm4gYCR7dGhpcy5lbGVtZW50SW5kZXh9XyR7dGhpcy5kaXJlY3RpdmVJbmRleH1gOyB9XG59XG5cbmV4cG9ydCBjbGFzcyBEaXJlY3RpdmVSZWNvcmQge1xuICBkaXJlY3RpdmVJbmRleDogRGlyZWN0aXZlSW5kZXg7XG4gIGNhbGxBZnRlckNvbnRlbnRJbml0OiBib29sZWFuO1xuICBjYWxsQWZ0ZXJDb250ZW50Q2hlY2tlZDogYm9vbGVhbjtcbiAgY2FsbEFmdGVyVmlld0luaXQ6IGJvb2xlYW47XG4gIGNhbGxBZnRlclZpZXdDaGVja2VkOiBib29sZWFuO1xuICBjYWxsT25DaGFuZ2VzOiBib29sZWFuO1xuICBjYWxsRG9DaGVjazogYm9vbGVhbjtcbiAgY2FsbE9uSW5pdDogYm9vbGVhbjtcbiAgY2FsbE9uRGVzdHJveTogYm9vbGVhbjtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneTtcbiAgLy8gYXJyYXkgb2YgW2VtaXR0ZXIgcHJvcGVydHkgbmFtZSwgZXZlbnROYW1lXVxuICBvdXRwdXRzOiBzdHJpbmdbXVtdO1xuXG4gIGNvbnN0cnVjdG9yKHtkaXJlY3RpdmVJbmRleCwgY2FsbEFmdGVyQ29udGVudEluaXQsIGNhbGxBZnRlckNvbnRlbnRDaGVja2VkLCBjYWxsQWZ0ZXJWaWV3SW5pdCxcbiAgICAgICAgICAgICAgIGNhbGxBZnRlclZpZXdDaGVja2VkLCBjYWxsT25DaGFuZ2VzLCBjYWxsRG9DaGVjaywgY2FsbE9uSW5pdCwgY2FsbE9uRGVzdHJveSxcbiAgICAgICAgICAgICAgIGNoYW5nZURldGVjdGlvbiwgb3V0cHV0c306IHtcbiAgICBkaXJlY3RpdmVJbmRleD86IERpcmVjdGl2ZUluZGV4LFxuICAgIGNhbGxBZnRlckNvbnRlbnRJbml0PzogYm9vbGVhbixcbiAgICBjYWxsQWZ0ZXJDb250ZW50Q2hlY2tlZD86IGJvb2xlYW4sXG4gICAgY2FsbEFmdGVyVmlld0luaXQ/OiBib29sZWFuLFxuICAgIGNhbGxBZnRlclZpZXdDaGVja2VkPzogYm9vbGVhbixcbiAgICBjYWxsT25DaGFuZ2VzPzogYm9vbGVhbixcbiAgICBjYWxsRG9DaGVjaz86IGJvb2xlYW4sXG4gICAgY2FsbE9uSW5pdD86IGJvb2xlYW4sXG4gICAgY2FsbE9uRGVzdHJveT86IGJvb2xlYW4sXG4gICAgY2hhbmdlRGV0ZWN0aW9uPzogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgb3V0cHV0cz86IHN0cmluZ1tdW11cbiAgfSA9IHt9KSB7XG4gICAgdGhpcy5kaXJlY3RpdmVJbmRleCA9IGRpcmVjdGl2ZUluZGV4O1xuICAgIHRoaXMuY2FsbEFmdGVyQ29udGVudEluaXQgPSBub3JtYWxpemVCb29sKGNhbGxBZnRlckNvbnRlbnRJbml0KTtcbiAgICB0aGlzLmNhbGxBZnRlckNvbnRlbnRDaGVja2VkID0gbm9ybWFsaXplQm9vbChjYWxsQWZ0ZXJDb250ZW50Q2hlY2tlZCk7XG4gICAgdGhpcy5jYWxsT25DaGFuZ2VzID0gbm9ybWFsaXplQm9vbChjYWxsT25DaGFuZ2VzKTtcbiAgICB0aGlzLmNhbGxBZnRlclZpZXdJbml0ID0gbm9ybWFsaXplQm9vbChjYWxsQWZ0ZXJWaWV3SW5pdCk7XG4gICAgdGhpcy5jYWxsQWZ0ZXJWaWV3Q2hlY2tlZCA9IG5vcm1hbGl6ZUJvb2woY2FsbEFmdGVyVmlld0NoZWNrZWQpO1xuICAgIHRoaXMuY2FsbERvQ2hlY2sgPSBub3JtYWxpemVCb29sKGNhbGxEb0NoZWNrKTtcbiAgICB0aGlzLmNhbGxPbkluaXQgPSBub3JtYWxpemVCb29sKGNhbGxPbkluaXQpO1xuICAgIHRoaXMuY2FsbE9uRGVzdHJveSA9IG5vcm1hbGl6ZUJvb2woY2FsbE9uRGVzdHJveSk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24gPSBjaGFuZ2VEZXRlY3Rpb247XG4gICAgdGhpcy5vdXRwdXRzID0gb3V0cHV0cztcbiAgfVxuXG4gIGlzRGVmYXVsdENoYW5nZURldGVjdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNEZWZhdWx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kodGhpcy5jaGFuZ2VEZXRlY3Rpb24pO1xuICB9XG59XG4iXX0=