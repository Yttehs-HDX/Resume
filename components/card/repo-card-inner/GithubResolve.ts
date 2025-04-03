import { GithubRepos } from "@/constants/GithubRepos";
import axios from "axios";
import { getLanguageColor } from "./LanguageColor";

export const fetchAllGithubRepos = async () => {
  const repos: GithubRepoUiState[] = [];
  for (const user of GithubRepos.RepoList) {
    for (const repo of user.Repos) {
      let githubRepoUiState = await getGithubResolve(user.Username, repo.Name);
      if (githubRepoUiState) {
        githubRepoUiState.detailedDescription = repo.Description;
        if (githubRepoUiState.language) {
          const languageColor = getLanguageColor(githubRepoUiState.language);
          githubRepoUiState.languageColor = languageColor;
        }
        repos.push(githubRepoUiState);
      } else {
        let offlineRepo = new GithubRepoUiState(
          `https://github.com/${user.Username}/${repo.Name}`,
          repo.Name,
          `${user.Username}/${repo.Name}`,
          "Waiting for GitHub API...",
          -1,
          -1,
          -1,
          repo.Lang,
          false,
        );
        offlineRepo.detailedDescription = repo.Description;
        offlineRepo.languageColor = getLanguageColor(repo.Lang);
        repos.push(offlineRepo);
      }
    }
  }
  return repos;
};

async function getGithubResolve(username: string, repo: string) {
  const url = `https://api.github.com/repos/${username}/${repo}`;

  try {
    const response = await axios.get(url,
      {
        headers: {
          "Accept": "application/vnd.github.v3+json",
          // "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        timeout: 1000,
      }
    );
    const data = response.data;
    // console.log(data);
    return new GithubRepoUiState(
      data.html_url,
      data.name,
      data.full_name,
      data.description,
      data.stargazers_count,
      data.forks_count,
      data.watchers_count,
      data.language,
      data.archived,
    );
  } catch (error) {
    // console.warn(error);
    return null;
  }
}

export class GithubRepoUiState {
  url: string;
  name: string;
  fullname: string;
  description: string;
  detailedDescription: string | null;
  stars: number;
  forks: number;
  watchers: number;
  language: string | null;
  languageColor: string | null;
  archived: boolean;

  constructor(url: string, name: string, fullname: string, description: string, stars: number, forks: number, watchers: number, language: string | null, archived: boolean) {
    this.url = url;
    this.name = name;
    this.fullname = fullname;
    this.description = description;
    this.detailedDescription = null;
    this.stars = stars;
    this.forks = forks;
    this.watchers = watchers;
    this.language = language;
    this.languageColor = null;
    this.archived = archived;
  }
}
