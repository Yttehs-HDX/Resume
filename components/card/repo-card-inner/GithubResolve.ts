import { GithubRepos } from "@/constants/GithubRepos";
import axios from "axios";

export const fetchAllGithubRepos = async () => {
  const repos: GithubRepoUiState[] = [];
  for (const user of GithubRepos.RepoList) {
    for (const repo of user.Repos) {
      const githubRepoUiState = await getGithubResolve(user.Username, repo.Name);
      if (githubRepoUiState) {
        repos.push(githubRepoUiState);
      }
    }
  }
  return repos;
};

async function getGithubResolve(username: string, repo: string) {
  const url = `https://api.github.com/repos/${username}/${repo}`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    // console.log(data);
    return new GithubRepoUiState(
      data.html_url,
      data.name,
      data.full_name,
      data.description,
      data.stargazers_count,
      data.forks_count,
      data.archived,
    );
  } catch (error) {
    console.warn(error);
    return null;
  }
}

export class GithubRepoUiState {
  url: string;
  name: string;
  fullname: string;
  description: string;
  stars: number;
  forks: number;
  archived: boolean;

  constructor(url: string, name: string, fullname: string, description: string, stars: number, forks: number, archived: boolean) {
    this.url = url;
    this.name = name;
    this.fullname = fullname;
    this.description = description;
    this.stars = stars;
    this.forks = forks;
    this.archived = archived;
  }
}
