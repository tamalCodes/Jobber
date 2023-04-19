import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import styles from "./welcome.style";
import { COLORS, FONT, SIZES, icons } from "../../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FlatList } from "react-native";
import { useRouter } from "expo-router";

const jobTypes = ["Full Time", "Part Time", "Freelance", "Internship", "Baito"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();

  const [activeJobType, setActiveJobType] = React.useState("Full Time");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello, Tamal</Text>
        <Text style={styles.welcomeMessage}>Find your dream job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="What are you looking for ? "
            placeholderTextColor={COLORS.lightblack}
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            style={styles.searchBtnImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        {/* 
        The `horizontal` makes the item goes horizontally 
        contentContainerStyle is basically how the list can be shaped and styles
         */}

        <FlatList
          data={jobTypes}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.tab(activeJobType, item)}
                onPress={() => {
                  setActiveJobType(item);
                  router.push(`/search/${item}`);
                }}
              >
                <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ columnGap: SIZES.ten }}
        />
      </View>
    </View>
  );
};

export default Welcome;
