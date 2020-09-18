import { Lending } from "@StockAfiCore/model/lending/Lending";
import * as React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import HistoryLendingDetail from "./HistoryLendingDetail";


export default class HistoriesLending extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container2}>
                {/* <Text style={styles.textLabel}>My Investsment</Text>
            <Separator /> */}
                <FlatList
                    data={this.props.historiesLending}
                    renderItem={({ item }) => (
                        <HistoryLendingDetail
                            title={item.lendingPackage?.name || "undefined"}
                            type={true}
                            typeLabel="AMOUNT"
                            time={this.getTime(item.createdAt)}
                            coin={item.loanAmount || 0}
                        />
                    )}
                    keyExtractor={(item: Lending, index: number) => item._id || index.toString()}
                />
            </View>
        )
    }








    getTime = (date: Date | undefined): String => {
        if (date !== undefined) return date.toString().substring(0, 10);
        else return "null";
    };
}
const styles = StyleSheet.create({
    container2: {
        paddingVertical: 20,
        paddingBottom: 5,
        paddingTop: 10,
    },
})

type Props = {
    historiesLending: Lending[]
}

type State = {

}