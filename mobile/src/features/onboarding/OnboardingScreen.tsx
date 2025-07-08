import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const COUNTRIES = [
  { label: "Nigeria", value: "NG" },
  { label: "Ghana", value: "GH" },
  { label: "Kenya", value: "KE" },
];

const GOALS = [
  { label: "Weight Loss", value: "weight_loss" },
  { label: "Muscle Gain", value: "muscle_gain" },
  { label: "Healthy Eating", value: "healthy" },
];

export default function OnboardingScreen() {
  const [country, setCountry] = useState("NG");
  const [goal, setGoal] = useState("healthy");
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Meal Planner</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Select Your Country</Text>
        <View style={styles.options}>
          {COUNTRIES.map((c) => (
            <Button
              key={c.value}
              title={c.label}
              color={country === c.value ? "#2e86de" : "#dcdde1"}
              onPress={() => setCountry(c.value)}
            />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Your Primary Goal</Text>
        <View style={styles.options}>
          {GOALS.map((g) => (
            <Button
              key={g.value}
              title={g.label}
              color={goal === g.value ? "#2e86de" : "#dcdde1"}
              onPress={() => setGoal(g.value)}
            />
          ))}
        </View>
      </View>

      <Button
        title="Get Started"
        onPress={() => navigation.navigate("Home")}
        color="#10ac84"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  section: {
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  options: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
