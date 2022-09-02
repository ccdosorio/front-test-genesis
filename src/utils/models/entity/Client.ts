import { Department } from "./Department";
import { MaritalStatus } from "./MaritalStatus";
import { Municipality } from "./Municipality";

export interface Client {
    id?:            number;
    dpi:           string;
    name:          string;
    birthday:      Date;
    address:       string;
    phone:         number;
    maritalStatus: MaritalStatus;
    department:    Department;
    municipality:  Municipality;
    state?:         string;
}
