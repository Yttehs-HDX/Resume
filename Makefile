.PHONY : all build preview clean

EXPO := npx expo
PLATFORM := web

O := dist

all: build

build:
	@$(EXPO) export

preview:
	@$(EXPO) start --$(PLATFORM)

clean:
	rm -rf $(O)
