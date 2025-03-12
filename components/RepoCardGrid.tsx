import { StyleSheet, View } from "react-native";
import { Material3Theme } from "@pchmn/expo-material3-theme";
import RepoCard from "@/components/card/RepoCard";
import { FlatGrid } from 'react-native-super-grid';
import { useEffect, useState } from "react";
import { fetchAllGithubRepos, GithubRepoUiState } from "@/components/card/repo-card-inner/GithubResolve";
import { openUrl } from "@/utils/UrlUtil";

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
            fullname={repo.fullname}
            description={repo.description}
            stars={repo.stars}
            forks={repo.forks}
            watchers={repo.watchers}
            language={repo.language ?? undefined}
            languageColor={repo.languageColor ?? undefined}
            detailedDescription={repo.detailedDescription ?? undefined}
            archived={repo.archived}
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
  },
});
