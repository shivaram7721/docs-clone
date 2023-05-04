import { atom } from "recoil";

export const content = atom({
    key:"content",
    default: 'google'
})

export const selectedAction = atom({
    key: 'selectedAction',
    default: 'p'
})

