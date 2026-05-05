import React from "react";
import { Text, Image } from "react-native";
import { createBox } from "@shopify/restyle";
import { ThemeProvider } from "@shopify/restyle";
import theme, { Theme } from "./theme";

const Box = createBox<Theme>();

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <Box flex={1} backgroundColor="background" padding="m" justifyContent="center">

      
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
          Where are you noticing hair loss?
        </Text>

       
        <Box flexDirection={{ phone: "column", tablet: "row" }} gap="m">

        
          <Box flex={1} backgroundColor="card" padding="m" borderRadius={12}>
            <Image
              source={require("../assets/hairs2.png")}
              style={{ width: "100%", height: 120, borderRadius: 10 }}
              resizeMode="contain"
            />
            <Text style={{ marginTop: 10 }}>Along the hairline</Text>
          </Box>

     
          <Box flex={1} backgroundColor="card" padding="m" borderRadius={12}>
            <Image
              source={require("../assets/hairs3.png")}
              style={{ width: "100%", height: 120, borderRadius: 10 }}
              resizeMode="contain"
            />
            <Text style={{ marginTop: 10 }}>At the crown</Text>
          </Box>

         
          <Box flex={1} backgroundColor="card" padding="m" borderRadius={12}>
            <Image
              source={require("../assets/hairs2.png")}
              style={{ width: "100%", height: 120, borderRadius: 10 }}
              resizeMode="contain"
            />
            <Text style={{ marginTop: 10 }}>All over</Text>
          </Box>

        </Box>

      </Box>
    </ThemeProvider>
  );
}
