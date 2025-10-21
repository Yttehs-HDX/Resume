{
  description = "Dev shell for pnpm project";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.05";

  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs { inherit system; };
    in {
      devShells.${system}.default = pkgs.mkShell {
        buildInputs = with pkgs; [ nodejs pnpm ];

        shellHook = ''
          echo "Nix dev shell"
        '';
      };
    };
}

