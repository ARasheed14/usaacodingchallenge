// Foods
export interface FoodListItem {
    offset?: number;
    group?: string;
    name?: string;
    ndbno?: string;
    ds?: string;
}

export interface FoodList {
    q?: string;
    sr?: string;
    ds?: string;
    start?: number;
    end?: number;
    total?: number;
    group?: string;
    sort?: string;
    item?: FoodListItem[];
}

// Reports

export interface Measure {
    label?: string;
    eqv?: number;
    eunit?: string;
    qty?: number;
    value?: number;
}

export interface Nutrient {
    nutrient_id?: number;
    name?: string;
    group?: string;
    unit?: string;
    value?: number;
    sourcecode?: any;
    dp?: any;
    se?: string;
    derivation?: string;
    measures?: Measure[];
}

export interface Food {
    ndbno?: string;
    name?: string;
    sd?: string;
    fg?: string;
    sn?: string;
    cn?: string;
    manu?: string;
    nf?: number;
    cf?: number;
    ff?: number;
    pf?: number;
    r?: string;
    rd?: string;
    ds?: string;
    ru?: string;
    nutrients?: Nutrient[];
}

export interface Source {
    id?: number;
    title?: string;
    authors?: string;
    vol?: string;
    iss?: string;
    year?: string;
}

export interface Report {
    sr?: string;
    type?: string;
    food?: Food;
    sources?: Source[];
    footnotes?: any[];
    langual?: any[];
}
