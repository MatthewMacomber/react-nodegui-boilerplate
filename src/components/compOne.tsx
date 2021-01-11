import { Text, View } from "@nodegui/react-nodegui";
import React from "react";

export function CompOne() {
  return (
    <View style={containerStyle}>
      <Text wordWrap={true}>
        This is a simple component.
      </Text>
    </View>
  );
}

const containerStyle = `
    margin-horizontal: 20px;
    padding-horizontal: 10px;
`;
