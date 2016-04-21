import { isPresent, isFunction, global, stringify } from 'angular2/src/facade/lang';
import { BaseException } from 'angular2/src/facade/exceptions';
export class ReflectionCapabilities {
    constructor(reflect) {
        this._reflect = isPresent(reflect) ? reflect : global.Reflect;
    }
    isReflectionEnabled() { return true; }
    factory(t) {
        switch (t.length) {
            case 0:
                return () => new t();
            case 1:
                return (a1) => new t(a1);
            case 2:
                return (a1, a2) => new t(a1, a2);
            case 3:
                return (a1, a2, a3) => new t(a1, a2, a3);
            case 4:
                return (a1, a2, a3, a4) => new t(a1, a2, a3, a4);
            case 5:
                return (a1, a2, a3, a4, a5) => new t(a1, a2, a3, a4, a5);
            case 6:
                return (a1, a2, a3, a4, a5, a6) => new t(a1, a2, a3, a4, a5, a6);
            case 7:
                return (a1, a2, a3, a4, a5, a6, a7) => new t(a1, a2, a3, a4, a5, a6, a7);
            case 8:
                return (a1, a2, a3, a4, a5, a6, a7, a8) => new t(a1, a2, a3, a4, a5, a6, a7, a8);
            case 9:
                return (a1, a2, a3, a4, a5, a6, a7, a8, a9) => new t(a1, a2, a3, a4, a5, a6, a7, a8, a9);
            case 10:
                return (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) => new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
            case 11:
                return (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) => new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
            case 12:
                return (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) => new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
            case 13:
                return (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) => new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
            case 14:
                return (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) => new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14);
            case 15:
                return (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) => new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
            case 16:
                return (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16) => new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16);
            case 17:
                return (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17) => new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17);
            case 18:
                return (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18) => new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18);
            case 19:
                return (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19) => new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19);
            case 20:
                return (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20) => new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20);
        }
        ;
        throw new Error(`Cannot create a factory for '${stringify(t)}' because its constructor has more than 20 arguments`);
    }
    /** @internal */
    _zipTypesAndAnnotations(paramTypes, paramAnnotations) {
        var result;
        if (typeof paramTypes === 'undefined') {
            result = new Array(paramAnnotations.length);
        }
        else {
            result = new Array(paramTypes.length);
        }
        for (var i = 0; i < result.length; i++) {
            // TS outputs Object for parameters without types, while Traceur omits
            // the annotations. For now we preserve the Traceur behavior to aid
            // migration, but this can be revisited.
            if (typeof paramTypes === 'undefined') {
                result[i] = [];
            }
            else if (paramTypes[i] != Object) {
                result[i] = [paramTypes[i]];
            }
            else {
                result[i] = [];
            }
            if (isPresent(paramAnnotations) && isPresent(paramAnnotations[i])) {
                result[i] = result[i].concat(paramAnnotations[i]);
            }
        }
        return result;
    }
    parameters(typeOrFunc) {
        // Prefer the direct API.
        if (isPresent(typeOrFunc.parameters)) {
            return typeOrFunc.parameters;
        }
        if (isPresent(this._reflect) && isPresent(this._reflect.getMetadata)) {
            var paramAnnotations = this._reflect.getMetadata('parameters', typeOrFunc);
            var paramTypes = this._reflect.getMetadata('design:paramtypes', typeOrFunc);
            if (isPresent(paramTypes) || isPresent(paramAnnotations)) {
                return this._zipTypesAndAnnotations(paramTypes, paramAnnotations);
            }
        }
        // The array has to be filled with `undefined` because holes would be skipped by `some`
        let parameters = new Array(typeOrFunc.length);
        parameters.fill(undefined);
        return parameters;
    }
    annotations(typeOrFunc) {
        // Prefer the direct API.
        if (isPresent(typeOrFunc.annotations)) {
            var annotations = typeOrFunc.annotations;
            if (isFunction(annotations) && annotations.annotations) {
                annotations = annotations.annotations;
            }
            return annotations;
        }
        if (isPresent(this._reflect) && isPresent(this._reflect.getMetadata)) {
            var annotations = this._reflect.getMetadata('annotations', typeOrFunc);
            if (isPresent(annotations))
                return annotations;
        }
        return [];
    }
    propMetadata(typeOrFunc) {
        // Prefer the direct API.
        if (isPresent(typeOrFunc.propMetadata)) {
            var propMetadata = typeOrFunc.propMetadata;
            if (isFunction(propMetadata) && propMetadata.propMetadata) {
                propMetadata = propMetadata.propMetadata;
            }
            return propMetadata;
        }
        if (isPresent(this._reflect) && isPresent(this._reflect.getMetadata)) {
            var propMetadata = this._reflect.getMetadata('propMetadata', typeOrFunc);
            if (isPresent(propMetadata))
                return propMetadata;
        }
        return {};
    }
    interfaces(type) {
        throw new BaseException("JavaScript does not support interfaces");
    }
    getter(name) { return new Function('o', 'return o.' + name + ';'); }
    setter(name) {
        return new Function('o', 'v', 'return o.' + name + ' = v;');
    }
    method(name) {
        let functionBody = `if (!o.${name}) throw new Error('"${name}" is undefined');
        return o.${name}.apply(o, args);`;
        return new Function('o', 'args', functionBody);
    }
    // There is not a concept of import uri in Js, but this is useful in developing Dart applications.
    importUri(type) { return './'; }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmbGVjdGlvbl9jYXBhYmlsaXRpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLXIza3B0b0ptLnRtcC9hbmd1bGFyMi9zcmMvY29yZS9yZWZsZWN0aW9uL3JlZmxlY3Rpb25fY2FwYWJpbGl0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sU0FBUyxFQUVWLE1BQU0sMEJBQTBCO09BQzFCLEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0NBQWdDO0FBSTVEO0lBR0UsWUFBWSxPQUFhO1FBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFBQyxDQUFDO0lBRTdGLG1CQUFtQixLQUFjLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRS9DLE9BQU8sQ0FBQyxDQUFlO1FBQ3JCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLEtBQUssQ0FBQztnQkFDSixNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQztnQkFDSixNQUFNLENBQUMsQ0FBQyxFQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEMsS0FBSyxDQUFDO2dCQUNKLE1BQU0sQ0FBQyxDQUFDLEVBQU8sRUFBRSxFQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzdDLEtBQUssQ0FBQztnQkFDSixNQUFNLENBQUMsQ0FBQyxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sS0FBSyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzFELEtBQUssQ0FBQztnQkFDSixNQUFNLENBQUMsQ0FBQyxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdkUsS0FBSyxDQUFDO2dCQUNKLE1BQU0sQ0FBQyxDQUFDLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3BGLEtBQUssQ0FBQztnQkFDSixNQUFNLENBQUMsQ0FBQyxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sS0FDakQsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMzQyxLQUFLLENBQUM7Z0JBQ0osTUFBTSxDQUFDLENBQUMsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxLQUMxRCxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMvQyxLQUFLLENBQUM7Z0JBQ0osTUFBTSxDQUFDLENBQUMsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sS0FDbkUsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ25ELEtBQUssQ0FBQztnQkFDSixNQUFNLENBQUMsQ0FBQyxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sS0FDNUUsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN2RCxLQUFLLEVBQUU7Z0JBQ0wsTUFBTSxDQUFDLENBQUMsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQy9FLEdBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN0RSxLQUFLLEVBQUU7Z0JBQ0wsTUFBTSxDQUFDLENBQUMsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQy9FLEdBQVEsRUFBRSxHQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3JGLEtBQUssRUFBRTtnQkFDTCxNQUFNLENBQUMsQ0FBQyxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFDL0UsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEtBQ3pCLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDdEUsS0FBSyxFQUFFO2dCQUNMLE1BQU0sQ0FBQyxDQUFDLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUMvRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEtBQ25DLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzNFLEtBQUssRUFBRTtnQkFDTCxNQUFNLENBQUMsQ0FBQyxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFDL0UsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsS0FDN0MsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ2hGLEtBQUssRUFBRTtnQkFDTCxNQUFNLENBQUMsQ0FBQyxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFDL0UsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEtBQ3ZELElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDckYsS0FBSyxFQUFFO2dCQUNMLE1BQU0sQ0FBQyxDQUFDLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUMvRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEtBQ2pFLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzFGLEtBQUssRUFBRTtnQkFDTCxNQUFNLENBQUMsQ0FBQyxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFDL0UsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsS0FDM0UsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUNyRSxHQUFHLENBQUMsQ0FBQztZQUN4QixLQUFLLEVBQUU7Z0JBQ0wsTUFBTSxDQUFDLENBQUMsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQy9FLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQzlFLEdBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFDaEUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM1QyxLQUFLLEVBQUU7Z0JBQ0wsTUFBTSxDQUFDLENBQUMsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQy9FLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQzlFLEdBQVEsRUFBRSxHQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFF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QztJQUVELFVBQVUsQ0FBQyxJQUFVO1FBQ25CLE1BQU0sSUFBSSxhQUFhLENBQUMsd0NBQXdDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsTUFBTSxDQUFDLElBQVksSUFBYyxNQUFNLENBQVcsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFLFdBQVcsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWhHLE1BQU0sQ0FBQyxJQUFZO1FBQ2pCLE1BQU0sQ0FBVyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFdBQVcsR0FBRyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFZO1FBQ2pCLElBQUksWUFBWSxHQUFHLFVBQVUsSUFBSSx1QkFBdUIsSUFBSTttQkFDN0MsSUFBSSxrQkFBa0IsQ0FBQztRQUN0QyxNQUFNLENBQVcsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsa0dBQWtHO0lBQ2xHLFNBQVMsQ0FBQyxJQUFVLElBQVksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDaEQsQ0FBQztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgVHlwZSxcbiAgaXNQcmVzZW50LFxuICBpc0Z1bmN0aW9uLFxuICBnbG9iYWwsXG4gIHN0cmluZ2lmeSxcbiAgQ29uY3JldGVUeXBlXG59IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0Jhc2VFeGNlcHRpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucyc7XG5pbXBvcnQge0dldHRlckZuLCBTZXR0ZXJGbiwgTWV0aG9kRm59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtQbGF0Zm9ybVJlZmxlY3Rpb25DYXBhYmlsaXRpZXN9IGZyb20gJy4vcGxhdGZvcm1fcmVmbGVjdGlvbl9jYXBhYmlsaXRpZXMnO1xuXG5leHBvcnQgY2xhc3MgUmVmbGVjdGlvbkNhcGFiaWxpdGllcyBpbXBsZW1lbnRzIFBsYXRmb3JtUmVmbGVjdGlvbkNhcGFiaWxpdGllcyB7XG4gIHByaXZhdGUgX3JlZmxlY3Q6IGFueTtcblxuICBjb25zdHJ1Y3RvcihyZWZsZWN0PzogYW55KSB7IHRoaXMuX3JlZmxlY3QgPSBpc1ByZXNlbnQocmVmbGVjdCkgPyByZWZsZWN0IDogZ2xvYmFsLlJlZmxlY3Q7IH1cblxuICBpc1JlZmxlY3Rpb25FbmFibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZTsgfVxuXG4gIGZhY3RvcnkodDogQ29uY3JldGVUeXBlKTogRnVuY3Rpb24ge1xuICAgIHN3aXRjaCAodC5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuICgpID0+IG5ldyB0KCk7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiAoYTE6IGFueSkgPT4gbmV3IHQoYTEpO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gKGExOiBhbnksIGEyOiBhbnkpID0+IG5ldyB0KGExLCBhMik7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiAoYTE6IGFueSwgYTI6IGFueSwgYTM6IGFueSkgPT4gbmV3IHQoYTEsIGEyLCBhMyk7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHJldHVybiAoYTE6IGFueSwgYTI6IGFueSwgYTM6IGFueSwgYTQ6IGFueSkgPT4gbmV3IHQoYTEsIGEyLCBhMywgYTQpO1xuICAgICAgY2FzZSA1OlxuICAgICAgICByZXR1cm4gKGExOiBhbnksIGEyOiBhbnksIGEzOiBhbnksIGE0OiBhbnksIGE1OiBhbnkpID0+IG5ldyB0KGExLCBhMiwgYTMsIGE0LCBhNSk7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIHJldHVybiAoYTE6IGFueSwgYTI6IGFueSwgYTM6IGFueSwgYTQ6IGFueSwgYTU6IGFueSwgYTY6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2KTtcbiAgICAgIGNhc2UgNzpcbiAgICAgICAgcmV0dXJuIChhMTogYW55LCBhMjogYW55LCBhMzogYW55LCBhNDogYW55LCBhNTogYW55LCBhNjogYW55LCBhNzogYW55KSA9PlxuICAgICAgICAgICAgICAgICAgIG5ldyB0KGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3KTtcbiAgICAgIGNhc2UgODpcbiAgICAgICAgcmV0dXJuIChhMTogYW55LCBhMjogYW55LCBhMzogYW55LCBhNDogYW55LCBhNTogYW55LCBhNjogYW55LCBhNzogYW55LCBhODogYW55KSA9PlxuICAgICAgICAgICAgICAgICAgIG5ldyB0KGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCk7XG4gICAgICBjYXNlIDk6XG4gICAgICAgIHJldHVybiAoYTE6IGFueSwgYTI6IGFueSwgYTM6IGFueSwgYTQ6IGFueSwgYTU6IGFueSwgYTY6IGFueSwgYTc6IGFueSwgYTg6IGFueSwgYTk6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5KTtcbiAgICAgIGNhc2UgMTA6XG4gICAgICAgIHJldHVybiAoYTE6IGFueSwgYTI6IGFueSwgYTM6IGFueSwgYTQ6IGFueSwgYTU6IGFueSwgYTY6IGFueSwgYTc6IGFueSwgYTg6IGFueSwgYTk6IGFueSxcbiAgICAgICAgICAgICAgICBhMTA6IGFueSkgPT4gbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwKTtcbiAgICAgIGNhc2UgMTE6XG4gICAgICAgIHJldHVybiAoYTE6IGFueSwgYTI6IGFueSwgYTM6IGFueSwgYTQ6IGFueSwgYTU6IGFueSwgYTY6IGFueSwgYTc6IGFueSwgYTg6IGFueSwgYTk6IGFueSxcbiAgICAgICAgICAgICAgICBhMTA6IGFueSwgYTExOiBhbnkpID0+IG5ldyB0KGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTksIGExMCwgYTExKTtcbiAgICAgIGNhc2UgMTI6XG4gICAgICAgIHJldHVybiAoYTE6IGFueSwgYTI6IGFueSwgYTM6IGFueSwgYTQ6IGFueSwgYTU6IGFueSwgYTY6IGFueSwgYTc6IGFueSwgYTg6IGFueSwgYTk6IGFueSxcbiAgICAgICAgICAgICAgICBhMTA6IGFueSwgYTExOiBhbnksIGExMjogYW55KSA9PlxuICAgICAgICAgICAgICAgICAgIG5ldyB0KGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTksIGExMCwgYTExLCBhMTIpO1xuICAgICAgY2FzZSAxMzpcbiAgICAgICAgcmV0dXJuIChhMTogYW55LCBhMjogYW55LCBhMzogYW55LCBhNDogYW55LCBhNTogYW55LCBhNjogYW55LCBhNzogYW55LCBhODogYW55LCBhOTogYW55LFxuICAgICAgICAgICAgICAgIGExMDogYW55LCBhMTE6IGFueSwgYTEyOiBhbnksIGExMzogYW55KSA9PlxuICAgICAgICAgICAgICAgICAgIG5ldyB0KGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTksIGExMCwgYTExLCBhMTIsIGExMyk7XG4gICAgICBjYXNlIDE0OlxuICAgICAgICByZXR1cm4gKGExOiBhbnksIGEyOiBhbnksIGEzOiBhbnksIGE0OiBhbnksIGE1OiBhbnksIGE2OiBhbnksIGE3OiBhbnksIGE4OiBhbnksIGE5OiBhbnksXG4gICAgICAgICAgICAgICAgYTEwOiBhbnksIGExMTogYW55LCBhMTI6IGFueSwgYTEzOiBhbnksIGExNDogYW55KSA9PlxuICAgICAgICAgICAgICAgICAgIG5ldyB0KGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTksIGExMCwgYTExLCBhMTIsIGExMywgYTE0KTtcbiAgICAgIGNhc2UgMTU6XG4gICAgICAgIHJldHVybiAoYTE6IGFueSwgYTI6IGFueSwgYTM6IGFueSwgYTQ6IGFueSwgYTU6IGFueSwgYTY6IGFueSwgYTc6IGFueSwgYTg6IGFueSwgYTk6IGFueSxcbiAgICAgICAgICAgICAgICBhMTA6IGFueSwgYTExOiBhbnksIGExMjogYW55LCBhMTM6IGFueSwgYTE0OiBhbnksIGExNTogYW55KSA9PlxuICAgICAgICAgICAgICAgICAgIG5ldyB0KGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTksIGExMCwgYTExLCBhMTIsIGExMywgYTE0LCBhMTUpO1xuICAgICAgY2FzZSAxNjpcbiAgICAgICAgcmV0dXJuIChhMTogYW55LCBhMjogYW55LCBhMzogYW55LCBhNDogYW55LCBhNTogYW55LCBhNjogYW55LCBhNzogYW55LCBhODogYW55LCBhOTogYW55LFxuICAgICAgICAgICAgICAgIGExMDogYW55LCBhMTE6IGFueSwgYTEyOiBhbnksIGExMzogYW55LCBhMTQ6IGFueSwgYTE1OiBhbnksIGExNjogYW55KSA9PlxuICAgICAgICAgICAgICAgICAgIG5ldyB0KGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTksIGExMCwgYTExLCBhMTIsIGExMywgYTE0LCBhMTUsIGExNik7XG4gICAgICBjYXNlIDE3OlxuICAgICAgICByZXR1cm4gKGExOiBhbnksIGEyOiBhbnksIGEzOiBhbnksIGE0OiBhbnksIGE1OiBhbnksIGE2OiBhbnksIGE3OiBhbnksIGE4OiBhbnksIGE5OiBhbnksXG4gICAgICAgICAgICAgICAgYTEwOiBhbnksIGExMTogYW55LCBhMTI6IGFueSwgYTEzOiBhbnksIGExNDogYW55LCBhMTU6IGFueSwgYTE2OiBhbnksIGExNzogYW55KSA9PlxuICAgICAgICAgICAgICAgICAgIG5ldyB0KGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTksIGExMCwgYTExLCBhMTIsIGExMywgYTE0LCBhMTUsIGExNixcbiAgICAgICAgICAgICAgICAgICAgICAgICBhMTcpO1xuICAgICAgY2FzZSAxODpcbiAgICAgICAgcmV0dXJuIChhMTogYW55LCBhMjogYW55LCBhMzogYW55LCBhNDogYW55LCBhNTogYW55LCBhNjogYW55LCBhNzogYW55LCBhODogYW55LCBhOTogYW55LFxuICAgICAgICAgICAgICAgIGExMDogYW55LCBhMTE6IGFueSwgYTEyOiBhbnksIGExMzogYW55LCBhMTQ6IGFueSwgYTE1OiBhbnksIGExNjogYW55LCBhMTc6IGFueSxcbiAgICAgICAgICAgICAgICBhMTg6IGFueSkgPT4gbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEsIGExMiwgYTEzLCBhMTQsIGExNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYTE2LCBhMTcsIGExOCk7XG4gICAgICBjYXNlIDE5OlxuICAgICAgICByZXR1cm4gKGExOiBhbnksIGEyOiBhbnksIGEzOiBhbnksIGE0OiBhbnksIGE1OiBhbnksIGE2OiBhbnksIGE3OiBhbnksIGE4OiBhbnksIGE5OiBhbnksXG4gICAgICAgICAgICAgICAgYTEwOiBhbnksIGExMTogYW55LCBhMTI6IGFueSwgYTEzOiBhbnksIGExNDogYW55LCBhMTU6IGFueSwgYTE2OiBhbnksIGExNzogYW55LFxuICAgICAgICAgICAgICAgIGExODogYW55LCBhMTk6IGFueSkgPT4gbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEsIGExMiwgYTEzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYTE0LCBhMTUsIGExNiwgYTE3LCBhMTgsIGExOSk7XG4gICAgICBjYXNlIDIwOlxuICAgICAgICByZXR1cm4gKGExOiBhbnksIGEyOiBhbnksIGEzOiBhbnksIGE0OiBhbnksIGE1OiBhbnksIGE2OiBhbnksIGE3OiBhbnksIGE4OiBhbnksIGE5OiBhbnksXG4gICAgICAgICAgICAgICAgYTEwOiBhbnksIGExMTogYW55LCBhMTI6IGFueSwgYTEzOiBhbnksIGExNDogYW55LCBhMTU6IGFueSwgYTE2OiBhbnksIGExNzogYW55LFxuICAgICAgICAgICAgICAgIGExODogYW55LCBhMTk6IGFueSwgYTIwOiBhbnkpID0+IG5ldyB0KGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTksIGExMCwgYTExLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGExMiwgYTEzLCBhMTQsIGExNSwgYTE2LCBhMTcsIGExOCwgYTE5LCBhMjApO1xuICAgIH07XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBDYW5ub3QgY3JlYXRlIGEgZmFjdG9yeSBmb3IgJyR7c3RyaW5naWZ5KHQpfScgYmVjYXVzZSBpdHMgY29uc3RydWN0b3IgaGFzIG1vcmUgdGhhbiAyMCBhcmd1bWVudHNgKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3ppcFR5cGVzQW5kQW5ub3RhdGlvbnMocGFyYW1UeXBlcywgcGFyYW1Bbm5vdGF0aW9ucyk6IGFueVtdW10ge1xuICAgIHZhciByZXN1bHQ7XG5cbiAgICBpZiAodHlwZW9mIHBhcmFtVHlwZXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXN1bHQgPSBuZXcgQXJyYXkocGFyYW1Bbm5vdGF0aW9ucy5sZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBuZXcgQXJyYXkocGFyYW1UeXBlcy5sZW5ndGgpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBUUyBvdXRwdXRzIE9iamVjdCBmb3IgcGFyYW1ldGVycyB3aXRob3V0IHR5cGVzLCB3aGlsZSBUcmFjZXVyIG9taXRzXG4gICAgICAvLyB0aGUgYW5ub3RhdGlvbnMuIEZvciBub3cgd2UgcHJlc2VydmUgdGhlIFRyYWNldXIgYmVoYXZpb3IgdG8gYWlkXG4gICAgICAvLyBtaWdyYXRpb24sIGJ1dCB0aGlzIGNhbiBiZSByZXZpc2l0ZWQuXG4gICAgICBpZiAodHlwZW9mIHBhcmFtVHlwZXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJlc3VsdFtpXSA9IFtdO1xuICAgICAgfSBlbHNlIGlmIChwYXJhbVR5cGVzW2ldICE9IE9iamVjdCkge1xuICAgICAgICByZXN1bHRbaV0gPSBbcGFyYW1UeXBlc1tpXV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRbaV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1ByZXNlbnQocGFyYW1Bbm5vdGF0aW9ucykgJiYgaXNQcmVzZW50KHBhcmFtQW5ub3RhdGlvbnNbaV0pKSB7XG4gICAgICAgIHJlc3VsdFtpXSA9IHJlc3VsdFtpXS5jb25jYXQocGFyYW1Bbm5vdGF0aW9uc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwYXJhbWV0ZXJzKHR5cGVPckZ1bmM6IFR5cGUpOiBhbnlbXVtdIHtcbiAgICAvLyBQcmVmZXIgdGhlIGRpcmVjdCBBUEkuXG4gICAgaWYgKGlzUHJlc2VudCgoPGFueT50eXBlT3JGdW5jKS5wYXJhbWV0ZXJzKSkge1xuICAgICAgcmV0dXJuICg8YW55PnR5cGVPckZ1bmMpLnBhcmFtZXRlcnM7XG4gICAgfVxuICAgIGlmIChpc1ByZXNlbnQodGhpcy5fcmVmbGVjdCkgJiYgaXNQcmVzZW50KHRoaXMuX3JlZmxlY3QuZ2V0TWV0YWRhdGEpKSB7XG4gICAgICB2YXIgcGFyYW1Bbm5vdGF0aW9ucyA9IHRoaXMuX3JlZmxlY3QuZ2V0TWV0YWRhdGEoJ3BhcmFtZXRlcnMnLCB0eXBlT3JGdW5jKTtcbiAgICAgIHZhciBwYXJhbVR5cGVzID0gdGhpcy5fcmVmbGVjdC5nZXRNZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCB0eXBlT3JGdW5jKTtcbiAgICAgIGlmIChpc1ByZXNlbnQocGFyYW1UeXBlcykgfHwgaXNQcmVzZW50KHBhcmFtQW5ub3RhdGlvbnMpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl96aXBUeXBlc0FuZEFubm90YXRpb25zKHBhcmFtVHlwZXMsIHBhcmFtQW5ub3RhdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBUaGUgYXJyYXkgaGFzIHRvIGJlIGZpbGxlZCB3aXRoIGB1bmRlZmluZWRgIGJlY2F1c2UgaG9sZXMgd291bGQgYmUgc2tpcHBlZCBieSBgc29tZWBcbiAgICBsZXQgcGFyYW1ldGVycyA9IG5ldyBBcnJheSgoPGFueT50eXBlT3JGdW5jLmxlbmd0aCkpO1xuICAgIHBhcmFtZXRlcnMuZmlsbCh1bmRlZmluZWQpO1xuICAgIHJldHVybiBwYXJhbWV0ZXJzO1xuICB9XG5cbiAgYW5ub3RhdGlvbnModHlwZU9yRnVuYzogVHlwZSk6IGFueVtdIHtcbiAgICAvLyBQcmVmZXIgdGhlIGRpcmVjdCBBUEkuXG4gICAgaWYgKGlzUHJlc2VudCgoPGFueT50eXBlT3JGdW5jKS5hbm5vdGF0aW9ucykpIHtcbiAgICAgIHZhciBhbm5vdGF0aW9ucyA9ICg8YW55PnR5cGVPckZ1bmMpLmFubm90YXRpb25zO1xuICAgICAgaWYgKGlzRnVuY3Rpb24oYW5ub3RhdGlvbnMpICYmIGFubm90YXRpb25zLmFubm90YXRpb25zKSB7XG4gICAgICAgIGFubm90YXRpb25zID0gYW5ub3RhdGlvbnMuYW5ub3RhdGlvbnM7XG4gICAgICB9XG4gICAgICByZXR1cm4gYW5ub3RhdGlvbnM7XG4gICAgfVxuICAgIGlmIChpc1ByZXNlbnQodGhpcy5fcmVmbGVjdCkgJiYgaXNQcmVzZW50KHRoaXMuX3JlZmxlY3QuZ2V0TWV0YWRhdGEpKSB7XG4gICAgICB2YXIgYW5ub3RhdGlvbnMgPSB0aGlzLl9yZWZsZWN0LmdldE1ldGFkYXRhKCdhbm5vdGF0aW9ucycsIHR5cGVPckZ1bmMpO1xuICAgICAgaWYgKGlzUHJlc2VudChhbm5vdGF0aW9ucykpIHJldHVybiBhbm5vdGF0aW9ucztcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgcHJvcE1ldGFkYXRhKHR5cGVPckZ1bmM6IGFueSk6IHtba2V5OiBzdHJpbmddOiBhbnlbXX0ge1xuICAgIC8vIFByZWZlciB0aGUgZGlyZWN0IEFQSS5cbiAgICBpZiAoaXNQcmVzZW50KCg8YW55PnR5cGVPckZ1bmMpLnByb3BNZXRhZGF0YSkpIHtcbiAgICAgIHZhciBwcm9wTWV0YWRhdGEgPSAoPGFueT50eXBlT3JGdW5jKS5wcm9wTWV0YWRhdGE7XG4gICAgICBpZiAoaXNGdW5jdGlvbihwcm9wTWV0YWRhdGEpICYmIHByb3BNZXRhZGF0YS5wcm9wTWV0YWRhdGEpIHtcbiAgICAgICAgcHJvcE1ldGFkYXRhID0gcHJvcE1ldGFkYXRhLnByb3BNZXRhZGF0YTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9wTWV0YWRhdGE7XG4gICAgfVxuICAgIGlmIChpc1ByZXNlbnQodGhpcy5fcmVmbGVjdCkgJiYgaXNQcmVzZW50KHRoaXMuX3JlZmxlY3QuZ2V0TWV0YWRhdGEpKSB7XG4gICAgICB2YXIgcHJvcE1ldGFkYXRhID0gdGhpcy5fcmVmbGVjdC5nZXRNZXRhZGF0YSgncHJvcE1ldGFkYXRhJywgdHlwZU9yRnVuYyk7XG4gICAgICBpZiAoaXNQcmVzZW50KHByb3BNZXRhZGF0YSkpIHJldHVybiBwcm9wTWV0YWRhdGE7XG4gICAgfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGludGVyZmFjZXModHlwZTogVHlwZSk6IGFueVtdIHtcbiAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihcIkphdmFTY3JpcHQgZG9lcyBub3Qgc3VwcG9ydCBpbnRlcmZhY2VzXCIpO1xuICB9XG5cbiAgZ2V0dGVyKG5hbWU6IHN0cmluZyk6IEdldHRlckZuIHsgcmV0dXJuIDxHZXR0ZXJGbj5uZXcgRnVuY3Rpb24oJ28nLCAncmV0dXJuIG8uJyArIG5hbWUgKyAnOycpOyB9XG5cbiAgc2V0dGVyKG5hbWU6IHN0cmluZyk6IFNldHRlckZuIHtcbiAgICByZXR1cm4gPFNldHRlckZuPm5ldyBGdW5jdGlvbignbycsICd2JywgJ3JldHVybiBvLicgKyBuYW1lICsgJyA9IHY7Jyk7XG4gIH1cblxuICBtZXRob2QobmFtZTogc3RyaW5nKTogTWV0aG9kRm4ge1xuICAgIGxldCBmdW5jdGlvbkJvZHkgPSBgaWYgKCFvLiR7bmFtZX0pIHRocm93IG5ldyBFcnJvcignXCIke25hbWV9XCIgaXMgdW5kZWZpbmVkJyk7XG4gICAgICAgIHJldHVybiBvLiR7bmFtZX0uYXBwbHkobywgYXJncyk7YDtcbiAgICByZXR1cm4gPE1ldGhvZEZuPm5ldyBGdW5jdGlvbignbycsICdhcmdzJywgZnVuY3Rpb25Cb2R5KTtcbiAgfVxuXG4gIC8vIFRoZXJlIGlzIG5vdCBhIGNvbmNlcHQgb2YgaW1wb3J0IHVyaSBpbiBKcywgYnV0IHRoaXMgaXMgdXNlZnVsIGluIGRldmVsb3BpbmcgRGFydCBhcHBsaWNhdGlvbnMuXG4gIGltcG9ydFVyaSh0eXBlOiBUeXBlKTogc3RyaW5nIHsgcmV0dXJuICcuLyc7IH1cbn1cbiJdfQ==