.PHONY : all dependencies build preview clean

NPM := npm
EXPO := npx expo
PLATFORM := web

O := dist

all: build

dependencies:
	@$(NPM) install

build: dependencies
	@$(EXPO) export --platform $(PLATFORM)

preview:
	@$(EXPO) start --$(PLATFORM)

clean:
	rm -rf $(O)
