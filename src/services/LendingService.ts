import { BaseOrganizationModel } from "../share/base-ale/model/BaseOrganizationModel";
import { BaseModel } from "../share/base-ale/model/BaseModel";
import Lending from "../components/Lending";

export class LendingService {
    public static createLending(userId: string, lendingPackageId: string, loanAmount: number, startAt: Date, endAt: Date): Promise<Lending> {
        throw new Error("this function is not implement");
    }
}