import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import { RAPID_API_KEY, RAPID_API_HOST } from "react-native-dotenv";
import styles from "./popularjobs.style";
import { useRouter } from "expo-router";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hooks/useFetch"

const rapidapikey = RAPID_API_KEY;
const rapidapihost = RAPID_API_HOST;

const Popularjobs = () => {

  const { data, error, isLoading, refetch } = useFetch("search", {
    query: "React developer",
    num_pages: 1,
  })

  const router = useRouter();

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>

        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.tertiary} />
        ) : error ? (
          <Text>Something went wrong, please try again later</Text>
        ) : (
          <FlatList
            data={data}

            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}

            keyExtractor={(item) => item?.job_id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ columnGap: SIZES.ten }}
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
