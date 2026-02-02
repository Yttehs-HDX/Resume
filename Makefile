.PHONY : all help build preview clean

PNPM := pnpm

all: help

help:
	@echo "Available targets:"
	@echo "  build   - Build the project"
	@echo "  preview - Preview the built project"
	@echo "  clean   - Clean the build artifacts"

OUT_DIR := dist

build:
	@$(PNPM) build

preview:
	@$(PNPM) dev

clean:
	@rm -rf $(OUT_DIR)
