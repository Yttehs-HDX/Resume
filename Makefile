.PHONY : all server build

EXPO := npx expo
PLATFORM := web

all: build

build:
	@$(EXPO) export

server:
	@$(EXPO) start --$(PLATFORM)
