import Home from "../screens/Home"

export class MyFormat {
    public static testComponet() {
        // Home.bind();
    }


    public static roundingMoney = (money: number): string => {
        // let moneyString: string = "";
        // if (money >= 0 && money < 1e3) {
        //     moneyString = money.toFixed(2).toString();
        // }
        // else if (money >= 1e3 && money < 1e6) {
        //     moneyString = `${(money / 1e3).toFixed(2).toString()}K`;
        // }
        // else if (money >= 1e6 && money < 1e9) {
        //     moneyString = `${(money / 1e6).toFixed(2).toString()}M`;
        // }
        // else if (money >= 1e9 && money < 1e12) {
        //     moneyString = `${(money / 1e9).toFixed(2).toString()}B`;
        // }
        // else if (money >= 1e12 && money < 1e15) {
        //     moneyString = `${(money / 1e12).toFixed(2).toString()}KB`;
        // }
        // else if (money >= 1e15 && money < 1e18) {
        //     moneyString = `${(money / 1e15).toFixed(2).toString()}MB`;
        // }
        return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
        // return `$${moneyString}`;
    }

    public static formatDate(date : Date) : string{
        let getDate = new Date();
        let dayString = getDate.getDay();
        let monthString = getDate.getMonth() + 1;
        let yearString = getDate.getFullYear();
        return `${getDate.getHours()} : ${getDate.getMinutes()} ${getDate.getDay()}/${getDate.getMonth() + 1}/${getDate.getFullYear()}`;
    }

    public static getTime = (date: Date | undefined): string => {
        if (date !== undefined) return date.toString().substring(0, 10);
        else return "null";
    };
}