
export type simulatorState={
    type:number,
    grade:number,
    speed:number,
    kg:number,
    heightMeters?:number,
}

export const simulatorValuesInitial:simulatorState={
    type:1,
    grade:0,
    speed:0,
    kg:0
}