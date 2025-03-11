.PHONY : all server build clean

EXPO := npx expo
PLATFORM := web

O := dist

all: build

build:
	@$(EXPO) export

server:
	@$(EXPO) start --$(PLATFORM)

clean:
	rm -rf $(O)
