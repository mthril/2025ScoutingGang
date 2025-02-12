import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const FullWidthTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    { id: 0, title: "Auton" },
    { id: 1, title: "Teleop" },
    { id: 2, title: "Endgame" },
  ];

  const tabContents = [
    <Text key={0} className="text-center mt-4">
      Content for Tab 1
    </Text>,
    <Text key={1} className="text-center mt-4">
      Content for Tab 2
    </Text>,
    <Text key={2} className="text-center mt-4">
      Content for Tab 3
    </Text>,
  ];

  return (
    <View className="flex-1 p-4">
      {/* Tabs Container */}
      <View className="border-b border-gray-200 flex-row">
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            className="flex-1 items-center py-4 border-b-2"
            style={{
              borderBottomColor:
                activeTab === tab.id ? "#6366f1" : "transparent", // Indigo color for active tab
            }}
            onPress={() => setActiveTab(tab.id)}
          >
            <Text
              className={`text-lg ${
                // 👈 Larger font size
                activeTab === tab.id ? "text-indigo-600" : "text-gray-500"
              }`}
            >
              {tab.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tab Content */}
      <View className="mt-4">{tabContents[activeTab]}</View>
    </View>
  );
};

export default FullWidthTabs;
