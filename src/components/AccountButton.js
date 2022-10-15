import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import * as actions from "loot-core/src/client/actions";
import Loading from "loot-design/src/svg/v1/AnimatedLoading";
import { colors } from "loot-design/src/style";

function AccountButton({ darkMode }) {
  return (
    <View style={{ marginTop: 10 }}>
      {loading === "global" ? (
        <View style={{ alignItems: "center" }}>
          <Loading
            width={30}
            height={30}
            color={darkMode ? "white" : colors.n1}
          />
        </View>
      ) : (
        <Text
          style={{
            fontSize: 13,
            color: darkMode ? colors.n9 : colors.n4,
            marginBottom: 10,
            textAlign: "center",
          }}
        >
          IAP is disabled.
        </Text>
      )}
    </View>
  );
}

export default connect(
  (state, props) => ({
    userData: props.userData || state.user.data,
    isLoggedIn: !!state.user.data,
  }),
  actions
)(AccountButton);
