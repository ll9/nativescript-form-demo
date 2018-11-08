import {
    ModalDatetimepicker
} from 'nativescript-modal-datetimepicker';

export default class DateService {
    constructor() {
        this.picker = new ModalDatetimepicker()
    }

    getDate() {
        return new Promise(async (resolve, reject) => {
            let date = await this.picker
                .pickDate({
                    title: "Datum",
                    theme: "light",
                    maxDate: new Date()
                })
                .catch(err => {
                    reject(err)
                });

            let jsdate = new Date(date.year, date.month - 1, date.day);
            let todayUTC = new Date(Date.UTC(jsdate.getFullYear(), jsdate.getMonth(), jsdate.getDate()));
            resolve(todayUTC.toISOString().slice(0, 10))
        })
    }
}