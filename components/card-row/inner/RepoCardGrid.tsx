import { StyleSheet, View } from "react-native";
import { Material3Theme } from "@pchmn/expo-material3-theme";
import RepoCard from "@/components/card/RepoCard";
import { FlatGrid } from 'react-native-super-grid';
import { useEffect, useState } from "react";
import { fetchAllGithubRepos, GithubRepoUiState } from "@/components/card/repo-card-inner/GithubResolve";
import Title from "@/components/card/card-inner/Title";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import Content from "@/components/card/card-inner/Content";
import { openUrl } from "@/utils/UrlUtil";
import Capsule from "@/components/card/repo-card-inner/WarnCapsule";

type Props = {
  theme: Material3Theme;
  colorScheme: "light" | "dark";
};

export default function RepoCardGrid({ theme, colorScheme }: Props) {
  const [githubRepos, setGithubRepos] = useState<GithubRepoUiState[]>([]);
  useEffect(() => {
    fetchAllGithubRepos().then((repos) => {
      setGithubRepos(repos);
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatGrid
        itemDimension={400}
        data={githubRepos}
        renderItem={({ item: repo, index }) => (
          <RepoCard key={index} theme={theme} colorScheme={colorScheme}
            title={
              <>
                <Octicons name="repo" size={24} color={theme[colorScheme].onPrimaryContainer} />
                <Title theme={theme} colorScheme={colorScheme} text={repo.fullname} />
                <View style={styles.spacer} />
                {repo.archived && (
                  <Capsule theme={theme} colorScheme={colorScheme} text="Archived" />
                )}
              </>
            }
            content={
              <View>
                <Content theme={theme} colorScheme={colorScheme} text={repo.description} />
                <View style={styles.row}>
                  <View style={styles.subRow}>
                    <MaterialIcons name="star" size={16} color={theme[colorScheme].onPrimaryContainer} />
                    <Content theme={theme} colorScheme={colorScheme} text={repo.stars.toString()} />
                  </View>
                  <View style={styles.subRow}>
                    <Octicons name="repo-forked" size={16} color={theme[colorScheme].onPrimaryContainer} />
                    <Content theme={theme} colorScheme={colorScheme} text={repo.forks.toString()} />
                  </View>
                  <View style={styles.subRow}>
                    <Octicons name="eye" size={16} color={theme[colorScheme].onPrimaryContainer} />
                    <Content theme={theme} colorScheme={colorScheme} text={repo.watchers.toString()} />
                  </View>
                  <View style={styles.spacer} />
                  {repo.language && (
                    <View style={styles.subRow}>
                      <MaterialIcons name="language" size={16} color={theme[colorScheme].onPrimaryContainer} />
                      <Content theme={theme} colorScheme={colorScheme} text={repo.language} />
                    </View>
                  )}
                  <View style={styles.spacer} />
                </View>
                {repo.detailedDescription && (
                  <Content theme={theme} colorScheme={colorScheme} text={repo.detailedDescription} />
                )}
              </View>
            }
            onClick={() => openUrl(repo.url, true)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
    gap: 16,
  },
  spacer: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 16,
  },
  subRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
});
