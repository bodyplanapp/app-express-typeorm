import { getRepository } from "typeorm";
import { Customer } from "../../models/customer.model";


export const customerResolver = {
    async getCustomers() {
        return await getRepository(Customer).find();
    }
};
// export async function getAll() {
//     return await getRepository(Customer).find();
// }

// export async function create(customer) {
//     return await getRepository(Customer).save(customer);
// }