import { QuestionAndAnswer } from "@StockAfiCore/model/user/QuestionAndAnswer";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { Button } from "../components/common/Button";
import * as color from "../Color";
import { ConfigService } from "../services/ConfigService";
export default function QuestionAndAnswerPage() {
  const [QAs, setQAs] = useState<QuestionAndAnswer[]>([]);

  useEffect(() => {
    ConfigService.getQAs().then((QAs) => {
      setQAs(QAs);
    });
  }, []);
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={QAs}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <Text style={styles.question}>{item.question}</Text>
              <View>
                {item.answer.split("{enter}").map((p) => {
                  return <Text style={styles.answer}>{p}</Text>;
                })}
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item._id || ""}
      />
      <Button
        onPress={() => {
          window.open("https://m.me/109427487614454?ref=lien_he", "_blank");
        }}
      >
        Chat hỗ trợ
      </Button>
    </ScrollView>
    // <View style={styles.container}>
    //   <Text>Ho hieu</Text>
    //   {QAs.map((QA) => (
    //     <View style={styles.item}>
    //       <Text style={styles.question}>{QA.question}</Text>
    //       <Text style={styles.answer}>{QA.answer}</Text>
    //     </View>
    //   ))}
    // </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    padding: 14,
    paddingBottom: 30,
    backgroundColor: color.dark,
    height: "100%",
  },
  item: {
    borderBottomColor: color.white,
    borderBottomWidth: 1,
    paddingBottom: 14,
    marginBottom: 14,
  },
  question: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 14,
    color: color.white,
  },
  answer: {
    fontSize: 14,
    fontWeight: "400",
    color: color.white,
    textAlign: "justify",
  },
});
