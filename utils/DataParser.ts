export interface SiteData {
  name: string;
  siteName: string;
  profileImage: string;
  siteUrl: string;
  contact: string;
  footer: string;
  facebook: string;
  instagram: string;
  twitter: string;
  github: string;
  linkedin: string;
  stackoverflow: string;
  devto: string;
  medium: string;
  dribble: string;
  youtube: string;
  description: Description[];
  steps: Steps[];
}

export interface Description {
  title: string;
  description: string[];
  tags?: string[];
}

export interface Steps {
  title: string;
  description: string;
  data: StepData[];
}

export interface StepData {
  details: boolean;
  time: string;
  label?: string;
  description?: string;
  tech?: string[];
  images?: string[];
  links?: string[];
}

export class DataParser {
  public static getSiteData(json: string): SiteData {
    return cast(JSON.parse(json), r('SiteData'));
  }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
  if (key) {
    throw Error(
      `Invalid value for key "${key}". Expected type ${JSON.stringify(
        typ
      )} but got ${JSON.stringify(val)}`
    );
  }
  throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }));
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }));
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val, key);
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length;
    for (let i = 0; i < l; i++) {
      const typ = typs[i];
      try {
        return transform(val, typ, getProps);
      } catch (_) {}
    }
    return invalidValue(typs, val);
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(cases, val);
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue('array', val);
    return val.map((el) => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null;
    }
    const d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue('Date', val);
    }
    return d;
  }

  function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
    if (val === null || typeof val !== 'object' || Array.isArray(val)) {
      return invalidValue('object', val);
    }
    const result: any = {};
    Object.getOwnPropertyNames(props).forEach((key) => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
      result[prop.key] = transform(v, prop.typ, getProps, prop.key);
    });
    Object.getOwnPropertyNames(val).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key);
      }
    });
    return result;
  }

  if (typ === 'any') return val;
  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val);
  }
  if (typ === false) return invalidValue(typ, val);
  while (typeof typ === 'object' && typ.ref !== undefined) {
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === 'object') {
    return typ.hasOwnProperty('unionMembers')
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty('arrayItems')
      ? transformArray(typ.arrayItems, val)
      : typ.hasOwnProperty('props')
      ? transformObject(getProps(typ), typ.additional, val)
      : invalidValue(typ, val);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== 'number') return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  SiteData: o(
    [
      { json: 'name', js: 'name', typ: '' },
      { json: 'siteName', js: 'siteName', typ: '' },
      { json: 'profileImage', js: 'profileImage', typ: '' },
      { json: 'siteUrl', js: 'siteUrl', typ: '' },
      { json: 'footer', js: 'footer', typ: '' },
      { json: 'contact', js: 'contact', typ: u(undefined, '') },
      { json: 'facebook', js: 'facebook', typ: u(undefined, '') },
      { json: 'instagram', js: 'instagram', typ: u(undefined, '') },
      { json: 'twitter', js: 'twitter', typ: u(undefined, '') },
      { json: 'github', js: 'github', typ: u(undefined, '') },
      { json: 'linkedin', js: 'linkedin', typ: u(undefined, '') },
      { json: 'stackoverflow', js: 'stackoverflow', typ: u(undefined, '') },
      { json: 'devto', js: 'devto', typ: u(undefined, '') },
      { json: 'medium', js: 'medium', typ: u(undefined, '') },
      { json: 'dribble', js: 'dribble', typ: u(undefined, '') },
      { json: 'youtube', js: 'youtube', typ: u(undefined, '') },
      { json: 'description', js: 'description', typ: a(r('Description')) },
      { json: 'steps', js: 'steps', typ: a(r('Steps')) },
    ],
    false
  ),
  Description: o(
    [
      { json: 'title', js: 'title', typ: '' },
      { json: 'description', js: 'description', typ: a('') },
      { json: 'tags', js: 'tags', typ: u(undefined, a('')) },
    ],
    false
  ),
  Steps: o(
    [
      { json: 'title', js: 'title', typ: '' },
      { json: 'description', js: 'description', typ: '' },
      { json: 'data', js: 'data', typ: a(r('StepData')) },
    ],
    false
  ),
  StepData: o(
    [
      { json: 'details', js: 'details', typ: true },
      { json: 'time', js: 'time', typ: '' },
      { json: 'label', js: 'label', typ: u(undefined, '') },
      { json: 'description', js: 'description', typ: u(undefined, '') },
      { json: 'tech', js: 'tech', typ: u(undefined, a('')) },
      { json: 'images', js: 'images', typ: u(undefined, a('')) },
      { json: 'links', js: 'links', typ: u(undefined, a('')) },
    ],
    false
  ),
};
