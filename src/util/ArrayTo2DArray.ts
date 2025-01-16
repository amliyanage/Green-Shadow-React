import {Staff} from "../model/Staff.ts";

export const convertStaffArrayTo2DArray = (staffArray : Staff[]) => {
    return staffArray.map((staff) => [
        staff.staffId ?? "",
        staff.firstName ?? "",
        staff.lastName ?? "",
        staff.gender ?? "",
        staff.contactNo ?? "",
    ]);
}