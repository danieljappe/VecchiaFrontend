import {Fetcher} from "./fetcher.js";
import {Employee} from "../../models/employee.js";

export default class EmployeeFetcher extends Fetcher {
    allEmployees;


    constructor() {
        super();
        this.allEmployees = this.baseURL + "/employees";
    }

    create = async function(employee) { //requires an Employee class -> ../models/employee.js
        try {
            const jsonObject = {
                "employeeID" : employee.employeeID,
                "firstName" : employee.firstName,
                "lastName" : employee.lastName,
                "email" : employee.email,
                "phone" : employee.phone,
                "isAdmin" : employee.isAdmin,
            };
            const response = await this.post(this.allEmployees + "/create", jsonObject);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const json = await response.json();
            return json;
        } catch (error) {
            console.error('Create Employee Error:', error);
            throw error;
        }
    }

    getAll = async function() {
        const response = await this.fetchData(this.allEmployees);
        console.log(`There are ${response.length} employees`);
        if (response.length === 0) return [];
        let items = [];
        for (let i = 0; i < response.length; i++) {
            items.push(this.createMenuItemObject(response[i]));
        }
        return items;
    }

    createEmployeeObject = function(response) {
        return new Employee(
            response.id,
            response.firstName,
            response.lastName,
            response.email,
            response.phone,
            response.isAdmin,
        );
    }

}
export { EmployeeFetcher };