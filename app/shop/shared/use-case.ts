import { GetState, SetState } from "zustand";

export type UseCase<Store extends object, T> = ((set: SetState<Store>, get: GetState<Store>) => T)