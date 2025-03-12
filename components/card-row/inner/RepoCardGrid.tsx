import { StyleSheet, View } from "react-native";
import { Material3Theme } from "@pchmn/expo-material3-theme";
import RepoCard from "@/components/card/RepoCard";
import { FlatGrid } from 'react-native-super-grid';
import { useEffect, useState } from "react";
import { fetchAllGithubRepos, GithubRepoUiState } from "@/components/card/repo-card-inner/GithubResolve";

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
        itemDimension={300}
        data={githubRepos}
        renderItem={({ item: repo, index }) => (
          <RepoCard
            key={index}
            theme={theme}
            colorScheme={colorScheme}
            title={repo.fullname}
            content={repo.description}
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
});
